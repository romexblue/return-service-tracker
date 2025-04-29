"use client";

import React, { useState } from "react";
import CreateActivityModal from "~/components/Modal/CreateActivityModal";

const EventsPage = () => {
    const [openModal, setIsOpenModal] = useState(false);
    return (
        <>
            <CreateActivityModal
                visible={openModal}
                onClose={() => setIsOpenModal(false)}
            />
            <div className="rounded-2xl border border-gray-200 p-5 dark:border-gray-700 bg-white dark:bg-white/[0.03]">
                <div className="flex w-full justify-end">
                    <button
                        className="btn btn-primary"
                        onClick={() => setIsOpenModal(true)}
                    >
                        + Create New Activity
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                                <th>Job</th>
                                <th>Course</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover:bg-base-300">
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                                <td>Quality Control Specialist</td>
                                <td>
                                    <button className="btn btn-sm btn-primary">
                                        Open The Modal
                                    </button>
                                </td>
                            </tr>
                            <tr className="hover:bg-base-300">
                                <td>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                                <td>Purple</td>
                                <td>Quality Control Specialist</td>
                                <td>Quality Control Specialist</td>
                            </tr>
                            <tr className="hover:bg-base-300">
                                <td>Brice Swyre</td>
                                <td>Tax Accountant</td>
                                <td>Red</td>
                                <td>Quality Control Specialist</td>
                                <td>Quality Control Specialist</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default EventsPage;
