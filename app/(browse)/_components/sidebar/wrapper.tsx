"use client";

import { useSidebar } from "@/store/use-sidebar";

interface WrapperProps {
  children: React.ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => {
  const { collapsed } = useSidebar((state) => state);

  return (
    <>
      <aside
        className={`fixed left-0 flex flex-col w-60 h-full bg-gray-700 border-r border-[#2D2E35] z-50 ${
          collapsed ? "w-[70px]" : ""
        }`}
      >
        {children}
      </aside>
    </>
  );
};
