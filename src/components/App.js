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
import { CheckUserExist } from '../helper/helper';

// react routes
const router = createBrowserRouter([
  { path: '/', element: <Main /> },
  {
    path: '/quiz',
    element: (
      <CheckUserExist>
        <Quiz />{' '}
      </CheckUserExist>
    ),
  },
  {
    path: '/result',
    element: (
      <CheckUserExist>
        <Result />
      </CheckUserExist>
    ),
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
