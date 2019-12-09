import React from 'react';
import { Link } from 'react-router-dom';

const RecentThreads = ({ threads, replies }) => {
  return (
    <div className="col-12" style={{ marginTop: '10px', marginBottom: '10px' }}>
      <div id="box-title"><b>Recent Threads</b></div>
      {threads.map(thread => (
        <div className="card" key={thread._id}>
          <div className="card-body" id="recent-threads">
            <div className="col-6 float-left">
              <Link to={{ pathname: `/threads/${thread._id}` }}>
                {thread.title}
              </Link>
            </div>
            <div className="col-4 float-right text-right" style={{ fontSize: '13px' }}>
              {thread.replies} replies | {thread.community}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecentThreads;