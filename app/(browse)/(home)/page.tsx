import { Suspense } from "react";

import { Results, ResultsSkeleton } from "./_components/result";

export default function Page() {
  return (
    <div className="h-full p-8 max-w-screen-2xl mx-auto text-white">
      {/* {/* <Suspense fallback={<ResultsSkeleton />}> */}
      {/* </Suspense> */}
      

      <Results />

    </div>
  );
}