import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router';

const ProtectedRoute = () => {
    const { isAuthenticated, isLoading } = useSelector((state: any) => state.auth);
    const location = useLocation();

    return isAuthenticated
        ? <Outlet />
        : <Navigate to="/login" replace state={{ from: location.pathname + location.search }} />;
};

const PublicRoute = () => {
    const { isAuthenticated } = useSelector((state: any) => state.auth);
    const location = useLocation();

    return isAuthenticated
        ? <Navigate to={location.state?.from || "/"} replace />
        : <Outlet />;
};

export { ProtectedRoute, PublicRoute };
