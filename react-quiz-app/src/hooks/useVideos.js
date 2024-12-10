import React, { useEffect, useState } from "react";
import { getDatabase, ref, query, orderByKey, get, startAt, limitToFirst } from "firebase/database";

function useVideos(page) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [videoList, setVideoList] = useState([]);
  const [hasMore, setHasMore] = useState(true)


  useEffect(() => {
    async function fetchVideo() {
      const db = getDatabase();
      const videoRef = ref(db, "videos");
      const videoQuery = query(
        videoRef,
        orderByKey(),
        startAt("" + page),
        limitToFirst(8)
      );

      try {
        setLoading(true);
        setError(false);
        const snapshot = await get(videoQuery);
        setLoading(false);

        if (snapshot.exists()) {
          const videos = snapshot.val();
          console.log(videos)
          if (videos) {
            setVideoList((prevVideoList) => {
              return [...Object.values(videos)];
            });
          }
        } else {
          setHasMore(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError("Failed to fetch video data");
      }
    }

    fetchVideo();
  }, [page]);

  return {
    loading,
    error,
    videoList,
    hasMore,
  };
}

export default useVideos;
