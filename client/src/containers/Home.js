import React, { useState, useEffect } from 'react';
import NewThread from '../components/Thread/NewThread'
import RecentThreads from '../components/Thread/RecentThreads'
import { getThreads, sendThread } from '../API'

const communities = require("../data/communities");

export default function Home() {
  const [community, setCommunity] = useState("");
  const [threads, setThreads] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    getThreads()
      .then(response => response.json())
      .then(threads => setThreads(threads));
  }, [count]); // << super important array to prevent infinite loop

  useEffect(() => {
    return () => {
      console.log('Component unmounted...')
    }
  }, []);

  function handleSelectCommunity(e) {
    const selectedCommunity = e.target.value;
    setCommunity(community => selectedCommunity);
  };

  function handleThreadSubmit(event) {
    event.preventDefault();
    const newThread = {
      community: community,
      title: event.target.postTitle.value,
      description: event.target.postArea.value,
      score: 0
    }

    sendThread(newThread);
    event.target.elements.postTitle.value = '';
    event.target.elements.postArea.value = '';
    setCount(count + 1)
  }

  return (
    <div className="container">
      <NewThread
        community={community}
        //categories={categories}
        communities={communities}
        handleSelectCommunity={handleSelectCommunity}
        handleThreadSubmit={handleThreadSubmit} />
      <RecentThreads
        threads={threads} />
    </div>
  );
};
