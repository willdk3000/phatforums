//Get all threads
export function getThreads() {
  const response = fetch('/api/getThreads')
  return response;
};