import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "./../context/AuthContext";

export default function PublicRoute() {
  const { currentUser } = useAuth();

  if (currentUser) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}
