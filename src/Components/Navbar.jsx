import { BarChart3, Home, List } from "lucide-react"
import { useState } from "react"

const Navbar = () => {
    const [selected, setSelected] = useState('dashboard')

    const tabs = [
        { id: 'dashboard', icon: <Home className="h-4 w-4" />, label: 'Dashboard' },
        { id: 'applications', icon: <List className="h-4 w-4" />, label: 'Applications' },
        { id: 'analytics', icon: <BarChart3 className="h-4 w-4" />, label: 'Analytics' },
    ]

    return (
        <div>
            <div className="grid w-full grid-cols-3 lg:w-96 bg-[#ececf0] font-semibold py-1 px-2 rounded-full">
                {tabs.map((tab) => (
                    <div
                        key={tab.id}
                        onClick={() => setSelected(tab.id)}
                        className={`gap-2 flex items-center justify-center cursor-pointer rounded-full
                            ${selected === tab.id ? 'bg-white  text-black' : 'text-black'}`}
                    >
                        {tab.icon}
                        {tab.label}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Navbar
