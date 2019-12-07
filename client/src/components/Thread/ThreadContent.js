import React from 'react';

const ThreadContent = ({ thread }) => {
  return (
    <div className="col-lg-8 col-md-8 col-sm-12" style={{ marginTop: '10px', marginBottom: '10px' }}>
      <h1 className="display-4">{thread.title}</h1>
      <div className="card">
        <div className="card-header" style={{ fontSize: '12px' }}>
          <div className="col-4 float-left">
            Original post | {thread.date}
          </div>
          <div className="col-4 float-right text-right">
            {thread.community} | {thread.category}
          </div>
        </div>
        <div className="card-body" style={{ backgroundColor: 'lightgrey' }}>
          {thread.description}
        </div>
      </div>
    </div >
  );
}

export default ThreadContent;
