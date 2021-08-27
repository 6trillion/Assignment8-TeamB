import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import App from './App';
import { TodosContextProvider } from 'utils/TodosContext';

ReactDOM.render(
  <React.StrictMode>
    <TodosContextProvider>
      <App />
    </TodosContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
