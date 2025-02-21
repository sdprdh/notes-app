import {use} from "react";
import {ToasContext} from "@/context/ToasContext.jsx";

export const useToastContext = () => {
    const context = use(ToasContext);

    if (!context) {
        throw new Error('useToastContext must be used within useToastContext');
    }

    return context;
}