import React from "react";

function Video({imgUrl, imgAlt, title, description, noq}) {
  
  
  return (
    <>
      <div className="card card-compact bg-base-100 w-70 shadow-xl px-2">
        <figure>
          <img
            src={imgUrl}
            alt={imgAlt}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <p className="justify-end" >No of Question: {noq}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Video;
