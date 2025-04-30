import React, { ReactNode, useEffect, useRef } from "react";

type Props = {
    visible: boolean;
    onClose: () => void;
    closeOnClickOutside?: boolean;
    children: ReactNode;
    modalTitle: string;
};

const Modal = ({
    visible,
    onClose,
    modalTitle,
    children,
    closeOnClickOutside = true,
}: Props) => {
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
                <div className="modal-box w-11/12 max-w-5xl">
                    <form method="dialog">
                        <button
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={handleClose}
                        >
                            ✕
                        </button>
                    </form>
                    <h3 className="font-bold text-lg">{modalTitle}</h3>
                    <div className="py-4 mt-4">{children}</div>
                </div>
                {closeOnClickOutside && (
                    <form method="dialog" className="modal-backdrop">
                        <button onClick={handleClose}>close</button>
                    </form>
                )}
            </dialog>
        </>
    );
};

export default Modal;
