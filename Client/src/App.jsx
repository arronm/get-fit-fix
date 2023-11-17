import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginPage from './pages/LoginPage';

import WaterIntakeTracker from './WaterIntakeTracker'; // Add this import
import StepCounter from './StepCounter'; // Add this import
import WorkoutStatistics from './WorkoutStatistics'; // Add this import

import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <ApolloProvider client={client}>
    <Router>
      <div>
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/water">Water Intake</Link>
          <Link to="/steps">Step Counter</Link>
          <Link to="/statistics">Workout Statistics</Link>
        </nav>

        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/water" element={<WaterIntakeTracker />} />
          <Route path="/steps" element={<StepCounter />} />
          <Route path="/statistics" element={<WorkoutStatistics />} />
          <Route
            path="/"
            element={
              <>
                <div>
                  <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                  </a>
                  <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                  </a>
                </div>
                <h1>Vite + React</h1>
                <div className="card">
                  <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                  </button>
                  <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                  </p>
                </div>
                <p className="read-the-docs">
                  Click on the Vite and React logos to learn more
                </p>
              </>
            }
          />
        </Routes>
      </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
