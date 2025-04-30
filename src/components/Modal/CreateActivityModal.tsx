import React, { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import Modal from "./Modal";

type Props = {
    visible: boolean;
    onClose: () => void;
};

const CreateActivityModal = ({ visible, onClose }: Props) => {
    const [date, setDate] = useState<DateRange | undefined>();

    const formatDateRange = (range: DateRange | undefined): string => {
        if (!range?.from || !range?.to) return "Pick a date";

        const from = range.from.toLocaleDateString();
        const to = range.to.toLocaleDateString();
        return `${from} - ${to}`;
    };
    return (
        <Modal
            modalTitle="Create Return Service Activity"
            visible={visible}
            onClose={onClose}
            closeOnClickOutside={false}
        >
            <form className="space-y-6">
                <div className="flex items-start justify-between gap-6">
                    <label className="floating-label w-3/4">
                        <span>Activity Name</span>
                        <input
                            type="text"
                            placeholder="Tree Planting at Riverside"
                            className="input w-3/4"
                        />
                    </label>
                    <div className="flex items-center">
                        <button
                            popoverTarget="rdp-popover"
                            className="input input-border "
                            style={
                                { anchorName: "--rdp" } as React.CSSProperties
                            }
                            type="button"
                        >
                            {formatDateRange(date)}
                        </button>
                        <div
                            popover="auto"
                            id="rdp-popover"
                            className="dropdown"
                            style={
                                {
                                    positionAnchor: "--rdp",
                                } as React.CSSProperties
                            }
                        >
                            <DayPicker
                                className="react-day-picker"
                                mode="range"
                                selected={date}
                                onSelect={setDate}
                            />
                        </div>
                    </div>
                </div>
                <label className="floating-label">
                    <span>Description</span>
                    <textarea
                        placeholder="Please provide a brief description of the event or activity (e.g., purpose, goals, or what participants can expect)."
                        className="textarea w-full"
                    />
                </label>
                <div className="flex items-start justify-between">
                    <label className="floating-label">
                        <span>Return Service Hours Worth</span>
                        <input
                            type="number"
                            placeholder="4"
                            className="input w-52"
                        />
                    </label>
                    <select
                        defaultValue="Select Attendance Type"
                        className="select"
                    >
                        <option disabled={true}>Select Attendance Type</option>
                        <option>One-Time Attendance</option>
                        <option>Time In and Out</option>
                    </select>
                </div>
                <button className="btn btn-neutral" type="submit">
                    Create Activity
                </button>
            </form>
        </Modal>
    );
};

export default CreateActivityModal;
