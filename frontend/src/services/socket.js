import io from 'socket.io-client';

let socket = null;

export const initializeSocket = (token) => {
  if (socket) {
    socket.disconnect();
  }

  socket = io('https://project-r84n.onrender.com', {
  auth: {
    token: token
  },
  withCredentials: true,
  transports: ['websocket'], // Optional: to force WebSocket connection
});


  socket.on('connect', () => {
    console.log('Socket connected');
  });

  socket.on('disconnect', () => {
    console.log('Socket disconnected');
  });

  socket.on('error', (error) => {
    console.error('Socket error:', error);
  });

  return socket;
};

export const getSocket = () => {
  return socket;
};

export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
};

// Auto-initialize socket if token is available
const token = localStorage.getItem('accessToken');
if (token) {
  initializeSocket(token);
} 
