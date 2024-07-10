import  Header from './Components.js/Header.js';
import  StoreItems from './Components.js/StoreItems.js';
import { BrowserRouter as Router, Switch, Route, Routes} from "react-router-dom";
import './App.css';



function App() {
  return (
      <div>
        <Header />
        <StoreItems />
      </div>
  );
}

export default App;
