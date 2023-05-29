import './App.css';
import EmpDetails from './components/EmpDetails';
import EmpEdit from './components/EmpEdit';
import Empcreate from './components/Empcreate';
import Emplist from './components/Emplist';
import {BrowserRouter, Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>React JS CURD Opertations</h1>
      <BrowserRouter>
  <Routes>
    <Route path='/' element={<Emplist />}/>
    <Route path='/employee/create' element={<Empcreate />}/>
    <Route path='/employee/details/:empid' element={<EmpDetails />}/>
    <Route path='/employee/edit/:empid' element={<EmpEdit />}/>
  </Routes>
  </BrowserRouter>
    </div>
    
  );
  
}

export default App;
