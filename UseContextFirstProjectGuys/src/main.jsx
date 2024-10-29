import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {  createBrowserRouter, RouterProvider,} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import AllMail from './routes/AllMail/AllMail.jsx';
import Drafts from './routes/Drafts/Drafts.jsx';
import Inbox from './routes/Inbox/Inbox.jsx';
import SendEmail from './routes/SendEmail/SendEmail.jsx';
import Spam from './routes/Spam/Spam.jsx';
import Starred from './routes/Starred/Starred.jsx';
import Trash from './routes/Trash/Trash.jsx';
import Home from './routes/Home/Home.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {path: '/home', element: <Home/>},
      {path: '/allmail', element: <AllMail />},
      {path: '/drafts', element: <Drafts />},
      {path: '/inbox', element: <Inbox />},
      {path: '/sendemail', element: <SendEmail />},
      {path: '/spam', element: <Spam />},
      {path: '/starred', element: <Starred />},
      {path: '/trash', element: <Trash />},
    ]   
    }
])  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
