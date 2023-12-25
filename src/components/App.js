import React from 'react';
import '../styles/App.css';
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
// --- Import components ---
import Main from './Main';
import Quiz from './Quiz';
import Result from './Result';

// react routes
const router = createBrowserRouter([
  { path: '/', element: <Main /> },
  { path: '/quiz', element: <Quiz /> },
  { path: '/result', element: <Result /> },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
