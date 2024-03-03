
import Navbar from './Components/Navbar';
import BasicExample from './Components/nav2';
import Feedback from './Router/Feedback';
import Soap from './Router/Soap Product';
import Home from './Router/Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import FaceCream from './Router/FaceCream';
import Oil from "../src/Router/OilPrdct";


function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <BasicExample/>
      <Router>
         <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/SoapProduct' element={<Soap/>}/>
             <Route path='/CreamProduct' element={<FaceCream/>}/>
             <Route path='/feedback' element={<Feedback/>}/>
             <Route path='/OilProduct' element={<Oil/>}/>
         </Routes>
      </Router>

    </div>
  );
}

export default App;
