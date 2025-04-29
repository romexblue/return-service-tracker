import React from "react";
import Link from "next/link";
import Navbar from "~/components/Navbar";
import { FaUserGroup, FaCalendarDays, FaUsersGear } from "react-icons/fa6";

import PrivatePage from "~/components/PrivatePage";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        // <PrivatePage isAdmin redirectUrl="/admin/login">
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <Navbar />

                <div className="px-4 md:px-6 py-4 min-h-[calc(100vh-64px)] bg-gray-50 dark:bg-transparent">
                    {children}
                </div>
            </div>
            <div className="drawer-side">
                <label
                    htmlFor="my-drawer-2"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></label>
                <div className="menu text-base-content min-h-full w-80 p-4 border-r border-gray-200 dark:border-gray-700">
                    <h1 className="text-2xl ">CSO Admin</h1>
                    <h2 className="text-xs mt-6 mb-4">Menu</h2>
                    <ul className="flex flex-col gap-2">
                        <li>
                            <Link href="/admin/students" className="p-3">
                                <FaUserGroup className="text-xl" /> Students
                            </Link>
                        </li>
                        <li>
                            <Link href="/admin/activities" className="p-3">
                                <FaCalendarDays className="text-xl" />{" "}
                                Activities
                            </Link>
                        </li>
                        <li>
                            <Link href="/admin/users" className="p-3">
                                <FaUsersGear className="text-2xl" /> Users
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        // </PrivatePage>
    );
}
