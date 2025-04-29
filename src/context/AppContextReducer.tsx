import { AppContextType } from "./AppContext";

export const initialState: AppContextType = {
    id: null,
    idNumber: null,
    firstName: null,
    lastName: null,
    gender: null,
    age: null,
    course: null,
    year: null,
    email: null,
    contactNumber: null,
    userType: null,
    loginLoading: true,
    isLoggedIn: false,
    accessToken: null,
};

type ActionType = {
    type: "LOGIN_USER" | "LOGOUT_USER";
    value?: AppContextType;
};

const appContextReducer = (state = initialState, action: ActionType) => {
    const { type, value } = action;

    switch (type) {
        case "LOGIN_USER": {
            const { accessToken, ...rest } = value || {};
            if (typeof document !== "undefined" && accessToken) {
                if (localStorage) {
                    localStorage.setItem("access_token", accessToken);
                }
            }

            return {
                ...rest,
                accessToken,
                loginLoading: false,
                isLoggedIn: true,
            };
        }
        case "LOGOUT_USER": {
            if (typeof document !== "undefined") {
                if (localStorage) {
                    localStorage.removeItem("access_token");
                    localStorage.removeItem("access_token_exp");
                    localStorage.removeItem("refresh_token");
                }
            }
            return {
                ...initialState,
                loginLoading: false,
            };
        }
        default:
            return state;
    }
};

export default appContextReducer;
