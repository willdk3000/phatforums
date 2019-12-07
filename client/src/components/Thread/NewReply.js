import React from 'react';

const NewReply = ({ formReplySubmitted }) => {

  return (
    <div className="col-lg-8 col-md-8 col-sm-12" style={{ marginTop: '10px', marginBottom: '10px' }}>
      <div id="box-title"><b>Reply</b></div>
      <div className="card">
        <div className="card-body" id="new-post-card">
          <form onSubmit={(event) => formReplySubmitted(event)}>
            <div className="row">
              <textarea id="postArea" className="form-control" placeholder="Enter reply here" rows="4" />
            </div>
            <button id="post-submit-button" className="btn btn-primary float-right" type="submit">Post reply</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewReply;