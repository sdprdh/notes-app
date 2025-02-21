import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "@/hooks/useAuthContext.js";

const PublicRoute = () => {
    const { user } = useAuthContext();

    return user ? <Navigate to="/" replace /> : <Outlet />;
};

export default PublicRoute;
