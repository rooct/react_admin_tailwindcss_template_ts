import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import Loading from "./components/Loading"
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
    <Suspense fallback={<Loading />}>
      <App />
      </Suspense>
    </Router>
  </React.StrictMode>
);
