import React from "react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Experience() {
  const formField = {
    title: "",
    companyName: "",
    city: "",
    state: "",
    startdate: "",
    endDate: "",
    workSummery: "",
  };

  const handleChange = (index, event) => {};

  const [experienceList, SetExperienceList] = useState([formField]);

  return (
    <div>
      <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
        <h2 className="font-bold text-lg">Professonal Experience</h2>
        <p>Add Your previous Job Experience</p>
        <div>
          {experienceList.map((item, index) => (
            <div>
              <div className="grid grid-cols-2 gap-3 border my-5 rounded-lg ">
                <div>
                  <label className="text-xs">Position Title</label>
                  <Input
                    name="title"
                    onChange={(event) => {
                      handleChange(index, event);
                    }}
                  ></Input>
                </div>

                <div>
                  <label className="text-xs">Company Name</label>
                  <Input
                    name="companyName"
                    onChange={(event) => {
                      handleChange(index, event);
                    }}
                  ></Input>
                </div>

                <div>
                  <label className="text-xs">City</label>
                  <Input
                    name="city"
                    onChange={(event) => {
                      handleChange(index, event);
                    }}
                  ></Input>
                </div>

                <div>
                  <label className="text-xs">State</label>
                  <Input
                    name="state"
                    onChange={(event) => {
                      handleChange(index, event);
                    }}
                  ></Input>
                </div>

                <div>
                  <label className="text-xs">Start-Date</label>
                  <Input
                    type="date"
                    name="startDate"
                    onChange={(event) => {
                      handleChange(index, event);
                    }}
                  ></Input>
                </div>

                <div>
                  <label className="text-xs">End-Date</label>
                  <Input
                    type="date"
                    name="endDate"
                    onChange={(event) => {
                      handleChange(index, event);
                    }}
                  ></Input>
                </div>

                <div>
                  <label className="text-xs">Work Summary</label>
                  <Input
                    name="title"
                    onChange={(event) => {
                      handleChange(index, event);
                    }}
                  ></Input>
                </div>
              </div>
            </div>
          ))}
        </div>
           
           <div className="flex justify-between">
            <Button variant="outline" className="text-primary">+ Add More Experience</Button>
            <Button>Save</Button>
           </div>

      </div>
    </div>
  );
}
