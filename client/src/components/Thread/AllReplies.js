import React from 'react';

const AllReplies = ({ replies }) => {

  return (
    <div className="col-12" style={{ marginTop: '10px', marginBottom: '10px' }}>
      <div id="box-title"><b>Replies</b></div>
      {replies.map(reply => (
        <div className="card" key={reply._id}>
          <div className="card-body" id="recent-threads">
            {reply.description}
          </div>
        </div>
      ))
      }
    </div>
  );
}

export default AllReplies;