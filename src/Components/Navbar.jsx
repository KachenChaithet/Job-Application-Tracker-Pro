import { BarChart3, Home, List } from "lucide-react"
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

const Navbar = () => {
    const location = useLocation()
    
    const navigate = useNavigate()
    const tabs = [
        { id: 'dashboard', icon: <Home className="h-4 w-4" />, label: 'Dashboard', path: '/' },
        { id: 'applications', icon: <List className="h-4 w-4" />, label: 'Applications', path: '/applications' },
        { id: 'analytics', icon: <BarChart3 className="h-4 w-4" />, label: 'Analytics', path: '/analytics' },
    ]

    return (
        <div>
            <div className="grid w-full grid-cols-3 lg:w-96 bg-[#ececf0] font-semibold py-1 px-2 rounded-full">
                {tabs.map((tab) => (
                    <div
                        key={tab.id}
                        onClick={() => navigate(tab.path)}
                        className={`gap-2 flex items-center justify-center cursor-pointer rounded-full
                            ${location.pathname === tab.path ? 'bg-white  text-black font-medium' : 'text-black  font-medium'}`}
                    >
                        {tab.icon}
                        {tab.label}
                    </div>
                ))}
            </div>
        </div >
    )
}

export default Navbar
