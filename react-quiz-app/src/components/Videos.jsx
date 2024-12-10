import React, { useState } from "react";
import Video from "./Video";
import useVideos from "../hooks/useVideos";
import { Link } from "react-router-dom";
import InfiniteScroll from 'react-infinite-scroll-component';

function Videos() {
  const [page, setPage] = useState(1); 
  const [allVideos, setAllVideos] = useState([]);
  const { videoList, error, loading, hasMore } = useVideos(page);

  // Append new videos when videoList updates
  React.useEffect(() => {
    if (videoList?.length > 0) {
      setAllVideos((prevVideos) => [...prevVideos, ...videoList]);
    }
  }, [videoList]);

  return (
    <> 
    <div>
    
      <div className="text-center">
        {loading && (
          <span className="loading loading-bars loading-lg text-accent"></span>
        )}
        {error && <h3> {error} </h3>}
      </div>

      <div className="">
        {
        
        !loading &&
          !error &&
          allVideos.length > 0 && (
            <InfiniteScroll 
            dataLength={allVideos.length}
            hasMore={hasMore}
            next={() => setPage((prevPage) => prevPage + 8)}
            scrollThreshold={0.99}
            loader={<span className="loading loading-bars loading-lg text-accent"></span>}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            // scrollableTarget="scrollable-container"
            >
              {
                allVideos.map((video, index) =>
                  video.noq != 0 ? (
                    <Link to={`question/${video.youtubeID}`} key={video.youtubeID}>
                      <Video
                        imgUrl={`http://img.youtube.com/vi/${video.youtubeID}/maxresdefault.jpg`}
                        imgAlt={video.title}
                        title={video.title}
                        description={`Description for video ${index + 1}`}
                        noq={video.noq}
                      />
                    </Link>
                  ) : (
                    <Video
                      key={video.youtubeID}
                      imgUrl={`http://img.youtube.com/vi/${video.youtubeID}/maxresdefault.jpg`}
                      imgAlt={video.title}
                      title={video.title}
                      description={`Description for video ${index + 1}`}
                      noq={video.noq}
                    />
                  )
                )
              }
            </InfiniteScroll>
          )
        }

        {!loading && !error && allVideos.length === 0 && (
          <h3> No video Data Found </h3>
        )}
      </div>
      </div>
    </>
  );
}

export default Videos;
