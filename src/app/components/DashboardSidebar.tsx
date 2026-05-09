import { Link, useLocation } from "react-router";
import {
  LayoutDashboard,
  User,
  Briefcase,
  FileText,
  Users,
  PlusCircle,
  Settings,
  BarChart3,
  Bookmark,
} from "lucide-react";
import { useDesign } from "../context/DesignContext";

interface SidebarItem {
  to: string;
  icon: React.ReactNode;
  label: string;
}

interface DashboardSidebarProps {
  userRole: "candidate" | "company" | "admin";
}

export function DashboardSidebar({
  userRole,
}: DashboardSidebarProps) {
  const { mode } = useDesign();
  const location = useLocation();
  const isWireframe = mode === "wireframe";

  const candidateItems: SidebarItem[] = [
    {
      to: "/candidate/dashboard",
      icon: <LayoutDashboard className="h-5 w-5" />,
      label: "Dashboard",
    },
    {
      to: "/candidate/profile",
      icon: <User className="h-5 w-5" />,
      label: "Profile",
    },
    {
      to: "/candidate/applications",
      icon: <FileText className="h-5 w-5" />,
      label: "Applications",
    },
    {
      to: "/candidate/savedjobs",
      icon: <Bookmark className="h-5 w-5" />,
      label: "Saved Jobs",
    },
  ];

  const companyItems: SidebarItem[] = [
    {
      to: "/company/dashboard",
      icon: <LayoutDashboard className="h-5 w-5" />,
      label: "Dashboard",
    },
    {
      to: "/company/profile",
      icon: <User className="h-5 w-5" />,
      label: "Company Profile",
    },
    {
      to: "/company/post-job",
      icon: <PlusCircle className="h-5 w-5" />,
      label: "Post Job",
    },
  ];

  const adminItems: SidebarItem[] = [
    {
      to: "/admin/dashboard",
      icon: <LayoutDashboard className="h-5 w-5" />,
      label: "Dashboard",
    },
    {
      to: "/admin/users",
      icon: <Users className="h-5 w-5" />,
      label: "Users",
    },
    {
      to: "/admin/jobs",
      icon: <Briefcase className="h-5 w-5" />,
      label: "Jobs",
    },
    {
      to: "/admin/analytics",
      icon: <BarChart3 className="h-5 w-5" />,
      label: "Analytics",
    },
  ];

  const items =
    userRole === "candidate"
      ? candidateItems
      : userRole === "company"
        ? companyItems
        : adminItems;

  const sidebarStyles = isWireframe
    ? "bg-white border-r-2 border-gray-400 h-full w-64 p-4"
    : "bg-white border-r border-gray-200 h-full w-64 p-4";

  return (
    <aside className={sidebarStyles}>
      <nav className="space-y-2">
        {items.map((item) => {
          const isActive = location.pathname === item.to;
          const linkStyles = isWireframe
            ? isActive
              ? "flex items-center gap-3 p-3 border-2 border-gray-600 bg-gray-200 font-bold"
              : "flex items-center gap-3 p-3 border border-gray-400 hover:bg-gray-100"
            : isActive
              ? "flex items-center gap-3 p-3 rounded-lg bg-[#EBF5FF] text-[#2563EB] font-medium"
              : "flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-gray-100";

          return (
            <Link
              key={item.to}
              to={item.to}
              className={linkStyles}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}