import { Route, Routes } from 'react-router-dom';
import './App.css';
import MoviesList from './Components/MoviesList';
import MovieDetails from './Components/MovieDetails';

function App() {
  return (
    <div className="App">
      
        <div className='App'>
          <Routes>
            <Route path="/" element={<MoviesList />} />
            <Route path= "/movie/:id" element={<MovieDetails/>} />
          </Routes>
        </div>
      );
      <MoviesList/>
     
    </div>
  );
}



export default App;
