"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { Computer, Moon, Sun, SunDimIcon, SunIcon } from "lucide-react";

const Theme = () => {
  const [currentTheme, setCurrentTheme] = React.useState("system");

  // Check for the theme in local storage and set it on initial load
  React.useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      setCurrentTheme(theme);
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else if (theme === "light") {
        document.documentElement.classList.remove("dark");
      } else if (theme === "system") {
        const isDarkMode = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;

        if (isDarkMode) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    } else {
      localStorage.setItem("theme", "system");
    }
  }, []);

  // Check for system theme changes
  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (currentTheme === "system") {
        if (e.matches) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [currentTheme]);

  // Handle theme change
  const handleThemeChange = (theme: string) => {
    setCurrentTheme(theme);
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else if (theme === "system") {
      const isDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      if (isDarkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("theme", "system");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("theme");
    }
  };
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost">
            <ThemeIcon theme={currentTheme} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-30 mr-2">
          <DropdownMenuLabel>Theme</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup
            value={currentTheme}
            onValueChange={handleThemeChange}
          >
            <DropdownMenuRadioItem value="light">
              <SunIcon className="w-4 h-4" />
              <span className=" pl-2">Light</span>
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="dark">
              {" "}
              <Moon className="w-4 h-4" />
              <span className=" pl-2">Dark</span>
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="system">
              <Computer className="w-4 h-4" />
              <span className=" pl-2">System</span>
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Theme;

const ThemeIcon = ({ theme }: { theme: string }) => {
  return (
    <div className="flex items-center">
      {theme === "dark" ? (
        <Moon className="w-5 h-5 text-gray-200" />
      ) : theme === "light" ? (
        <SunIcon className="w-7 h-7 text-gray-800" />
      ) : (
        <Computer className="w-5 h-5 text-gray-800 dark:text-gray-200" />
      )}
    </div>
  );
};
