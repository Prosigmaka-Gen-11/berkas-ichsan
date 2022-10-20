import logo from './logo.svg';
import './App.css';
import Card from './component/Card';
import { Fragment } from 'react';
import Navbar from './component/Navbar';

function App() {
  return (
    <Fragment>
      <Navbar/>
      <Card/>
    </Fragment>
  );
}

export default App;
