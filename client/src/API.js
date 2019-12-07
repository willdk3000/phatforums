//Get all threads
export function getThreads() {
  const response = fetch('/api/getThreads')
  return response;
};

//Get specific thread
export function getThread(id) {
  const response = fetch('/api/getThread', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      'id': id
    })
  });
  return response
};