import React, { memo, useState } from "react";
import "./Tooltip.scss";

const Tooltip = ({ message, position, children }) => {
  const [displayTooltip, setDisplayTooltip] = useState(false);

  return (
    <span className="tooltip" onMouseLeave={() => setDisplayTooltip(false)}>
      {displayTooltip && (
        <div className={`tooltip-bubble tooltip-${position}`}>
          <div className="tooltip-message">{message}</div>
        </div>
      )}
      <span
        className="tooltip-trigger"
        onMouseOver={() => setDisplayTooltip(true)}
      >
        {children}
      </span>
    </span>
  );
};

export default memo(Tooltip);
