import React, { Component } from 'react';

class NewThread extends Component {
  render() {
    return (
      <div className="col-8" style={{ marginTop: '10px', marginBottom: '10px' }}>
        <div id="box-title"><b>New Post</b></div>
        <div className="card">
          <div className="card-body" id="new-post-card">
            <form>
              <div className="row">
                <select className="form-control col-6">
                  <option defaultValue>Community</option>
                  <option>...</option>
                </select>
                <select className="form-control col-6">
                  <option defaultValue>Category</option>
                  <option>...</option>
                </select>
              </div>
              <div className="row">
                <input id="post-title" type="text" className="form-control" placeholder="Title" />
              </div>
              <div className="row">
                <textarea id="post-area" className="form-control" placeholder="Enter text here" rows="4" />
              </div>
              <button id="post-submit-button" className="btn btn-primary float-right" type="submit">Submit post</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NewThread;