import React, { useState } from "react";
import { getObject } from "./Solution";

function PrintNode({ obj }) {
  const [isCollapsible, setIsCollapsible] = useState(false);

  return (
    <div>
      <div
        style={{
          padding: "1px",
        }}
      >
        {obj.isDir ? (
          <button
            className="arrow-btn"
            onClick={() => setIsCollapsible(!isCollapsible)}
          >{`>`}</button>
        ) : (
          <></>
        )}
        <span>{obj.name}</span>
      </div>

      <div
        style={{
          marginLeft: "6px",
          paddingLeft: "6px",
          display: isCollapsible ? "none" : "block",
          borderWidth: "0.3px",
          borderLeftColor: "#525252",
          borderLeftStyle: "solid",
        }}
      >
        {obj.children
          ? obj.children.map((id) => <PrintNode obj={getObject(id)} key={id} />)
          : ""}
      </div>
    </div>
  );
}

export default PrintNode;
