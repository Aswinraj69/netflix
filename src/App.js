import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';

import Row from './components/Row'
import request from './request'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
       <Row 
       isLargeRow={true}
       title="NETFLIX ORIGINALS" fetchurl={request.fetchNetflixOriginals}/>
       <Row title="TOP RATED MOVIES" fetchurl={request.fetchTopRated}/>
      <Row title="ACTION MOVIES" fetchurl={request.fetchActionMovies}/>   
      <Row title="ROMANCE MOVIES" fetchurl={request.fetchRomanceMovies}/>  
      <Row title="COMEDY MOVIES" fetchurl={request.fetchComedyMovies}/>    
      <Row title="HORROR MOVIES" fetchurl={request.fetchHorrorMovies}/>   
    </div>
  );
}

export default App;
    