// import Home from "../componenet/home/home";
import {Route, Routes} from 'react-router-dom'
import { Home } from './Home';

function App() {
  return (

    <div className="App">
      <Routes>
          <Route path="/" element={<Home />} />
      </Routes>
    </div>

  );
}


export default App;
