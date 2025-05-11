"use client";

import React, {Suspense} from "react";
import DedicatedForm from "./dedicated-form";

function DedicatedLinesForm() {
  return (
    <>
      <Suspense fallback={<div>Loading form...</div>}>
        {" "}
        <DedicatedForm />
      </Suspense>
    </>
  );
}

export default DedicatedLinesForm;
