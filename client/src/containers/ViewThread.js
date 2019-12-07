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

  useEffect(() => {
    getThread(id)
      .then(response => response.json())
      .then(thread => setThread(thread));
  }, [id]); // << super important array to prevent infinite loop
  // const [commmunity, setCommunity] = useState("");

  useEffect(() => {
    getReplies(id._id)
      .then(response => response.json())
      .then(replies => setReplies(replies));
  }, [id]); // << super important array to prevent infinite loop
  // const [commmunity, setCommunity] = useState("");

  function formReplySubmitted(event) {

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
  }


  return (
    <div className="container">
      <ThreadContent thread={thread} />
      <NewReply formReplySubmitted={formReplySubmitted} />
      <AllReplies replies={replies} />
    </div>
  );
};
