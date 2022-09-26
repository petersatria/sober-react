import React from "react";

const BodyTagline = () => {
  return (
    <div className="col-md-5 col-sm-12 col-lg-7 col-xl-6 text-center img-tagline-area">
      <img src={require("../../assets/sober.png")} className="img-fluid img-tagline mb-sm-4 mb-3" alt="phlox" />
      <p id="text-tagline" style={{fontSize: "2.5rem"}}>Born To Dress Like King & Queen</p>
    </div>
  );
};

export default BodyTagline;
