import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from './AuthPage';
import ResultPage from './ResultPage';
const App = () => {
  const data = [
    ...Array(10).fill().map((_, i) => ({ id: i + 1, status: 'Приват' })),
    ...Array(10).fill().map((_, i) => ({ id: i + 11, status: 'Публик' })),
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
