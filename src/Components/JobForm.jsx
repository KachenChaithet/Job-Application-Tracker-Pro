import { X } from "lucide-react"
import Input from "./Input/Input"
import { useState } from "react";

const JobForm = () => {
  const [status, setStatus] = useState("Applied");
  return (
    <div className="w-full border p-8 rounded-md">
      <div className="">
        <div className="flex justify-between">
          <h1>Add New Application</h1>
          <X className="w-4 h-4 text-neutral-500" />
        </div>
        <p className="text-neutral-500">Track a new job application</p>
      </div>

      {/* input */}
      <div className="flex flex-col gap-5">
        <div className="flex justify-between mt-10 gap-4">
          <Input placeholder={'e.g. Google, Microsoft'} title={'Company *'} />
          <Input placeholder={'e.g. Software Engineer'} title={'Job Title *'} />
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label>Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="bg-[#f3f3f5] w-full mt-2 p-2"
            >
              <option value="Applied">Applied</option>
              <option value="Interviewing">Interviewing</option>
              <option value="Offer">Offer</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>

          <div className="flex-1">
            <Input placeholder={'e.g. 2025-10-02'} title={'Application Date'} type="date" />
          </div>

          <div className="flex-1">
            <Input placeholder={'e.g. 50,000 - 70,000'} title={'Salary Range'} type="number" />
          </div>
        </div>

        <Input title={'Location *'} placeholder={'e.g. Bangkok, Thailand'} />
        <Input title={'Contact Email'} placeholder={'e.g. example@email.com'} />
        <div className="w-full">
          <h1 className="font-semibold">Notes</h1>

          <textarea
            placeholder="e.g. Follow up next week"
            className="bg-[#f3f3f5] w-full h-[80px]  mt-2 rounded-lg py-2 pl-4  focus:outline-2 focus:outline-[#a7a7a8] "
          />
        </div>

      </div>



    </div>
  )
}
export default JobForm