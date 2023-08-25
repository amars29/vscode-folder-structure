import React from "react";
import data from "./data.json";
import PrintNode from "./PrintNode";

let dataMap = new Map();

export function getObject(key) {
  return dataMap.get(key);
}

function Solution() {
  let map = new Map();
  let rootDirId = new Array();
  data.map((obj, index) => {
    if (obj.isDir) {
      map.set(obj.id, []);
    }

    if (obj.parent) {
      let parentValue = map.get(obj.parent);
      parentValue.push(obj.id);
      map.set(obj.parent, parentValue);
    } else {
      rootDirId.push(obj?.id);
    }
  });

  data.map((obj, index) => {
    let id = obj.id;

    if (map.has(id)) {
      let values = map.get(id);
      obj["children"] = values;
    }

    dataMap.set(id, obj);
  });

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
          return <PrintNode obj={obj} key={id} />;
        })}
      </div>
    </div>
  );
}

export default Solution;
