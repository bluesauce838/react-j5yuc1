import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Posts from './components/Posts';

export default function App() {
  return (
    <div className="container">
      <div className="row">
        <Posts />
      </div>
    </div>
  );
}
