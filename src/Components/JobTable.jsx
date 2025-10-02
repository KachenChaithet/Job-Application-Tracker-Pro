import { Funnel, Search } from "lucide-react"
import { useState } from "react";

const JobTable = () => {
  const [filter, setFilter] = useState("All Status");
  const [date, setDate] = useState("Sort by Date");


  return (
    <div className="mt-8">
      <div className="flex w-full gap-4">
        <div className="w-[60%] bg-[#f3f3f5] rounded-lg flex items-center  gap-2 focus-within:outline-2 focus-within:outline-[#a7a7a8] ">
          <Search className="w-6 h-6 ml-2 text-gray-500" />
          <input
            type="text"
            placeholder="Seearch applications..."
            className="bg-[#f3f3f5]  p-2 w-full outline-0 rounded-lg "


          />
        </div>

        <div className=" bg-[#f3f3f5] rounded-lg flex items-center justify-center w-[20%]  gap-2 focus-within:outline-2 focus-within:outline-[#a7a7a8] ">
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
    </div>
  )
}
export default JobTable