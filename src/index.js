import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import st from './color.module.scss'
import './theme.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className={st.root} >
  <App />
   </div>
);

reportWebVitals();
