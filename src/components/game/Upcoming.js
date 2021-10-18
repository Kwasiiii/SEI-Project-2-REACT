import React,{ useState, useEffect } from 'react'
import axios from 'axios'

const Upcoming = () => {

  const [upcomingGames, setUpcomingGames] = useState([])

  useEffect(()=>{
    const getUpcoming = async () => {
      const { data } = await axios('https://www.thesportsdb.com/api/v1/json/40130162/eventsnextleague.php?id=4387')
      setUpcomingGames(data.events)
      console.log(data.events)
    }
    getUpcoming()
  },[])

  useEffect(()=> console.log('Upcoming events,',upcomingGames ), [upcomingGames])

  return (
    <><div className="players_container">
      <div className="upcoming">
        <div className="playerinfo_title">
          <h2>UP Coming Game</h2>
          <h6>lists only 15 upcoming games</h6>
        </div>
        <div className="roster_content">
          <div className="playerstat_table">
            <table className="table table-hover">
              <thead className="thead-light upcoming-th bg-primary">
                <tr>
                  <th scope="col">Home</th>
                  <th scope="col">Away</th>
                  <th scope="col">Date</th>
                  <th scope="col">Time</th>
                </tr>
              </thead>
              <tbody>
                { upcomingGames && upcomingGames.map(game => {
                  return (
                    <tr key={game.idEvent}>
                      <td>{game.strHomeTeam}</td>
                      <td>{game.strAwayTeam}</td>
                      <td>{game.dateEvent}</td>
                      <td>{game.strTime}</td>
                    </tr>
                  ) 
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
    </div>
    </>
  )
}

export default Upcoming