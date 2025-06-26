import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import List from "./list/list";
import Main from "./main/main";
import Movies from "./moives/Movies";
import Chart from "./chart/Chart";

const router = createBrowserRouter([
    {
        path: ""
        ,
        element: <Main />,
    },
    {
        path: "/list",
        element: <List />,
    },
    {
        path: "/moives/:id",
        element: <Movies />,
    },
    {
        path: "/chart",
        element: <Chart />,
    },
]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
reportWebVitals();
