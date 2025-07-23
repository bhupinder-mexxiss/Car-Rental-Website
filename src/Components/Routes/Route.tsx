import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router';
import Loader from '../Loader/Loader';

interface RootState {
    auth: {
        isAuthenticated: boolean;
        isLoading?: boolean;
        user?: {
            role?: string;
            partner?: {
                partnerType?: string;
            };
        };
    };
}
const UserRoute = () => {
    const { isAuthenticated, isLoading } = useSelector((state: RootState) => state.auth);
    const location = useLocation();
    if (isLoading) return <Loader />
    return isAuthenticated
        ? <Outlet />
        : <Navigate to="/login" replace state={{ from: location.pathname + location.search }} />;
};

const PublicRoute = () => {
    const { isAuthenticated, isLoading } = useSelector((state: RootState) => state.auth);
    const location = useLocation();
    if (isLoading) return <Loader />
    return isAuthenticated
        ? <Navigate to={location.state?.from || "/"} replace />
        : <Outlet />;
};

const PartnerRoutes = () => {
    const { user, isLoading } = useSelector((state: RootState) => state.auth);
    const location = useLocation();
    if (isLoading) return <Loader />

    return user?.role === "partner"
        ? <Outlet /> : <Navigate to={location.state?.from || "/"} replace />;
};

const IndividualRoutes = () => {
    const { user, isLoading } = useSelector((state: RootState) => state.auth);
    const location = useLocation();
    if (isLoading) return <Loader />

    return user?.partner?.partnerType === "individual"
        ? <Outlet /> : <Navigate to={location.state?.from || "/"} replace />;
};
const BusinessRoutes = () => {
    const { user, isLoading } = useSelector((state: RootState) => state.auth);
    const location = useLocation();
    if (isLoading) return <Loader />

    return user?.partner?.partnerType === "business"
        ? <Outlet /> : <Navigate to={location.state?.from || "/"} replace />;
};

export { UserRoute, PublicRoute, IndividualRoutes, PartnerRoutes, BusinessRoutes };
