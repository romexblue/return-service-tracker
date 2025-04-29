"use client";

import { createContext, useContext, ReactNode, useReducer } from "react";
import appContextReducer, { initialState } from "./AppContextReducer";

export type StudentType = "STUDENT";
export type AdminType = "ADMIN";

export type AppContextType = {
    id?: string | number | null; 
    idNumber?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    gender?: string | null;
    age?: number | null;
    course?: string | null;
    year?: number | null;
    email?: string | null;
    contactNumber?: string | null;
    userType?: StudentType | AdminType | null;
    loginLoading?: boolean;
    isLoggedIn?: boolean;
    accessToken?: string | null;
    loginUser?: (userData: AppContextType) => void;
    logoutUser?: () => void;
};

type Props = {
    children: ReactNode;
};

const AppContext = createContext<AppContextType>(initialState);

export const AppContextProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(appContextReducer, initialState);

    const loginUser = (userData: AppContextType) => {
        dispatch({
            type: "LOGIN_USER",
            value: userData,
        });
    };

    const logoutUser = () => {
        dispatch({
            type: "LOGOUT_USER",
        });
    };

    const value = {
        ...state,
        logoutUser,
        loginUser,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const useAppContext = () => {
    const context = useContext(AppContext);

    if (context === undefined)
        throw new Error("useAppContext must be used within AppContextProvider");

    return context;
};

export default useAppContext;
