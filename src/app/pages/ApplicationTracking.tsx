import { Link } from "react-router";
import {
  Calendar,
  Building2,
  MapPin,
  ExternalLink,
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { DashboardSidebar } from "../components/DashboardSidebar";
import { StatusBadge } from "../components/StatusBadge";
import { useDesign } from "../context/DesignContext";
import { Button } from "../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

const applications = [
  {
    id: "1",
    jobTitle: "Software Engineer Intern",
    company: "Google",
    location: "Mountain View, CA",
    appliedDate: "2024-02-28",
    status: "Under Review" as const,
    jobType: "Internship",
  },
  {
    id: "2",
    jobTitle: "Product Manager Intern",
    company: "Microsoft",
    location: "Seattle, WA",
    appliedDate: "2024-02-25",
    status: "Applied" as const,
    jobType: "Internship",
  },
  {
    id: "3",
    jobTitle: "Data Analyst",
    company: "Amazon",
    location: "Remote",
    appliedDate: "2024-02-20",
    status: "Rejected" as const,
    jobType: "Full-time",
  },
  {
    id: "4",
    jobTitle: "Frontend Developer",
    company: "Meta",
    location: "Menlo Park, CA",
    appliedDate: "2024-02-18",
    status: "Accepted" as const,
    jobType: "Full-time",
  },
  {
    id: "5",
    jobTitle: "UX Design Intern",
    company: "Apple",
    location: "Cupertino, CA",
    appliedDate: "2024-02-15",
    status: "Under Review" as const,
    jobType: "Internship",
  },
  {
    id: "6",
    jobTitle: "Backend Engineer Intern",
    company: "Netflix",
    location: "Los Gatos, CA",
    appliedDate: "2024-02-10",
    status: "Applied" as const,
    jobType: "Internship",
  },
];

export default function ApplicationTracking() {
  const { mode } = useDesign();
  const isWireframe = mode === "wireframe";

  const cardStyles = isWireframe
    ? "bg-white border-2 border-gray-400 p-6"
    : "bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow";

  return (
    <div>
      <Navbar userRole="candidate" isAuthenticated />
      <div className="flex">
        <DashboardSidebar userRole="candidate" />

        <main className="flex-1 p-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1
                className={
                  isWireframe
                    ? "text-3xl font-bold text-black mb-2"
                    : "text-3xl font-bold text-[#0F172A] mb-2"
                }
              >
                My Applications
              </h1>
              <p
                className={
                  isWireframe ? "text-black" : "text-gray-600"
                }
              >
                Track and manage all your job applications in
                one place
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div
                className={
                  isWireframe
                    ? "bg-white border-2 border-gray-400 p-4"
                    : "bg-white border border-gray-200 rounded-lg p-4"
                }
              >
                <p
                  className={
                    isWireframe
                      ? "text-sm text-black mb-1"
                      : "text-sm text-gray-600 mb-1"
                  }
                >
                  Total Applications
                </p>
                <p
                  className={
                    isWireframe
                      ? "text-2xl font-bold text-black"
                      : "text-2xl font-bold text-[#0F172A]"
                  }
                >
                  12
                </p>
              </div>
              <div
                className={
                  isWireframe
                    ? "bg-white border-2 border-gray-400 p-4"
                    : "bg-white border border-gray-200 rounded-lg p-4"
                }
              >
                <p
                  className={
                    isWireframe
                      ? "text-sm text-black mb-1"
                      : "text-sm text-gray-600 mb-1"
                  }
                >
                  Under Review
                </p>
                <p
                  className={
                    isWireframe
                      ? "text-2xl font-bold text-black"
                      : "text-2xl font-bold text-[#0F172A]"
                  }
                >
                  5
                </p>
              </div>
              <div
                className={
                  isWireframe
                    ? "bg-white border-2 border-gray-400 p-4"
                    : "bg-white border border-gray-200 rounded-lg p-4"
                }
              >
                <p
                  className={
                    isWireframe
                      ? "text-sm text-black mb-1"
                      : "text-sm text-gray-600 mb-1"
                  }
                >
                  Accepted
                </p>
                <p
                  className={
                    isWireframe
                      ? "text-2xl font-bold text-black"
                      : "text-2xl font-bold text-[#0F172A]"
                  }
                >
                  2
                </p>
              </div>
              <div
                className={
                  isWireframe
                    ? "bg-white border-2 border-gray-400 p-4"
                    : "bg-white border border-gray-200 rounded-lg p-4"
                }
              >
                <p
                  className={
                    isWireframe
                      ? "text-sm text-black mb-1"
                      : "text-sm text-gray-600 mb-1"
                  }
                >
                  Rejected
                </p>
                <p
                  className={
                    isWireframe
                      ? "text-2xl font-bold text-black"
                      : "text-2xl font-bold text-[#0F172A]"
                  }
                >
                  8
                </p>
              </div>
            </div>

            {/* Filters */}
            <div className="flex gap-4 mb-6">
              <Select defaultValue="all">
                <SelectTrigger
                  className={
                    isWireframe
                      ? "w-48 border-2 border-gray-400"
                      : "w-48"
                  }
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">
                    All Status
                  </SelectItem>
                  <SelectItem value="applied">
                    Applied
                  </SelectItem>
                  <SelectItem value="review">
                    Under Review
                  </SelectItem>
                  <SelectItem value="accepted">
                    Accepted
                  </SelectItem>
                  <SelectItem value="rejected">
                    Rejected
                  </SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="recent">
                <SelectTrigger
                  className={
                    isWireframe
                      ? "w-48 border-2 border-gray-400"
                      : "w-48"
                  }
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">
                    Most Recent
                  </SelectItem>
                  <SelectItem value="oldest">
                    Oldest First
                  </SelectItem>
                  <SelectItem value="company">
                    Company A-Z
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Applications List */}
            <div className="space-y-4">
              {applications.map((app) => (
                <div key={app.id} className={cardStyles}>
                  <div className="flex items-start justify-between">
                    <div className="flex gap-4 flex-1">
                      <div
                        className={
                          isWireframe
                            ? "w-12 h-12 border-2 border-gray-600 flex items-center justify-center flex-shrink-0"
                            : "w-12 h-12 bg-[#EBF5FF] rounded-lg flex items-center justify-center flex-shrink-0"
                        }
                      >
                        <Building2
                          className={
                            isWireframe
                              ? "h-6 w-6 text-black"
                              : "h-6 w-6 text-[#2563EB]"
                          }
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3
                              className={
                                isWireframe
                                  ? "text-lg font-bold text-black mb-1"
                                  : "text-lg font-semibold text-[#0F172A] mb-1"
                              }
                            >
                              {app.jobTitle}
                            </h3>
                            <p
                              className={
                                isWireframe
                                  ? "text-black mb-2"
                                  : "text-gray-700 mb-2"
                              }
                            >
                              {app.company}
                            </p>
                          </div>
                          <StatusBadge status={app.status} />
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm mb-3">
                          <div className="flex items-center gap-1">
                            <MapPin
                              className={
                                isWireframe
                                  ? "h-4 w-4 text-black"
                                  : "h-4 w-4 text-gray-500"
                              }
                            />
                            <span
                              className={
                                isWireframe
                                  ? "text-black"
                                  : "text-gray-600"
                              }
                            >
                              {app.location}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar
                              className={
                                isWireframe
                                  ? "h-4 w-4 text-black"
                                  : "h-4 w-4 text-gray-500"
                              }
                            />
                            <span
                              className={
                                isWireframe
                                  ? "text-black"
                                  : "text-gray-600"
                              }
                            >
                              Applied on{" "}
                              {new Date(
                                app.appliedDate,
                              ).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })}
                            </span>
                          </div>
                          <span
                            className={
                              isWireframe
                                ? "border border-gray-400 px-2 py-0.5 text-xs"
                                : "bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-xs"
                            }
                          >
                            {app.jobType}
                          </span>
                        </div>

                        <div className="flex gap-2">
                          <Link to={`/jobs/${app.id}`}>
                            <Button
                              variant="outline"
                              size="sm"
                              className={
                                isWireframe
                                  ? "border-2 border-gray-400"
                                  : ""
                              }
                            >
                              <ExternalLink className="h-4 w-4 mr-1" />
                              View Job
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}