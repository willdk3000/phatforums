import React from 'react';

const NewThread = ({ community, communities, handleSelectCommunity, handleThreadSubmit }) => {
  return (
    <div className="col-lg-8 col-md-8 col-sm-12" style={{ marginTop: '10px', marginBottom: '10px' }}>
      <div id="box-title"><b>New Thread</b></div>
      <div className="card">
        <div className="card-body" id="new-post-card">
          <form onSubmit={(e) => handleThreadSubmit(e)}>
            <div className="row">
              <select onChange={(e) => handleSelectCommunity(e)} className="form-control col-lg-6 col-md-6 col-sm-12">
                <option defaultValue>Community</option>
                {communities.map((community) => (
                  <option key={community.key}>{community.name}</option>)
                )}
              </select>
            </div>
            <div className="row">
              <input id="postTitle" type="text" className="form-control" placeholder="Title" />
            </div>
            <div className="row">
              <textarea id="postArea" className="form-control" placeholder="Enter text here" rows="4" />
            </div>
            <button id="post-submit-button" className="btn btn-primary float-right" type="submit">Submit post</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewThread;