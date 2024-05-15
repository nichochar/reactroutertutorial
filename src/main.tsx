import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Root, { action as rootAction, loader as rootLoader } from './routes/root'
import Contact, { loader as contactLoader } from './routes/contact'
import EditContact, { action as editAction } from './routes/edit'
import { action as deleteAction } from './routes/delete'
import Index from './routes/index'
import ErrorPage from './error-page'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        action: rootAction,
        loader: rootLoader,
        children: [
            {
                index: true,
                element: <Index />,
            },
            {
                path: '/contacts/:contactId',
                element: <Contact />,
                loader: contactLoader,
            },
            {
                path: '/contacts/:contactId/edit',
                element: <EditContact />,
                loader: contactLoader,
                action: editAction,
            },
            {
                path: '/contacts/:contactId/destroy',
                action: deleteAction,
                errorElement: <div>Oops! there was an error.</div>,
            },
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
