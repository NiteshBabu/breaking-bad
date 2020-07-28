import React, {useState} from 'react';
import Header from './components/ui/Header'
import Footer from './components/ui/Footer'
import Search from './components/ui/Search'
import CharacterCard from './components/character/CharacterCard'
import './App.css';


function App() {
  const [query, setQuery] = useState('')
  console.log(query)
  return (
    <div className="container">
      <Footer/>
      <Header/>
      <Search Query={(text) => setQuery(text)}/>
      <CharacterCard SendQuery={query}/>
    </div>
  );
}

export default App;
