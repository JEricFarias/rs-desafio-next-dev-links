"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

type ThemeOption = "dark" | "light";

type ThemeType = {
  theme: ThemeOption | null;
  changeTheme: (theme: ThemeOption) => void;
};

const Theme = createContext<ThemeType>({} as ThemeType);

interface Props {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState<ThemeOption | null>(null);

  const changeTheme = useCallback((themeOption: ThemeOption) => {
    localStorage.setItem("theme", themeOption);
    setTheme(themeOption);
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark", themeOption === "dark");
    }
  }, []);

  useEffect(() => {
    // get browser preferences
    const browserPrefers: ThemeOption = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches
      ? "dark"
      : "light";

    // get storage preferece
    const storage = localStorage.getItem("theme");
    const selected =
      storage && storage === "dark"
        ? "dark"
        : storage === "light"
          ? "light"
          : null;

    const finalTheme = selected ?? browserPrefers;
    setTheme(finalTheme);
    document.documentElement.classList.toggle("dark", finalTheme === "dark");
  }, []);

  return (
    <Theme.Provider value={{ theme, changeTheme }}>{children}</Theme.Provider>
  );
}

export function useTheme() {
  return useContext(Theme);
}
