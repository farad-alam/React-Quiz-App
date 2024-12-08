import React from "react";
import Checkbox from "./Checkbox";

function Options({options}) {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-12">
        {
          options.map((singleOption, index)=>{
              return <Checkbox label={singleOption.title} key={index} />
          })
        }

      </div>
    </>
  );
}

export default Options;
