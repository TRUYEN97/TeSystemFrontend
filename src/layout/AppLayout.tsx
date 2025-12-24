import { Navigate, Outlet } from "react-router-dom";

import { SidebarProvider } from "../contexts/SidebarContext";
import { useSidebar } from "../hooks/use-sidebar";
import AppSidebar from "../components/layout/AppSidebar";
import Backdrop from "../components/layout/BackDrop";
import AppHeader from "../components/layout/AppHeader";
import { ToastContainer } from "react-toastify";
import useAuth from "../hooks/use-auth";
import { ROUTE } from "../constants/routes";

const LayoutContent: React.FC = () => {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  return (
    <>
      <ToastContainer autoClose={1000} />
      <div className="min-h-screen xl:flex">
        <div>
          <AppSidebar />
          <Backdrop />
        </div>
        <div
          className={`flex-1 transition-all duration-300 ease-in-out dark:bg-gray-700 ${
            isExpanded || isHovered ? "lg:ml-[290px]" : "lg:ml-[90px]"
          } ${isMobileOpen ? "ml-0" : ""}`}
        >
          <AppHeader />
          <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

const AppLayout: React.FC = () => {
  const { isLoggedIn } = useAuth();

  return (
    <SidebarProvider>
      {isLoggedIn ? <LayoutContent /> : <Navigate to={ROUTE.LOGIN} replace />}
    </SidebarProvider>
  );
};

export default AppLayout;
