import React, { useState, useEffect } from 'react'

const Player = ({ players, page, updatePage }) => {

  return (
    <><div className="players_container">
      <div className="playerinfo_title">
        <h2 className="allplayers">ALL PLAYERS</h2>
      </div>
      <div className="roster_content">
        <div className="playerstat_table">
          <table className="table table-hover">
            <thead className="thead-light bg-primary player-page-head">
              <tr>
                <th scope="col">Player</th>
                <th scope="col">Position</th>
                <th scope="col">Height</th>
                <th scope="col">weight</th>
                <th scope="col">Team</th>
              </tr>
            </thead>
            <tbody>
              {players.length > 0 && players.map(player => {
                // console.log('player', player)
                return (
                  <tr key={player.id}>
                    <td>{player.first_name} {player.last}</td>
                    <td>{player.position}</td>
                    <td>{player.height_feet}feet {player.height_inches} inches</td>
                    <td>{player.weight_pounds}</td>
                    <td>{player.team.full_name}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
      {page > 0 && <button onClick={updatePage} value="prev" className="btn btn-danger">Prev</button>}
      {players.length === 22 && <button onClick={updatePage} value="next" className="btn btn-primary">Next</button>}
    </div>
    </>
  )
}

export default Player