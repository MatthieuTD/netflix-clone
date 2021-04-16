import './App.css';
import Row from './Row';
import React from 'react';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="app">
      
      <Nav />
      <Banner />
     <Row 
     title="NETFLIX ORIGINALS" 
     fetchUrl={requests.fetchNetflixOriginals} 
     isLargeRow={true}
     />
     <Row title="Populaires" fetchUrl={requests.fetchTrending} />
     <Row title="Les plus vues" fetchUrl={requests.fetchTopRated} />
     <Row 
     title="Film d'action" 
     fetchUrl={requests.fetchActionMovies}
     isLargeRow={true}
     />
     <Row title="Comédies" fetchUrl={requests.fetchComedyMovies} />
     <Row title="Film d'horreur" fetchUrl={requests.fetchHorrorMovies} />
     <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
     <Row title="Documentaire" fetchUrl={requests.fetchDocumentaries} />
     

    </div>
    
  );
}

export default App;
