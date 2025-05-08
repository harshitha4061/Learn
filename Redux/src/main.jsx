import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// context api creates it own provider and doesneed to pass anything
import { MyContextProvider } from './context/context.jsx'
// for react redux and toolkit follow same method 
import { Provider } from 'react-redux';
// import {store} from './redux/store.jsx'
import {store} from './slice/store1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <MyContextProvider>
      <App />
    </MyContextProvider>
    </Provider>
  </StrictMode>,
)
