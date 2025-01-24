import React, {useState} from 'react'
import {Box, ChevronDown, Home, Menu, MessageSquare, User, Wrench, X} from "lucide-react";

const Sidebar = ({isOpen, setIsOpen}) => {
    const [activeDropdown, setActiveDropdown] = useState('');

    const navItems = [
        {title: 'Home', icon: Home, hasDropdown: false},
        {
            title: 'Profile',
            icon: User,
            hasDropdown: true,
            dropdownItems: ['Personal Info', 'Account Settings']
        },
        {
            title: 'Messages',
            icon: MessageSquare,
            hasDropdown: true,
            dropdownItems: ['Inbox', 'Sent', 'Drafts', 'Archived']
        },
        {title: 'Analytics', icon: Box, hasDropdown: false},
        {
            title: 'Settings',
            icon: Wrench,
            hasDropdown: true,
            dropdownItems: ['Preferences', 'Security', 'Notifications']
        }
    ]
    return (
        <div className={`bg-white text-black transition-all duration-300 ease-in-out text-sm border-2 rounded-md 
        border-[rgba(0,0,0,0.08)] ${isOpen ? 'w-64' : 'w-16'}`}>
            <div className={'p-3 flex items-center justify-between'}>
                {isOpen &&
                    <h1 className={`text-[#3B40E8] font-bold  overflow-hidden transition-all duration-300 ease-in-out text-lg text-nowrap`}>
                        Dashboard
                    </h1>}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="hover:bg-[#F3F5F7] p-2 rounded-lg cursor-pointer"
                >
                    {isOpen ? <X size={20} strokeWidth={1.5}/> : <Menu size={20} strokeWidth={1.5}/>}
                </button>
            </div>
            <nav>
                {navItems.map(item => (
                    <div key={item.title}>
                        <div
                            className={`${isOpen ? 'px-3' : 'px-5'} py-3 hover:bg-[#3B40E8]/10 cursor-pointer flex items-center justify-between`}
                            onClick={() => item.hasDropdown && isOpen && setActiveDropdown(activeDropdown === item.title ? '' : item.title)}
                        >
                            <div className={'flex items-center'}>
                                <item.icon size={20} strokeWidth={1.5} color='#000'/>
                                {isOpen && <span
                                    className={'ml-4 whitespace-nowrap overflow-hidden transition-all duration-300 w-32'}>
                                {item.title}
                            </span>}
                            </div>
                            {item.hasDropdown && isOpen && (
                                <ChevronDown size={16} strokeWidth={2.5}
                                             className={`transition-transform duration-200 ${activeDropdown === item.title ? 'rotate-180' : ''}`}/>
                            )}
                        </div>
                        {item.hasDropdown && isOpen && activeDropdown === item.title && (
                            <div className="bg-[#f5f5f5] overflow-hidden transition-all duration-200">
                        {item.dropdownItems.map((dropdownItem) => (
                            <div
                            key={dropdownItem}
                         className="px-11 py-2 hover:bg-[#3B40E8]/10 cursor-pointer text-sm"
                    >
                        {dropdownItem}
                    </div>
                ))}
        </div>
    )
}
</div>
))}
</nav>
</div>
)
}
export default Sidebar
