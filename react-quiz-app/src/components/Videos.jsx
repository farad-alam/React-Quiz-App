import React from "react";
import Video from "./Video";


function Videos() {
  const img = "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp";
  const videosArray = Array.from({ length: 11 }); // Create an array with 11 elements
  // console.log(videosArray)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {videosArray.map((_, index) => (
        <Video
          key={index}
          imgUrl={img}
          imgAlt={`Video Thumbnail ${index + 1}`}
          title={`Video Title ${index + 1}`}
          description={`Description for video ${index + 1}`}
          noq={index + 1}
        />
      ))}
    </div>
  );
}

export default Videos;
