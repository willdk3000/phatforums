import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import ThreadContent from '../components/Thread/ThreadContent'
import NewReply from '../components/Thread/NewReply'
import AllReplies from '../components/Thread/AllReplies'
import { getThread, sendReply, getReplies } from '../API'

export default function ViewThread() {

  let id = useParams();

  const [thread, setThread] = useState([]);
  const [replies, setReplies] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    getThread(id)
      .then(response => response.json())
      .then(thread => setThread(thread));
  }, [id], [count]); // << super important array to prevent infinite loop
  // const [commmunity, setCommunity] = useState("");

  useEffect(() => {
    getReplies(id._id)
      .then(response => response.json())
      .then(replies => setReplies(replies));
  }, [count]); // << super important array to prevent infinite loop

  useEffect(() => {
    return () => {
      console.log('Component "View thread" unmounted...')
    }
  }, []);

  //console.log(count)

  function formReplySubmitted(event) {

    if (event.target.postArea.value !== "") {
      event.preventDefault();
      const reply = {
        thread_id: id._id,
        community: thread.community,
        category: thread.category,
        description: event.target.postArea.value,
        score: 0,
      };

      sendReply(reply);
      event.target.elements.postArea.value = '';
      setCount(count + 1)
    }

  }

  return (
    <div className="container">
      <ThreadContent thread={thread} />
      <NewReply formReplySubmitted={formReplySubmitted} />
      <AllReplies replies={replies} />
    </div>
  );
};
