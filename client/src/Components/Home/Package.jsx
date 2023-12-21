import React from "react";
import "../../Style/package.css";
import tourData from "../../Data/PackageList";
const Package = () => {
  return (
    <div className="package-top">
      <div className="package-inner-top">
        <div className="package-head">
          Your Bespoke Escape Awaits, Discover Our Signature Packages
        </div>
        {tourData.map((packageData, index) => (
          <div className="package-lists">
            <div key={index}>
              <div className="package-genre">
                <div className="package-list-title">{packageData.title}</div>
                <div className="package-list-desc">{packageData.subtitle}</div>
              </div>
              <div className="image-row">
                {packageData.images.map((image, i) => (
                  <picture key={i}>
                    <img src={image.url} alt={image.alt} />
                  </picture>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Package;
