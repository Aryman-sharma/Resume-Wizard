import React, { useContext, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { useState } from "react";
import { useParams } from "react-router-dom";
import GlobalApi from "./../../../../../../../Service/GlobalApi";
import { toast } from "sonner";
import { LoaderCircle } from "lucide-react";
import { Brain } from "lucide-react";

export default function Summary({ enabledNext }) {
  const params = useParams();
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState();

  useEffect(() => {
    summary &&
      setResumeInfo({
        ...resumeInfo,
        summery: summary,
      });
  });

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
      }
    );
  };

  return (
    <div>
      <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
        <h2 className="font-bold text-lg">Summary</h2>
        <p>Add Summary For Your Job Title</p>
      </div>
      <form className="mt-7" onSubmit={onSave}>
        <div className="flex justify-between items-end">
          <label>Add Summary</label>
          <Button type="button"
            variant="outline"
            size="sm"
            className="border-primary text-primary flex gap-2"
          ><Brain className="h-4 w-4"/>
            Generate from AI
          </Button>
        </div>

        <Textarea
          className="mt-5"
          onChange={(e) => setSummary(e.target.value)}
          required
        />
        <div className="mt-2 flex justify-end">
        <Button type="submit" disabled={loading}>
            {loading ? <LoaderCircle className="animate-spin" /> : "SAVE"}
          </Button>
        </div>
      </form>
    </div>
  );
}
