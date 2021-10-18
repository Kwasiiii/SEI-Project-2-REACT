import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'



const TeamCard = () => {

  const [selectedTeam, setSelectedTeam] = useState(null)
  const [ hasError, setHasError ] = useState(false)

  const [teamPlayers, setTeamPlayers] = useState([])
  const { idTeam } = useParams()

  useEffect(() => {
    const getTeam = async () => {
      try {
        const { data } = await axios(`https://www.thesportsdb.com/api/v1/json/40130162/lookupteam.php?id=${idTeam}`)
        setSelectedTeam(data.teams[0])
        console.log(data.teams)
      } catch (err) {
        setHasError(true)
      }
    }
    getTeam()
  },[idTeam])

  useEffect(() => {
    const getPlayer = async () => {
      try {
        const { data } = await axios(`https://www.thesportsdb.com/api/v1/json/40130162/lookup_all_players.php?id=${idTeam}`)
        setTeamPlayers(data.player)
        console.log(data.player)
      } catch (err) {
        setHasError(true)
      }
    }
    getPlayer()
  },[idTeam])


  return (
    <div className="teamcard-wrapper">
      {selectedTeam && 
        <div className="teamcard-page d-flex justify-content-center">
          <div className="team-image">
            <img src={selectedTeam.strTeamBadge} alt="" />
          </div><div className="teamDes d-flex flex-column align-item-center justify-content-center">
            <h2>{selectedTeam.strTeam}({selectedTeam.strTeamShort})</h2>
            <hr />
            <p className="description"><span className="desfbs">Description:</span> {selectedTeam.strDescriptionEN}</p>
            <hr />
            <p className="founded"><span className="desfbs">Founded:</span> {selectedTeam.intFormedYear} </p>
            <hr />
            <p className="stadium"><span className="desfbs">Stadium:</span> {selectedTeam.strStadium} </p>
          </div>
        </div>
      }
      <div className="playertable">
        <table className="table table-hover player-table">
          <thead className="thead-light bg-primary">
            <tr>
              <th scope="col">Player</th>
              <th scope="col">Position</th>
              <th scope="col">Height</th>
              <th scope="col">Weight</th>
            </tr>
          </thead>
          <tbody>
            {teamPlayers.length > 0 && teamPlayers.map(player => {
              return (
                <tr key={player.idPlayer}>
                  <td>{player.strPlayer}</td>
                  <td>{player.strPosition}</td>
                  <td>{player.strHeight}</td>
                  <td>{player.strWeight}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TeamCard