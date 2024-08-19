import React, { useState } from "react";
import PersonalDetail from "./forms/PersonalDetail";
import { ArrowRight, LayoutGrid ,ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FormSection() {
  const[activeFormIndex,setactiveFormIndex] =useState(1);
  const[enableNext,setEnableNext] = useState(false);
  return (
    <div>
      <div className="flex justify-between items-center">
        <Button variant="outline" size="sm" className="flex gap-2">
          <LayoutGrid />
          Theme
        </Button>
        <div className="flex gap-2">
        {activeFormIndex>1 && <Button size="sm" onClick={()=>setactiveFormIndex(activeFormIndex-1)}><ArrowLeft/></Button>}
          <Button disabled={!enableNext}
          onClick={()=>setactiveFormIndex(activeFormIndex+1)} className="flex gap-2 " size="sm">
            Next
            <ArrowRight />
          </Button>
        </div>
      </div>

      {/* Personal Details  */}
      {activeFormIndex==1 ? <PersonalDetail enabledNext={(v)=>setEnableNext(v)} /> : null}
      {/* summary */}

      {/* Experience */}

      {/* Education Details */}

      {/* Skills */}
    </div>
  );
}
