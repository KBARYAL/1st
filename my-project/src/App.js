import ReactDOM from "react-dom/client";
import {BrowserRouter  as Router,  Routes,  Route} from "react-router-dom";
import './App.css';
import NAVBAR from "./navbar/navbar";
import First from "./body/firstbody"
import Main from "./body/main";
import Footer from "./footer/footer";
function App() {
  return (
    <div className="App flex flex-col">
     
     <Router>
        <NAVBAR/>
        <Routes>
          <Route path="/" element={<Main/>}/>
        </Routes>
      <Footer/>
      </Router>
      
      
    </div>
  );
}
export default App;
