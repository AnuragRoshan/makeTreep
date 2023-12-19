import React from "react";
import "../../Style/trending.css";
import { getCurrentMonth } from "../../Data/Getfunctions.js";

const Trending = () => {
  const currentMonth = getCurrentMonth();
  return (
    <div className="trending-top">
      <div className="trending-inner-top">
        <div className="trending-head">Trending in {currentMonth}</div>
        <div className="trending-img-top">
          <picture>
            <img
              src="https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              srcset=""
            />
          </picture>
          <picture>
            <img
              src="https://images.unsplash.com/photo-1620398762817-ff3885718863?q=80&w=2031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              srcset=""
            />
          </picture>
        </div>
        <div className="trending-img-bottom">
          <picture>
            <img
              src="https://images.unsplash.com/photo-1634400118017-7ca0f1ed1588?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              srcset=""
            />
          </picture>
          <picture>
            <img
              src="https://images.unsplash.com/photo-1584542017978-5609f8db1135?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              srcset=""
            />
          </picture>
          <picture>
            <img
              src="https://images.unsplash.com/photo-1653280459455-d61c6f7e9e3d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              srcset=""
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default Trending;
