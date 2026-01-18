"use client";

import type * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { PiSun, PiMoonStars } from "react-icons/pi";

import { cn } from "@/lib/utils";
import { useTheme } from "@/contexts/theme";

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  const { theme, changeTheme } = useTheme();

  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "flex peer group bg-surface h-6 box-border w-16 my-1 shrink-0 items-center rounded-full border border-transparent transition-all outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      onCheckedChange={(checked) => changeTheme(checked ? "dark" : "light")}
      checked={theme !== null && theme === "dark"}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "bg-white hover:ring-8 hover:ring-highlight flex justify-center items-center size-8 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%)] data-[state=unchecked]:translate-x-0",
        )}
      >
        <PiSun
          className="flex group-data-[state=checked]:hidden text-black"
          size={16}
        />
        <PiMoonStars
          className="flex group-data-[state=unchecked]:hidden text-black"
          size={16}
        />
      </SwitchPrimitive.Thumb>
    </SwitchPrimitive.Root>
  );
}

export { Switch };
