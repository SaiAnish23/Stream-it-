"use client";

import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";

// import { Button } from "@/components/ui/button";
import { useSidebar } from "@/store/use-sidebar";
// import { Skeleton } from "@/components/ui/skeleton";

export const Toggle = () => {
  const { collapsed, onExpand, onCollapse } = useSidebar((state) => state);

  const label = collapsed ? "Expand" : "Collapse";

  return (
    <>
      {collapsed && (
        <div className="hidden lg:flex w-full items-center justify-center pt-4 mb-4">
          <div
            className="tooltip hover:tooltip-open tooltip-right"
            data-tip="expand"
          >
            <button
              onClick={onExpand}
              //   variant="ghost"
              className=" btn-ghost h-auto p-2"
            >
              <ArrowRightFromLine className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
      {!collapsed && (
        <div className="p-3 pl-6 mb-2 flex items-center w-full text-white justify-between">
          <p className="font-semibold text-white">For you</p>
          <div
            className="tooltip hover:tooltip-open tooltip-right"
            data-tip="collapse"
          >
            <button
              onClick={onCollapse}
              className=" btn-ghost h-auto p-2 ml-auto"
              //   variant="ghost"
            >
              <ArrowLeftFromLine className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
