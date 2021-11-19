import react from 'React'
import './App.css';
import { Navbar } from './components';
import { useState } from 'React';

const API_BASE_URL="http://www.omdbapi.com";
//&apikey=38f6fcbb
function App() {
  const [movies,setMovies] = useState([]);
  const [inputValue,setInputValue]=useState("");
  const search=(e) => {
       console.log(e);
       console.log("i pressed the search button");
  }
  return (
    <div className="App">
    hi from react
   <Navbar search={search} inputValue={inputValue} setInputValue={ setInputValue }/>
    {/* movie list  */}
    {/* Navbar -->search bar */}
    </div>
  );
}

export default App;