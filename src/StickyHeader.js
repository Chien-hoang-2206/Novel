
import React from "react";
import { memo } from "react";
import useWindowSize from "./utils/useWindowSize "; 
function StickyHeader() {
  const { width } = useWindowSize();

  return (
    <div>
      {/* visible only when window greater than 500px */}
      {width > 500 && (
        <>
          <div role="button">
            <span>Testimonials</span>
          </div>
          <div role="button">
            <span>Price</span>
          </div>
          <div>
            <span  role="button">
              Question?
            </span>
          </div>
        </>
      )}
      {/* visible at any window size */}
      <div>
        <span className="primary-button"role="button">
          Join Now
        </span>
      </div>
    </div>
  );
}
export default memo(StickyHeader);