
import React, { useContext, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { useParams } from "react-router-dom";
import GlobalApi from "./../../../../../../../Service/GlobalApi";
import { toast } from "sonner";
import { LoaderCircle, Brain } from "lucide-react";
import AIchatSession from "./../../../../../../../Service/AIModal";

export default function Summary({ enabledNext }) {
  const params = useParams();
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState(resumeInfo?.summery|| "");
  const [aiGeneratedSummaryList, setAiGeneratedSummaryList] = useState([]);
  const [userPrompt, setUserPrompt] = useState("");

  useEffect(() => {
    if (summary) {
      setResumeInfo((prevInfo) => ({
        ...prevInfo,
        summery: summary, 
      }));
    }
  }, [summary, setResumeInfo]);

  const onSave = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      data: {
        summery: summary,
      },
    };
    GlobalApi.UpdateResumeDetail(params?.resumeId, data).then(
      (resp) => {
        console.log(resp);
        enabledNext(true);
        setLoading(false);
        toast("Details Updated");
      },
      (error) => {
        setLoading(false);
        toast.error("Failed to update details.");
      }
    );
  };

  const GenerateSummaryFromAI = async () => {
    if (!userPrompt) {
      toast.error("Please enter a prompt.");
      return;
    }

    setLoading(true);
    const promptToUse = userPrompt.replace(
      "{jobTitle}",
      resumeInfo?.jobTitle || "your job title"
    );
    console.log("Prompt sent to AI:", promptToUse);

    try {
      const result = await AIchatSession.sendMessage(promptToUse);
      const responseText = await result.response.text();
      console.log("AI Response Text:", responseText);

      let parsedResult;
      try {
        parsedResult = JSON.parse(responseText);
        console.log("Parsed AI Response:", parsedResult);
      } catch (parseError) {
        console.error("Failed to parse AI response:", parseError);
        toast.error("Failed to parse AI response.");
        setAiGeneratedSummaryList([]);
        return;
      }

      // Handle different types of AI responses
      if (parsedResult.summary) {
        setSummary(parsedResult.summary);
      } else if (parsedResult.joke) {
        setSummary(parsedResult.joke); // You can choose how to handle jokes or other types of responses
      } else if (parsedResult.setup && parsedResult.punchline) {
        setSummary(`${parsedResult.setup} ${parsedResult.punchline}`); // Handle jokes with setup and punchline
      } else if (typeof parsedResult === 'string') {
        setSummary(parsedResult); // Handle simple string responses
      } else {
        setAiGeneratedSummaryList([]);
        toast.error("AI response is not in the expected format.");
      }
    } catch (error) {
      console.error("Error generating summary from AI:", error);
      toast.error("Failed to generate summary from AI.");
      setAiGeneratedSummaryList([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
        <h2 className="font-bold text-lg">Summary</h2>
        <p>Add Summary For Your Job Title</p>
      </div>
      <form className="mt-7" onSubmit={onSave}>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-end">
            <label htmlFor="prompt">Prompt</label>
            <input 
              type="text"
              id="prompt"
              value={userPrompt}
              onChange={(e) => setUserPrompt(e.target.value)}
              className="border p-2 rounded"
              placeholder="Enter prompt here..."
            />
          </div>
          <div className="flex justify-between items-end">
            <label>Add Summary</label>
            <Button
              onClick={GenerateSummaryFromAI}
              type="button"
              variant="outline"
              size="sm"
              className="border-primary text-primary flex gap-2"
            >
              <Brain className="h-4 w-4" />
              Generate From AI
            </Button>
          </div>
          <Textarea
            defaultValue={resumeInfo?.summary}
            className="mt-5"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            required
          />
          <div className="mt-2 flex justify-end">
            <Button type="submit" disabled={loading}>
              {loading ? <LoaderCircle className="animate-spin" /> : "SAVE"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
