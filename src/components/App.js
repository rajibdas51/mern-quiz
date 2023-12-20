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
  { path: '/', element: <div>Root Element</div> },
  { path: '/quiz', element: <div>Quiz Component</div> },
  { path: '/result', element: <div>Result Component</div> },
]);
function App() {
  return (
    <>
      <BrowserRouter router={route} />
    </>
  );
}

export default App;
