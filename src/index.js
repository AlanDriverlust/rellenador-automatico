import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import RellenadorAutomatico from './App';

// ✅ Afegeix aquesta línia per veure si React es carrega correctament
console.log("React està funcionant!");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RellenadorAutomatico />
    </React.StrictMode>
);
