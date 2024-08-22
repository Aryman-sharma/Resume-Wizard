import React from "react";

export default function ExperiencePreview({ resumeInfo }) {
  return (
    <div className="my-6">
      <h2
        className="text-center font-bold text-sm mb-2"
        style={{ color:resumeInfo?.themeColor }}
      >
        Professional Experience
      </h2>
      <hr className='border-[1.5px] my-2'></hr>
      {
        resumeInfo?.experience.map((experience,index)=>(
            <div key={index} className="my-5">
            <h2 className="text-sm font-bold">{experience?.title}</h2>
            <h2 className="text-xs flex justify-between">{experience?.companyName},{experience?.city},{experience?.state}
            <span>{experience?.startDate} <b>To</b> {experience?.currentlyWorking?'Present': experience?.endDate }</span>
            </h2>
            {/* <p className="my-2 text-xs">{experience?.workSummery}</p> */}
             
             <div dangerouslySetInnerHTML={{__html:experience?.workSummery}}> 
             </div>

            </div>
        ))
      }
    </div>
  );
}
