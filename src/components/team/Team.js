import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Upcoming from '../game/Upcoming'



const Team = () => {

  const [teams, setTeams] = useState([])

  useEffect(()=> {
    const getData = async () => {
      const { data } = await axios('https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4387')
      setTeams(data.teams)
    }
    getData()
  },[]) 

  return (
    <div className="site-wrapper d-flex flex-column ">
      <div className="row">
        {teams && teams.map(team => {
          return (
            <div className="teams col-2  mb-4 d-flex justify-content-center" key={team.idTeam}>
              <Link to={`/teamcard/${team.idTeam}`}>
                <img className="team-images" src={team.strTeamBadge} alt="teamlogo" />
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Team