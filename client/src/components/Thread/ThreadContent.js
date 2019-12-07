import React, { Component } from 'react';

class ThreadContent extends Component {
  render() {
    return (
      <div className="col-lg-8 col-md-8 col-sm-12" style={{ marginTop: '10px', marginBottom: '10px' }}>
        <h1 className="display-4">{this.props.thread.title}</h1>
        <div className="card">
          <div className="card-body" style={{ backgroundColor: 'lightgrey' }}>
            {this.props.thread.description}
          </div>
        </div>
      </div >
    );
  }
}

export default ThreadContent;
