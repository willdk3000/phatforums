import React, { useState, useEffect } from 'react';
import NewThread from '../components/Thread/NewThread'
import RecentThreads from '../components/Thread/RecentThreads'
import { getThreads } from '../API'

export default function Home() {
  const [commmunity, setCommunity] = useState("");
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    getThreads()
      .then(response => response.json())
      .then(threads => setThreads(threads));
  }, []); // << super important array to prevent infinite loop

  return (
    <div className="container">
      <NewThread />
      <RecentThreads
        threads={threads} />
    </div>
  );
};
