import React from "react";
import Office1 from "./office1";
import Office2 from "./office2";
import Office3 from "./office3";

function Office() {
  return (
    <div style={{marginTop:"50px" ,display:"flex"}}>
      <Office1 />
      <Office2 />
      <Office3 />
    </div>
  );
}
export default Office;
