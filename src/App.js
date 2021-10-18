import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import Nav from './components/Nav'
import Home from './components/common/Home'
import Team from './components/team/Team'
import TeamCard from './components/team/TeamCard'
import Player from './components/player/Player'
import Upcoming from './components/game/Upcoming'
import About from './components/common/About'
import Footer from './components/common/Footer'
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  const [players, setPlayers] = useState([])
  const [page, setPage] = useState(1)

  useEffect(()=>{
    const getPlayer = async () => {
      const { data } = await axios(`https://www.balldontlie.io/api/v1/players?per_page=22&page=${page}`)
      setPlayers(data.data)
    }
    getPlayer()
  },[page])

  const updatePage = (e) => {
    if (e.target.value === 'next') {
      if (players.length === 22) { 
        setPage(page + 1)
      }
    } else if (page > 0) {
      setPage(page - 1)
    }
  }

  return (
    <BrowserRouter>
      <Nav />
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/teams">
        <Team />
      </Route>
      <Route exact path="/teamcard/:idTeam">
        <TeamCard/>
      </Route>
      <Route path="/players">
        <Player players={players} page={page} updatePage={updatePage}/>
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/upcoming">
        <Upcoming/>
      </Route>
      <Footer />
    </BrowserRouter>
    
  )
}

export default App
