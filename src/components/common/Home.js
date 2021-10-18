import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home-container">
      <div className="nba-teams d-flex flex-column align-items-center justify-content-center">
        <Link className="btn btn-primary" to="/teams">
          <h1>NBA TEAMS</h1>
        </Link>
      </div>
      <div className="bottom-part d-flex justify-content-center">
        <div className="nba-players d-flex flex-column align-items-center justify-content-center">
          <Link className="btn btn-primary" to="/players">
            <h1>PLAYERS</h1>
          </Link>
        </div>
        <div className="stats d-flex flex-column align-items-center justify-content-center">
          <Link className="btn btn-danger" to="/upcoming">
            <h1>GAMES</h1>
          </Link>
        </div>
      </div>
    </div>
  )

}

export default Home