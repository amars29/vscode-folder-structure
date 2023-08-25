import React from "react";
import data from "./data.json";
import PrintNode from "./PrintNode";

export function getObject(id) {
  return data.find((obj) => obj.id === id);
}

function Solution_old() {
  let map = new Map();
  let rootDirId = [];

  data.map((obj, index) => {
    if (obj.isDir) {
      map.set(obj.id, []);
    }

    if (obj.parent) {
      let parentValue = map.get(obj.parent);
      parentValue.push(obj.id);
      map.set(obj.parent, parentValue);
    } else {
      rootDirId.push(obj.id);
    }
  });

  console.log(map);

  data.map((obj, index) => {
    let id = obj.id;

    if (map.has(id)) {
      let values = map.get(id);
      obj["children"] = values;
    }
  });

  console.log(data);
  return (
    <div className="container">
      <div
        style={{
          marginLeft: "12px",
          padding: "12px",
        }}
      >
        {rootDirId.map((id) => {
          let obj = getObject(id);
          return <PrintNode obj={obj} />;
        })}
      </div>
    </div>
  );
}

export default Solution_old;
