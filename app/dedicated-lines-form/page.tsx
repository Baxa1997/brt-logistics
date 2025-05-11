import React, {Suspense} from "react";
import DedicatedForm from "./dedicated-form";

function DedicatedLinesForm() {
  return (
    <>
      <Suspense>
        {" "}
        <DedicatedForm />
      </Suspense>
    </>
  );
}

export default DedicatedLinesForm;
