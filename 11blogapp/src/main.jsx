import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store.js'

import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import AuthLayout from './components/AuthLayout.jsx'
import SignUp from './pages/SignUp.jsx'
import AllPosts from './pages/AllPosts.jsx'
import AddPost from './pages/AddPost.jsx'
import EditPost from './pages/EditPost.jsx'
impost Post from './pages/Post.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
    {
      path: '/',
      element: <Home/>
    },
    {
      path: "/login",
      element: (
        <AuthLayout authentication = {false}>
          <Login />
        </AuthLayout>
      )
    },
    {
      path: "/signup",
      element: (
        <AuthLayout authentication = {false}>
          <SignUp />
        </AuthLayout>
      )
    },
    {
      path: "/all-posts",
      element: (
        <AuthLayout authentication>
          <AllPosts/>
        </AuthLayout>
      )
    },
    {
      path: "/add-posts",
      element: (
        <AuthLayout authentication>
          <AddPost/>
        </AuthLayout>
      )
    },
    {
      path: "/edit-posts/:slug",
      element: (
        <AuthLayout authentication>
          <EditPost/>
        </AuthLayout>
      )
    },
    {
      path: "/posts/:slug",
      element: (
        <AuthLayout authentication>
          <Post/>
        </AuthLayout>
      )
    }
    ],
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
