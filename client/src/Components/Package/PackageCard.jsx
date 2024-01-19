import React from "react";
import "../../Style/Package/package.css";
import { Link } from "react-router-dom";

const PackageCard = (props) => {
  // console.log(props);
  return (
    <div className="package-card-top">
      <Link to={`/package/${props.package.packageTitle}`}>
        <div className="package-card-image">
          <img src={props.package.images} alt="" srcset="" />
        </div>
        <div className="package-card-bookmark">
          <i class="fa-regular fa-heart"></i>
        </div>
        <div className="package-card-detail">
          <div className="package-card-name">{props.package.packageTitle}</div>
          <div className="package-card-company">
            {props.package.companyName}
          </div>
          <div className="package-card-inclusion">
            {props.package.services.includes("Flight") ? (
              <>
                <div>
                  <i class="fa-solid fa-plane-departure"></i>
                </div>
              </>
            ) : (
              <></>
            )}
            {props.package.services.includes("Hotel") ? (
              <>
                <div>
                  <i class="fa-solid fa-hotel"></i>
                </div>
              </>
            ) : (
              <></>
            )}
            {props.package.services.includes("Food") ? (
              <>
                <div>
                  <i class="fa-solid fa-bowl-food"></i>
                </div>
              </>
            ) : (
              <></>
            )}
            {props.package.services.includes("Cab") ? (
              <>
                <div>
                  <i class="fa-solid fa-car"></i>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
          <div style={{ display: "flex" }}>
            <div className="package-card-duration">
              {props.package.duration}
            </div>
            <div className="package-card-price">${props.package.cost}</div>
          </div>
          <div style={{ display: "flex", marginInlineStart: "0.5rem" }}>
            <div className="place-card-rating">{props.package.rating}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PackageCard;
