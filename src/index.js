import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import RellenadorAutomatico from './App';

console.log("React està funcionant!");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RellenadorAutomatico />
    </React.StrictMode>
);
