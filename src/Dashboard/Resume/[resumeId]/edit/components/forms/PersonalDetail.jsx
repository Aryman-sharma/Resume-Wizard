
import React, { useContext, useEffect, useState } from "react";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";
import GlobalApi from "./../../../../../../../Service/GlobalApi"; // Import the default export
import { LoaderCircle } from "lucide-react";
import { toast } from "sonner";


export default function PersonalDetail({ enabledNext }) {
  const params = useParams();
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(params);
  }, [params]);

  const handleInputChange = (e) => {
    enabledNext(false);
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setResumeInfo({
      ...resumeInfo,
      [name]: value,
    });
  };

  const onSave = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = { data: formData };
    GlobalApi.UpdateResumeDetail(params?.resumeId, data).then(
      (resp) => {
        console.log(resp);
        enabledNext(true);
        setLoading(false);
        toast("Details Updated")

      },
      (error) => {
        setLoading(false);
      }
    );
  };

  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
      <h2 className="font-bold text-lg">PersonalDetail</h2>
      <p>Get Started with the basic information</p>

      <form onSubmit={onSave}>
        <div className="grid grid-cols-2 mt-5 gap-3">
          <div>
            <label className="text-sm">First Name</label>
            <Input
              defaultValue={resumeInfo?.firstName}
              name="firstName"
              required
              onChange={handleInputChange}
            ></Input>
          </div>

          <div>
            <label className="text-sm">Last Name</label>
            <Input
              defaultValue={resumeInfo?.lastName}
              name="lastName"
              required
              onChange={handleInputChange}
            ></Input>
          </div>

          <div className="col-span-2">
            <label className="text-sm">Job title</label>
            <Input
              defaultValue={resumeInfo?.jobTitle}
              name="jobTitle"
              required
              onChange={handleInputChange}
            ></Input>
          </div>

          <div className="col-span-2">
            <label className="text-sm">Address</label>
            <Input 
              defaultValue={resumeInfo?.address}
              name="address"
              required
              onChange={handleInputChange}
            ></Input>
          </div>

          <div>
            <label className="text-sm">Phone</label>
            <Input
              defaultValue={resumeInfo?.phone}
              name="phone"
              required
              onChange={handleInputChange}
            ></Input>
          </div>

          <div>
            <label className="text-sm">Email</label>
            <Input
              defaultValue={resumeInfo?.email}
              name="email"
              required
              onChange={handleInputChange}
            ></Input>
          </div>
        </div>

        <div className="mt-3 flex justify-end">
          <Button type="submit" disabled={loading}>
            {loading ? <LoaderCircle className="animate-spin" /> : "SAVE"}
          </Button>
        </div>
      </form>
    </div>
  );
}
