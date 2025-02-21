import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "@/hooks/useAuthContext.js";

const ProtectedRoute = () => {
    const { user } = useAuthContext();

    return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
