"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  TrendingUp,
  Users,
  MessageSquare,
  Shield,
  DollarSign,
  MessageCircle,
  Trophy,
  BarChart3,
  Settings,
  X,
  GanttChartSquare,
  Layers,
  Sparkles,
  UserCog,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const mainNavigation = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Market Intelligence", href: "/dashboard/market", icon: TrendingUp },
  { name: "Buyers", href: "/dashboard/buyers", icon: Users },
  { name: "Pitches", href: "/dashboard/pitches", icon: MessageSquare },
  { name: "Compliance", href: "/dashboard/compliance", icon: Shield },
  { name: "Schemes", href: "/dashboard/schemes", icon: DollarSign },
  { name: "Forum", href: "/dashboard/forum", icon: MessageCircle },
  { name: "Impact", href: "/dashboard/impact", icon: BarChart3 },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  const NavItem = ({
    item,
  }: {
    item: { name: string; href: string; icon: any };
  }) => (
    <Link
      href={item.href}
      className={cn(
        pathname === item.href
          ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md"
          : "text-gray-300 hover:text-white hover:bg-gray-800/50",
        "group flex gap-x-3 items-center rounded-md p-2 text-sm font-medium transition-all duration-200 ease-in-out"
      )}
    >
      <div
        className={cn(
          "rounded-md p-1.5 transition-all duration-200",
          pathname === item.href
            ? "bg-white/20"
            : "bg-gray-800/70 group-hover:bg-gray-700/80"
        )}
      >
        <item.icon
          className={cn(
            pathname === item.href
              ? "text-white"
              : "text-gray-400 group-hover:text-white",
            "h-4 w-4 transition-colors duration-200"
          )}
          aria-hidden="true"
        />
      </div>
      <span className="truncate">{item.name}</span>
      {pathname === item.href && (
        <div className="ml-auto h-2 w-2 rounded-full bg-blue-400 animate-pulse"></div>
      )}
    </Link>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-64 lg:flex-col">
        <div className="flex h-full flex-col bg-gradient-to-b from-gray-900 via-gray-900 to-[#111827] border-r border-gray-800/50 shadow-xl transition-all duration-300">
          <div className="flex h-16 shrink-0 items-center px-6 border-b border-gray-800/50 bg-gray-900/70 backdrop-blur-sm">
            <Link href="/dashboard" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-md bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-lg">n</span>
              </div>
              <h1 className="text-xl font-semibold tracking-tight text-gray-100">
                notoll
              </h1>
            </Link>
          </div>

          <div className="flex flex-1 flex-col overflow-hidden">
            <div className="px-3 py-4">
              <h2 className="px-4 text-xs font-semibold text-blue-400 uppercase tracking-wider">
                Navigation
              </h2>
              <div className="mt-2 space-y-1">
                {mainNavigation.map((item) => (
                  <NavItem key={item.name} item={item} />
                ))}
              </div>
            </div>

            <div className="mt-auto px-3 py-4">
              <div className="rounded-md bg-gray-800/70 p-3 space-y-3 border border-gray-700/30 shadow-inner backdrop-blur-sm">
                <div className="flex items-center">
                  <div className="p-1.5 rounded-md bg-blue-600/20 shadow-inner">
                    <Sparkles className="h-4 w-4 text-blue-400" />
                  </div>
                  <div className="ml-2">
                    <p className="text-xs font-medium text-gray-200">
                      Premium Plan
                    </p>
                    <p className="text-xs text-gray-400">Until Sep 30, 2025</p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-transparent border-gray-700 hover:bg-gray-800 text-gray-300 hover:text-white shadow-sm transition-all duration-200"
                >
                  <UserCog className="h-3.5 w-3.5 mr-2" />
                  <span className="text-xs">Manage Account</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile sidebar */}
      {isOpen && (
        <div className="relative z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm transition-opacity duration-300"
            onClick={onClose}
          />
          <div className="fixed inset-y-0 left-0 z-50 w-80 max-w-[85vw] bg-gradient-to-b from-gray-900 via-gray-900 to-[#111827] shadow-2xl transition-all duration-300 ease-in-out">
            <div className="flex h-16 shrink-0 items-center justify-between px-6 border-b border-gray-800/50 bg-gray-900/70 backdrop-blur-sm">
              <Link
                href="/dashboard"
                onClick={onClose}
                className="flex items-center space-x-2"
              >
                <div className="w-8 h-8 rounded-md bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-lg">n</span>
                </div>
                <h1 className="text-xl font-semibold tracking-tight text-gray-100">
                  notoll
                </h1>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="text-gray-400 hover:text-white hover:bg-gray-800/70 rounded-full transition-colors duration-200"
                aria-label="Close sidebar"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="px-3 py-4">
              <h2 className="px-4 text-xs font-semibold text-blue-400 uppercase tracking-wider">
                Navigation
              </h2>
              <div className="mt-2 space-y-1">
                {mainNavigation.map((item) => (
                  <NavItem key={item.name} item={item} />
                ))}
              </div>

              <div className="mt-8 mx-4 rounded-md bg-gray-800/70 p-3 space-y-3 border border-gray-700/30 shadow-inner backdrop-blur-sm">
                <div className="flex items-center">
                  <div className="p-1.5 rounded-md bg-blue-600/20 shadow-inner">
                    <Sparkles className="h-4 w-4 text-blue-400" />
                  </div>
                  <div className="ml-2">
                    <p className="text-xs font-medium text-gray-200">
                      Premium Plan
                    </p>
                    <p className="text-xs text-gray-400">Until Sep 30, 2025</p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-transparent border-gray-700 hover:bg-gray-800 text-gray-300 hover:text-white shadow-sm transition-all duration-200"
                >
                  <UserCog className="h-3.5 w-3.5 mr-2" />
                  <span className="text-xs">Manage Account</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
