"use client";

import React, { useEffect } from "react";
import useAppContext from "~/context/AppContext";
import { useRouter } from "next/navigation";

type Props = {
    children: React.ReactNode;
    redirectUrl?: string;
    isAdmin?: boolean;
};

const PrivatePage = ({
    children,
    isAdmin,
    redirectUrl = "/student/login",
}: Props) => {
    const { isLoggedIn, userType, logoutUser = () => {} } = useAppContext();

    const router = useRouter();

    useEffect(() => {
        if (!isLoggedIn) {
            router.push(redirectUrl);
        } else if (isAdmin && userType !== "ADMIN") {
            logoutUser();
            router.push(redirectUrl);
        } else if (!isAdmin && userType === "ADMIN") {
            router.push("/admin");
        }
    }, [isLoggedIn, router, redirectUrl]);

    if (!isLoggedIn) return null;
    if (isAdmin && userType !== "ADMIN") return null;
    if (!isAdmin && userType === "ADMIN") return null;

    return children;
};

export default PrivatePage;
