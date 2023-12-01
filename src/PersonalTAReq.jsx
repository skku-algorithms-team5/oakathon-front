import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PersonalTAReq = () => {
  const [requestState, setRequestState] = useState({
    data: [],
    loading: true,
    error: null,
  });

  const fetchData = async () => {
    try {
      const { data: fetchData } = await axios.get('https://httpbin.org/get');

      setRequestState((prev) => ({
        ...prev,
        data: fetchData,
      }));

      console.log(fetchData);
    } catch (err) {
      setRequestState((prev) => ({
        ...prev,
        error: err,
      }));
    } finally {
      setRequestState((prev) => ({
        ...prev,
        loading: false,
      }));
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {requestState.loading ? (
        <p>Data is currently loading...</p>
      ) : requestState.error ? (
        <p>There was an issue loading the articles.</p>
      ) : (
        <div>
          <p>fetched successfully</p>
        </div>
      )}
    </div>
  );
};

export default PersonalTAReq;
