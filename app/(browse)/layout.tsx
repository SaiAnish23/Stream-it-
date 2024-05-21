import React from "react";
// import Navbar from "";
import { Navbar } from "./_components/navbar";
// import { Sidebar } from "./_components/sidebar";
import { Sidebar } from "./_components/sidebar";

import { Container } from "./_components/container";

import { Suspense } from "react";

const BrowseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text-white">
      {/* <div>Layout</div> */}
      <div>
        <Navbar></Navbar>
      </div>

      <div className="mt-[80px] flex ">
        <Sidebar />

        {/* <Suspense fallback={<SidebarSkeleton />}>
          <Sidebar />
        </Suspense> */}

        <div className="flex h-full pt-20 mt-[-80px]">
          <Container>{children}</Container>
        </div>
      </div>
    </div>
  );
};

export default BrowseLayout;
