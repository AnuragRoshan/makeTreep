import React from "react";
import PackageCard from "../Package/PackageCard";
import TrendingStroies from "../Stories/TrendingStroies";

const DestinationPackage = ({ place }) => {
  const packages = place.packages;
  console.log(packages);
  return (
    <div className="destinationpackage-top">
      <div className="destinationpackage-other">
        <div className="destinationpackage-filter">1</div>
        <div className="destinationpackage-stories"></div>
      </div>
      <div className="destinationpackage-packagelist-top">
        <div className="destinationpackage-packagelist">
          <div className="destinationpackage-package-cardlist">
            {packages.map((pack) => {
              return <PackageCard package={pack} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationPackage;
