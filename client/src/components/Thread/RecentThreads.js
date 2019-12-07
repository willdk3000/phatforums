import React from 'react';
import { Link } from 'react-router-dom';

const RecentThreads = ({ threads }) => {
  return (
    <div className="col-12" style={{ marginTop: '10px', marginBottom: '10px' }}>
      <div id="box-title"><b>Recent Threads</b></div>
      {threads.map(thread => (
        <div className="card" key={thread._id}>
          <div className="card-body" id="recent-threads">
            <Link to={{ pathname: `/threads/${thread._id}` }}>
              {thread.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecentThreads;