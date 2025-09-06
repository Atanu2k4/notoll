"use client";

import { useState } from "react";
import { Bell, Search, Menu, LogOut, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Sidebar } from "./sidebar";
import Link from "next/link";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSignOut = () => {
    // Redirect to home page
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main content */}
      <div className="lg:pl-64 flex flex-col flex-1">
        {/* Top navigation */}
        <div className="sticky top-0 z-30 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200/80 dark:border-gray-800/60 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60 px-4 sm:gap-x-6 sm:px-6 lg:px-8 transition-all shadow-sm dark:shadow-gray-950/40">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open sidebar"
            title="Open sidebar"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </Button>

          <div className="flex flex-1 items-center justify-between">
            <div className="w-full max-w-sm md:max-w-md lg:max-w-lg">
              <div className="group relative w-full">
                <Search
                  className="pointer-events-none absolute inset-y-0 left-3 h-full w-4 text-gray-500 dark:text-gray-400 flex items-center"
                  aria-hidden="true"
                />
                <Input
                  className="h-10 w-full bg-gray-50 dark:bg-gray-800/70 border-gray-200/70 dark:border-gray-700/50 pl-9 pr-4 text-sm text-gray-900 dark:text-gray-200 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-blue-500/70 focus-visible:border-blue-500/40 dark:focus-visible:ring-blue-500/50 rounded-full shadow-sm transition-all duration-200"
                  placeholder="Search the dashboard..."
                  type="search"
                  aria-label="Search"
                />
              </div>
            </div>

            <div className="flex items-center ml-4 md:ml-8 space-x-3 md:space-x-4">
              <div className="hidden sm:flex items-center gap-2 border border-gray-200/70 dark:border-gray-700/60 bg-gray-100/70 dark:bg-gray-800/50 rounded-full px-3 py-1.5 shadow-sm transition-colors duration-200">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_0_3px] shadow-emerald-500/15 animate-pulse"></div>
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                  Online
                </span>
              </div>

              <ThemeToggle />

              <Button
                variant="ghost"
                size="icon"
                className="relative rounded-full w-10 h-10 flex items-center justify-center text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                aria-label="Notifications"
                title="Notifications"
              >
                <Bell className="h-5 w-5" aria-hidden="true" />
                <span
                  className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-gray-900 animate-pulse"
                  aria-label="New notifications"
                ></span>
              </Button>

              {/* Profile dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex items-center gap-x-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md px-2.5 py-2 h-auto transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-blue-500/40"
                    aria-label="User menu"
                  >
                    <Avatar className="h-8 w-8 border-2 border-gray-200 dark:border-gray-700 shadow-sm">
                      <AvatarImage src="" alt="Profile" />
                      <AvatarFallback className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
                        U
                      </AvatarFallback>
                    </Avatar>
                    <span className="hidden lg:flex lg:items-center">
                      <span className="text-sm font-medium text-gray-900 dark:text-gray-200 tracking-tight">
                        User
                      </span>
                      <svg
                        className="ml-2 h-4 w-4 text-gray-500 dark:text-gray-400"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="w-64 mt-2 bg-white/95 dark:bg-gray-900/95 border border-gray-200/80 dark:border-gray-800/70 text-gray-900 dark:text-gray-200 rounded-lg shadow-lg shadow-gray-200/40 dark:shadow-black/25 p-1 backdrop-blur-sm"
                >
                  <div className="p-3">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10 border-2 border-gray-200 dark:border-gray-800 shadow-md">
                        <AvatarImage src="" alt="Profile" />
                        <AvatarFallback className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
                          U
                        </AvatarFallback>
                      </Avatar>
                      <div className="space-y-0.5">
                        <p className="text-sm font-medium text-gray-900 dark:text-gray-100 tracking-tight">
                          User
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          user@example.com
                        </p>
                      </div>
                    </div>

                    <div className="mt-3 space-y-1.5">
                      <Link
                        href="/settings"
                        className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800/60 transition-colors duration-200"
                      >
                        <div className="p-1.5 bg-gray-100 dark:bg-gray-800/70 rounded-md shadow-inner">
                          <User className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <span>Profile</span>
                      </Link>

                      <Link
                        href="/settings"
                        className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800/60 transition-colors duration-200"
                      >
                        <div className="p-1.5 bg-gray-100 dark:bg-gray-800/70 rounded-md shadow-inner">
                          <Settings className="h-3.5 w-3.5 text-gray-600 dark:text-gray-400" />
                        </div>
                        <span>Settings</span>
                      </Link>
                    </div>
                  </div>

                  <div className="h-px bg-gray-200 dark:bg-gray-800 my-1 mx-2" />

                  <div className="p-2">
                    <Button
                      variant="ghost"
                      className="w-full justify-start bg-gray-100 hover:bg-red-100 dark:bg-gray-800/40 dark:hover:bg-red-950/40 text-gray-700 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400 rounded-md transition-colors duration-200"
                      onClick={handleSignOut}
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Sign out</span>
                    </Button>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        <main className="py-6">
          <div className="px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
