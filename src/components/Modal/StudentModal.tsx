import React, { useEffect, useRef } from "react";

type Props = {
    visible: boolean;
    onClose: () => void;
};

const StudentModal = ({ visible, onClose }: Props) => {
    const modalRef = useRef<HTMLDialogElement | null>(null);
    useEffect(() => {
        if (!modalRef.current) {
            return;
        }
        visible ? modalRef.current.showModal() : modalRef.current.close();
    }, [visible]);

    const handleClose = () => {
        if (onClose) {
            onClose();
        }
    };

    const handleESC = (event: React.SyntheticEvent<HTMLDialogElement>) => {
        event.preventDefault();
        handleClose();
    };

    return (
        <>
            <dialog
                id="my_modal_1"
                className="modal"
                ref={modalRef}
                onCancel={handleESC}
            >
                <div className="modal-box">
                    <form method="dialog">
                        <button
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={handleClose}
                        >
                            ✕
                        </button>
                    </form>
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">
                        Press ESC key or click on ✕ button to close
                    </p>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button onClick={handleClose}>close</button>
                </form>
            </dialog>
        </>
    );
};

export default StudentModal;
