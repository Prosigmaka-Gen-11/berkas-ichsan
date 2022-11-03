import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter , RouterProvider} from 'react-router-dom';
// import { ContextProvider } from './Contexts/ContextProvider';
import Home from './Home';
import About from './About';
import ProtectedLayout from './Protected';
import Login from './Login';
import { Provider } from "react-redux";
import store from './Redux/Store';

    const router = createBrowserRouter([
        { path: '/', element: <Login /> },
        { path: '', element: <ProtectedLayout />, children: [
            { path: '/home', element: <Home /> },
            { path: '/about', element: <About /> },
        ]},
    ])

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
        
    
)
