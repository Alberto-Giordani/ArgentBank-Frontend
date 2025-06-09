import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

// Protects child routes: redirects unauthenticated users to '/login'
function PrivateRoot({ children }) {
    const { isAuthenticated } = useSelector((state) => state.user);

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return <>{children}</>;

}

export default PrivateRoot;