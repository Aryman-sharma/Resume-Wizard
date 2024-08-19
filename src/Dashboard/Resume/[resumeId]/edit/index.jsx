import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FormSection from "./components/FormSection";
import ResumePreview from "./components/ResumePreview";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import dummy from "@/data/dummy";

export default function EditResume() {
  const params = useParams();
  // resumeInfo is available in both formSection and ResumepReciew section
  const [resumeInfo,setResumeInfo] = useState();
  useEffect(() => {
    setResumeInfo(dummy);
  }, []);

  return (
    // we nee to intialise the value
    <ResumeInfoContext.Provider value={{resumeInfo,setResumeInfo}}>
      <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-10">
        {/* Form Section  */}
        <FormSection />
        {/* ResumePreview */}
        <ResumePreview />
      </div>
    </ResumeInfoContext.Provider>
  );
}
