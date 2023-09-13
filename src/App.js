import './App.css';
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Navbar from './Components/HomePage';
import Card from './Components/Card';

function App() {
  return (
    <div className="App">
         
       <Router>
       <Navbar/>
       <Routes>
         <Route path="/" element={<Card/>}/>
       </Routes>
       </Router>
      
    </div>
  );
}

export default App;
