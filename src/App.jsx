import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from './AuthPage';
import ResultPage from './ResultPage';
const App = () => {
  const data = [
    { userName: "Aziret", userAge: 19, status: "PUBLIC" },
    { userName: "Ali", userAge: 39, status: "PRIVATE" },
    { userName: "Bek", userAge: 25, status: "PRIVATE" },
    { userName: "Dana", userAge: 28, status: "PUBLIC" },
    { userName: "Erik", userAge: 34, status: "PRIVATE" },
    { userName: "Mira", userAge: 22, status: "PUBLIC" },
    { userName: "Sara", userAge: 30, status: "PRIVATE" },
    { userName: "Timur", userAge: 27, status: "PUBLIC" },
    { userName: "Aida", userAge: 24, status: "PRIVATE" },
    { userName: "Max", userAge: 35, status: "PUBLIC" },
    { userName: "Jana", userAge: 21, status: "PRIVATE" },
    { userName: "Omar", userAge: 40, status: "PUBLIC" },
    { userName: "Nina", userAge: 29, status: "PRIVATE" },
    { userName: "Leo", userAge: 18, status: "PUBLIC" },
    { userName: "Zara", userAge: 33, status: "PRIVATE" },
    { userName: "Liam", userAge: 20, status: "PUBLIC" },
    { userName: "Sofi", userAge: 26, status: "PRIVATE" },
    { userName: "Ivan", userAge: 36, status: "PUBLIC" },
    { userName: "Ella", userAge: 23, status: "PRIVATE" },
    { userName: "Noah", userAge: 32, status: "PUBLIC" },
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage data={data} />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  );
};
export default App;
