"use client";

import { useTheme } from "@/contexts/theme";
import clsx from "clsx";

export function Container({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  return (
    <div
      className={clsx(
        "text-text flex justify-center h-dvh w-dvw bg-[url(/bg-mobile-light.jpg)] md:bg-[url(/bg-desktop-light.jpg)] bg-cover bg-center",
        theme,
        theme === "dark" &&
          "bg-[url(/bg-mobile.jpg)] md:bg-[url(/bg-desktop.jpg)]",
      )}
    >
      <div className="max-w-147 w-full  my-14 flex flex-col items-center">
        {children}
      </div>
    </div>
  );
}
