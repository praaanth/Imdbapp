
import { useState } from 'react';
import axios from 'axios'
import './App.css';
import { Navbar, MovieList } from './components';

const API_BASE_URL="https://www.omdbapi.com";
//&apikey=38f6fcbb
function App() {
  const [movies,setMovies] = useState([]);
  const [inputValue,setInputValue]=useState("");
   const [ isLoading,setIsLoading ] = useState(false);
  const search=async (e) => {
     setIsLoading(true);
       if(e.code==="Enter") {
        // console.log("i pressed enter");
        const res=await axios.get(API_BASE_URL+ "/?s=" + inputValue + "&apikey=aa660442");
      //  console.log(res.data,"<-- this is the data from api");
        setIsLoading(false);
        setMovies(res.data.Search);
       }
  };

  

  return (
    <div className="App">
   <Navbar search={search} inputValue={inputValue} setInputValue={ setInputValue }/>
   <MovieList  isLoading={isLoading} Movielist={movies} />
   </div>
  );
}

export default App;