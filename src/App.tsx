import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QuestionComponent from './components/QuestionComponent';
import ResultScreen from './components/ResultScreen';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<QuestionComponent />} />
          <Route path="/result/:hash" element={<ResultScreen />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </Router>
    );
  }
}

export default App;
