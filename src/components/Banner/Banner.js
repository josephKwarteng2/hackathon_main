import React from "react";
import { Link } from "react-router-dom";

import { bannerImgOne } from "../../assets/images";
import Image from "../designLayouts/Image";

const Banner = () => {
  return (
    <div className="w-full bg-white">
      <Link to="/offer">
        <div>
          <Image imgSrc={bannerImgOne} />
        </div>
      </Link>
    </div>
  );
};

export default Banner;
