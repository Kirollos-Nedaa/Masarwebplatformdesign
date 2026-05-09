import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RoleSelection from "./pages/RoleSelection";
import CandidateDashboard from "./pages/CandidateDashboard";
import CandidateProfile from "./pages/CandidateProfile";
import JobListings from "./pages/JobListings";
import JobDetails from "./pages/JobDetails";
import Apply from "./pages/Apply";
import ApplicationTracking from "./pages/ApplicationTracking";
import CompanyDashboard from "./pages/CompanyDashboard";
import CompanyProfile from "./pages/CompanyProfile";
import PostJob from "./pages/PostJob";
import ApplicantManagement from "./pages/ApplicantManagement";
import AdminDashboard from "./pages/AdminDashboard";
import SavedJobs from "./pages/SavedJobs";
import ChangePassword from "./pages/ChangePassword";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Landing },
      { path: "login", Component: Login },
      { path: "register", Component: Register },
      { path: "role-selection", Component: RoleSelection },
      { path: "candidate/dashboard", Component: CandidateDashboard },
      { path: "candidate/profile", Component: CandidateProfile },
      { path: "jobs", Component: JobListings },
      { path: "jobs/:id", Component: JobDetails },
      { path: "jobs/:id/apply", Component: Apply },
      { path: "candidate/applications", Component: ApplicationTracking },
      { path: "candidate/savedjobs", Component: SavedJobs },
      { path: "company/dashboard", Component: CompanyDashboard },
      { path: "company/profile", Component: CompanyProfile },
      { path: "company/post-job", Component: PostJob },
      { path: "company/applicants/:jobId", Component: ApplicantManagement },
      { path: "admin/dashboard", Component: AdminDashboard },
      { path: "change-password", Component: ChangePassword },
    ],
  },
]);