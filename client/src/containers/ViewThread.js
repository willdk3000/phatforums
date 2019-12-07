import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import ThreadContent from '../components/Thread/ThreadContent'
import { getThread } from '../API'

export default function ViewThread() {

  let id = useParams();

  const [thread, setThread] = useState([]);

  useEffect(() => {
    getThread(id)
      .then(response => response.json())
      .then(thread => setThread(thread));
  }, [id]); // << super important array to prevent infinite loop
  // const [commmunity, setCommunity] = useState("");

  return (
    <div className="container">
      <ThreadContent thread={thread} />
    </div>
  );
};
