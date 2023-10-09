import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QuestionComponent from './components/QuestionComponent';
import ResultScreen from './components/ResultScreen';
import ResultScreen2 from './components/ResultScreen2';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<QuestionComponent />} />
          <Route path="/result/:hash" element={<ResultScreen2 />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </Router>
    );
  }
}

export default App;
