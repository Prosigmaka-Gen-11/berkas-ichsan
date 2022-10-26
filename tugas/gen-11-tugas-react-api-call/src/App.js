import './App.css';
import Async from './components/Async';
import ThenCatch from './components/ThenCatch';

function App() {
  return (
    <div className='flex space-x-10'>
      <div>
        <h1 className='text-center'>Axios ThenCatch</h1>
        <ThenCatch/>
      </div>
      <div >
        <h1 className='text-center'>Asynchronous</h1>
        <Async/>
      </div>
      
    </div>
  );
}

export default App;
