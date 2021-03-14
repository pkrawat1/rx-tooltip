import React, { memo, useState } from "react";
import "./Tooltip.scss";

const Tooltip = ({ message, position, children, formatMessage }) => {
  const [displayTooltip, setDisplayTooltip] = useState(false);

  // quest 1 to remove quotes from string
  const formattedMessage = () =>
    formatMessage ? message.replace(/['"]+/g, "") : message;

  return (
    <span className="tooltip" onMouseLeave={() => setDisplayTooltip(false)}>
      {displayTooltip && (
        <div className={`tooltip-bubble tooltip-${position}`}>
          <div className="tooltip-message">{formattedMessage()}</div>
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
