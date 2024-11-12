
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import store from './redux/store.ts'
import { BrowserRouter } from 'react-router-dom'
import { io } from 'socket.io-client'

export const socket = io('http://localhost:1871');
// socket.on('connect', () => {
//   console.log('Connected to server:', socket.id);
// });



createRoot(document.getElementById('root')!).render(
  
    <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>
  
)
