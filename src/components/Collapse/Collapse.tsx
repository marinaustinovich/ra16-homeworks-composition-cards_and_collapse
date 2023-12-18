import React, { useState } from "react";

export const Collapse = ({
  collapsedLabel = "Развернуть",
  expandedLabel = "Свернуть",
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="container d-flex">
      <h3>Collapse</h3>
      <button className="btn btn-primary bnt-collapse" onClick={toggleCollapse}>
        {isCollapsed ? collapsedLabel : expandedLabel}
      </button>
      <div className={`collapse ${isCollapsed ? "" : "show"}`}>
        <div className="card card-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
          felis ultrices, elementum neque sit amet, efficitur velit. Nullam in
          est vitae leo facilisis malesuada eu et nunc.
        </div>
      </div>
    </div>
  );
};
