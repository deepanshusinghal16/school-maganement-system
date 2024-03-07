import Link from 'next/link';
import React from 'react'
const BASE_URL = process.env.BASE_URL;

const menus = [
    {
        type: "Student",
        actions: [
            { name: "Add Student", link: "/student/addStudent" },
            { name: "View Student", link: "/student/viewStudent" },
            { name: "Update Student", link: "/student/updateStudent" },
        ]
    },
    {
        type: "Staff",
        actions: [
            { name: "Add Staff", link: "/staff/addStaff" },
            { name: "View Staff", link: "/staff/viewStaff" },
            { name: "Update Staff", link: "/staff/updateStaff" },
        ]
    },
    {
        type: "Inventory",
        actions: [
            { name: "Books", link: "/inventory/books" },
            { name: "Dress", link: "/inventory/dress" },
            { name: "Notebooks", link: "/inventory/notebooks" },
        ]
    },
];

const SideBar = () => {
    return (
        <div className='w-1/6  min-h-screen border-r-2 '>
            {menus.map((menu, i) => (
                <div key={i}>
                    {showMenu(menu)}
                </div>
            ))}
            <div className=' top-[95%] absolute '>Logout</div>
        </div>
    )
}

const showMenu = ({ type, actions }) => {
    return (
        <div className='px-4 py-2 '>
            <div className='text-xl'>{type}</div>

            {
                actions?.map(({ name, link }, i) => (
                    <div key={i}>
                        <Link href={BASE_URL + link}>{name}</Link>
                    </div>
                ))
            }
        </div>
    )
}

export default SideBar
