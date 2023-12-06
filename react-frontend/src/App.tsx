import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Articles from './components/Articles';
import CreateArticleForm from './components/CreateArticleForm';
import CreateUserForm from './components/CreateUserForm';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/new" element={<CreateArticleForm />} />
          <Route path="/users" element={<CreateUserForm />} />
          <Route path="/articles" element={<Articles />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
