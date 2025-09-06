"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full w-9 h-9 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800/50"
        >
          <Sun className="h-[1.1rem] w-[1.1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.1rem] w-[1.1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="mt-2 bg-[#0F111A] border border-gray-800/80 text-gray-200 rounded-lg shadow-lg shadow-black/20 p-1 w-36"
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className={`flex items-center px-2.5 py-2 text-sm cursor-pointer rounded-md ${
            theme === "light" ? "bg-gray-800/70" : "hover:bg-gray-800/30"
          }`}
        >
          <Sun className="mr-2 h-4 w-4 text-amber-500" />
          <span className="text-gray-300">Light</span>
          {theme === "light" && (
            <span className="ml-auto h-2 w-2 rounded-full bg-blue-500" />
          )}
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className={`flex items-center px-2.5 py-2 text-sm cursor-pointer rounded-md ${
            theme === "dark" ? "bg-gray-800/70" : "hover:bg-gray-800/30"
          }`}
        >
          <Moon className="mr-2 h-4 w-4 text-indigo-400" />
          <span className="text-gray-300">Dark</span>
          {theme === "dark" && (
            <span className="ml-auto h-2 w-2 rounded-full bg-blue-500" />
          )}
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className={`flex items-center px-2.5 py-2 text-sm cursor-pointer rounded-md ${
            theme === "system" ? "bg-gray-800/70" : "hover:bg-gray-800/30"
          }`}
        >
          <div className="mr-2 h-4 w-4 flex items-center justify-center">
            <span className="h-3 w-3 rounded-full bg-gradient-to-br from-amber-500 to-indigo-500" />
          </div>
          <span className="text-gray-300">System</span>
          {theme === "system" && (
            <span className="ml-auto h-2 w-2 rounded-full bg-blue-500" />
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
