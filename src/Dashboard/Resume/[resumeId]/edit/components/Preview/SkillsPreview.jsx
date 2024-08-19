import React from "react";

export default function SkillssPreview({ resumeInfo }) {
  return (
    <div>
      <h2
        className="text-center font-bold text-sm mb-2"
        style={{ color: resumeInfo?.themeColor }}
      >
        Skillss
      </h2>

      <hr className="border-[1.5px] my-2"></hr>

      <div className="grid grid-cols-2 gap-3 my-4">
        {resumeInfo?.skills.map((skills, index) => (
          <div key={index} className="flex items-center justify-between">
            <h2 className="text-xs">{skills.name}</h2>
            <div className="h-2 bg-gray-200 w-[120px]">
              <div
                className="h-2"
                style={{
                  backgroundColor: resumeInfo?.themeColor,
                  width: skills?.rating + "%"
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
