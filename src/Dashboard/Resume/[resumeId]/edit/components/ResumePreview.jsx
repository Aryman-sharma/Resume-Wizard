import React, { useContext } from 'react'
import PersonalDetailPreview from './Preview/PersonalDetailPreview'
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import SummaryPreview from "./Preview/SummaryPreview"
import ExperiencePreview from './Preview/ExperiencePreview';
import EducationalPreview from "./Preview/EducationalPreview"
import SkillsPreview from "./Preview/SkillsPreview"
export default function ResumePreview() {

    const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext)
  return (
    <div className='shadow-lg h-full p-14 border-t-[20px]' style={{borderColor:resumeInfo?.themeColor}}>
        {/* Personal detail */}
           <PersonalDetailPreview resumeInfo={resumeInfo}/>

        {/* Summary */}
           <SummaryPreview resumeInfo={resumeInfo}/>
        {/* Professonal experience */}
            <ExperiencePreview resumeInfo={resumeInfo}/>
        {/* Educational */}
            <EducationalPreview resumeInfo={resumeInfo}/>
        {/* Skills */}
           <SkillsPreview resumeInfo={resumeInfo}/>

    </div>
  )
}
