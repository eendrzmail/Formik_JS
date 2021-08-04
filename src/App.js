import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import FormPage from './components/FormPage/FormPage';
import FormPageYup from './components/FormPage/FormPageYup';
import FormPage2 from './components/FormPage/FormPage2';

function App() {
  return (
    <div className="App">
      {/* <FormPage></FormPage> */}
      {/* <FormPageYup></FormPageYup> */}
      <FormPage2></FormPage2>
    </div>
  );
}

export default App;
