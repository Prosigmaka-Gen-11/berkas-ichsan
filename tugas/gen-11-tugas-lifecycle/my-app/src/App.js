import './App.css';
import { Fragment, useState } from 'react';
import ClassComponent from './component/ClassComponent';
import FuncComponent from './component/FuncComponent';

function App() {

  const [isClass, setIsClass] = useState(true)
  const [isFunc, setIsFunc] = useState(true)
  return (
    <Fragment>
      <h3>Class component</h3>
      {isClass ? <ClassComponent/> : null}
      <button className="p-1 mt-5 px-5 bg-red-500 rounded-full text-white" onClick={() => setIsClass(false)}> hapus</button>
      <hr></hr>
      
      <h3>Function component</h3>
      {isFunc ? <FuncComponent/> : null}
      <button className="p-1 mt-5 px-5 bg-red-500 rounded-full text-white" onClick={() => setIsFunc(false)}> hapus</button>

    </Fragment>
  );
}

export default App;
