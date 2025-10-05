import { Plus, X } from "lucide-react"
import Input from "./Input/Input"
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const JobForm = ({ onClose, fetchJobs }) => {
  const [company, setCompany] = useState("")
  const [title, setTitle] = useState("")
  const [status, setStatus] = useState("Applied");
  const [date, setDate] = useState("")
  const [salary, setSalary] = useState("")
  const [location, setLocation] = useState("")
  const [email, setEmail] = useState("")
  const [notes, setNotes] = useState("")


  const cleanForm = () => {
    setCompany("")
    setTitle("")
    setStatus("Applied")
    setDate("")
    setSalary("")
    setLocation("")
    setEmail("")
    setNotes("")
  }

  const handleSubmit = async () => {
    const payload = {
      company,
      title,
      status,
      date,
      salary,
      location,
      email,
      notes,
    }
    try {

      const response = await axios.post('http://localhost:5000/job/create', payload)
      if (response.data.message) {
        toast.success(response.data.message)
        cleanForm()
        fetchJobs()
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong")
      console.log(error);

    }
  }

  return (
    <div className="w-full border p-8 rounded-md  mb-10">
      <div className="">
        <div className="flex justify-between">
          <h1>Add New Application</h1>
          <X className="w-4 h-4 text-neutral-500 cursor-pointer" onClick={onClose} />
        </div>
        <p className="text-neutral-500">Track a new job application</p>
      </div>

      {/* input */}
      <div className="flex flex-col gap-5">
        <div className="flex justify-between mt-10 gap-4">
          <Input value={company} onChange={(e) => setCompany(e.target.value)} placeholder={'e.g. Google, Microsoft'} title={'Company *'} />
          <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder={'e.g. Software Engineer'} title={'Job Title *'} />
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
            <Input value={date} onChange={(e) => setDate(e.target.value)} placeholder={'e.g. 2025-10-02'} title={'Application Date'} type="date" />
          </div>

          <div className="flex-1">
            <Input value={salary} onChange={(e) => setSalary(e.target.value)} placeholder={'e.g. 50,000 - 70,000'} title={'Salary Range'} type="number" />
          </div>
        </div>

        <Input value={location} onChange={(e) => setLocation(e.target.value)} title={'Location *'} placeholder={'e.g. Bangkok, Thailand'} />
        <Input value={email} onChange={(e) => setEmail(e.target.value)} title={'Contact Email'} placeholder={'e.g. example@email.com'} />
        <div className="w-full">
          <h1 className="font-semibold">Notes</h1>

          <textarea
            value={notes} onChange={(e) => setNotes(e.target.value)}
            placeholder="e.g. Follow up next week"
            className="bg-[#f3f3f5] w-full h-[80px]  mt-2 rounded-lg py-2 pl-4  focus:outline-2 focus:outline-[#a7a7a8] "
          />
        </div>
        <div className="w-full flex gap-2">
          <button onClick={handleSubmit} className="flex justify-center items-center gap-4 py-2 font-semibold w-[90%] hover:bg-[#1c1b2b] bg-black text-white rounded-md text-center"><Plus className="w-4 h-4" /> Add Application</button>
          <button className="w-[10%] border py-2 border-[#e5e5e5] rounded-md hover:bg-[#e9ebef]" onClick={onClose}>Cancel</button>
        </div>

      </div>



    </div>
  )
}
export default JobForm