// utils/errorHandler.js

export function handleApiError(error, fallbackMessage = 'Something went wrong.') {
    if (error.name === 'AbortError') return; // Request was aborted
  
    console.error('API Error:', error);
  
    if (error.response) {
      return error.response.statusText || fallbackMessage;
    }
  
    return error.message || fallbackMessage;
  }
  