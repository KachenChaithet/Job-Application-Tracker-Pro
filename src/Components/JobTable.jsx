import { Ellipsis, Funnel, Search } from "lucide-react"
import moment from "moment";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { axiosInstance } from "../utils/axiosinstance";
import { API_PATHS } from "../utils/apiPath";
import toast from "react-hot-toast";
import JobForm from "./JobForm";

const JobTable = () => {
  const [filter, setFilter] = useState("All Status");
  const [date, setDate] = useState("Sort by Date");
  const [searchTerm, setSearchTerm] = useState('')
  const [status, setStatus] = useState("Applied");
  const { job, FetchJobAll } = useOutletContext()
  const [editJobId, setEditJobId] = useState(null)


  const handleStatusChange = async (id, newStatus) => {
    try {
      // 1️⃣ อัพเดต backend
      const response = await axiosInstance.put(API_PATHS.JOB.UPDATE(id), { status: newStatus });

      // 2️⃣ อัพเดต state เพื่อให้ UI เปลี่ยนทันที
      FetchJobAll()

      toast.success(response.data.message)
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong")
      console.log(error);
    }
  };
  const filteredJobs =
    filter === "All Status"
      ? job
      : job.filter((a) => a.status === filter);

  // filter ด้วย searchTerm (title หรือ company)
  const searchedJobs = filteredJobs.filter((a) =>
    a.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    a.company.toLowerCase().includes(searchTerm.toLowerCase())
  );


  const sortedJobs = [...searchedJobs].sort((a, b) => {
    if (date === "Sort by Date") {
      return new Date(a.createdAt) - new Date(b.createdAt);
    } else if (date === "Sort by Company") {
      return a.company.localeCompare(b.company);
    } else if (date === "Sort by Status") {
      return a.status.localeCompare(b.status);
    }
    return 0;
  });

  const statusColors = {
    Applied: "bg-white text-black border-gray-300",
    Interviewing: "bg-[#eceef2] text-black border border-neutral-300",
    Rejected: "bg-red-700 text-white border-red-300",
    Offer: "bg-black text-white ",
  }

  return (
    <div className="mt-8">
      {editJobId && (
        <>
          <div
            className="fixed inset-0 bg-black/60 z-40"
            onClick={() => setEditJobId(null)}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className=" w-[500px] max-h-[90vh] overflow-y-auto rounded-lg relative">
              <JobForm fetchJobs={FetchJobAll} jobId={editJobId} onClose={() => setEditJobId(null)} />
            </div>
          </div>
        </>
      )}


      <div className="flex w-full gap-4">
        <div className="w-[60%] bg-[#f3f3f5] rounded-lg flex items-center  gap-2 focus-within:outline-2 focus-within:outline-[#a7a7a8] ">
          <Search className="w-6 h-6 ml-2 text-gray-500" />
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            placeholder="Seearch applications..."
            className="bg-[#f3f3f5]  p-2 w-full outline-0 rounded-lg "


          />
        </div>

        <div className=" bg-[#f3f3f5] pl-2 rounded-lg flex items-center justify-center w-[20%]  gap-2 focus-within:outline-2 focus-within:outline-[#a7a7a8] ">
          <Funnel className="w-6 h-6 ml-2 text-gray-500" />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-[#f3f3f5] text-gray-500 w-full p-2 text-center flex  "
          >
            <option value="All Status">All Status</option>
            <option value="Applied">Applied</option>
            <option value="Interviewing">Interviewing</option>
            <option value="Offer">Offer</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>

        <div className=" bg-[#f3f3f5] rounded-lg flex items-center  w-[20%]  gap-2 focus-within:outline-2 focus-within:outline-[#a7a7a8] ">
          <select
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="bg-[#f3f3f5] text-gray-500 w-full p-2  "
          >
            <option value="Sort by Date">Sort by Date</option>
            <option value="Sort by Company">Sort by Company</option>
            <option value="Sort by Status">Sort by Status</option>
          </select>
        </div>


      </div>

      <div className=" mt-10">
        <div className="flex flex-col gap-4">
          {sortedJobs.map((job) => (
            <div className="border border-[#e5e5e5] bg-white rounded-md p-6 flex justify-between items-start">
              <div className="flex flex-col gap-4 w-full ">
                <div className="flex gap-4 items-center">
                  <h1 className="text-[18px] font-medium">{job.title}</h1>
                  <span className={`border rounded-full px-2 font-semibold text-[14px] ${statusColors[job.status] || "bg-gray-100 text-gray-700 border-gray-200"}`}>{job.status}</span>
                </div>
                <div className="text-[#717191] ">
                  <p>{job.company}</p>
                  <p>Applied: {moment(job.createdAt).format('D/MM/YYYY')}</p>
                  <p>Salary: {job.salary || 'Not think'}</p>
                </div>
                <div className="bg-[#f5f5f7] w-full rounded-xl p-4">
                  {job.notes}
                </div>
              </div>
              <div className="flex items-center justify-center  gap-4 ">
                <div className="flex-1 flex items-center ">
                  <select
                    value={job.status}
                    onChange={(e) => handleStatusChange(job.id, e.target.value)}
                    className="bg-[#f3f3f5] w-full  p-2 rounded-md "
                  >
                    <option value="Applied">Applied</option>
                    <option value="Interviewing">Interviewing</option>
                    <option value="Offer">Offer</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </div>
                <button className="hover:bg-[#e9ebef] p-3 rounded-2xl" onClick={() => setEditJobId(job.id)}><Ellipsis className="w-4 h-4" /></button>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default JobTable