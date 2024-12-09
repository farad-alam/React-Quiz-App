import React, { useState, useEffect } from 'react'
import { getDatabase, ref, query, orderByKey, get } from "firebase/database";

function useOrginalResult(videoID) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState()
  const [orginalResults, setOrginalResults] = useState([]);



  useEffect(() => {
    async function fetchOrginalResult() {
      const db = getDatabase();
      const resultRef = ref(db, `answers/${videoID}/questions`);
      const resultQuery = query(
        resultRef,
        orderByKey()
      );

      try {
        setLoading(true);
        setError(false);
        const snapshot = await get(resultQuery);
        setLoading(false);

        if (snapshot.exists()) {
          const result = snapshot.val();
          console.log(result)
          if (result) {
            setOrginalResults((prevResult) => {
              return [...prevResult, ...Object.values(result)];
            });
          }
        } else {
            console.log("No Result Avilable")
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError("Failed to fetch Orginal Result data");
      }
    }

    fetchOrginalResult();
  }, [videoID]);

  return {
    loading,
    error,
    orginalResults
  }
}

export default useOrginalResult