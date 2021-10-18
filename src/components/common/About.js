import axios from 'axios'
import React,{ useState, useEffect } from 'react'

const About = () => {

  const [nba,setNBA] = useState([])

  useEffect(()=>{
    const nbaInfo = async () => {
      const { data } = await axios('https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?s=basketball')
      setNBA(data.countrys[28]) 
    }
    nbaInfo()
  },[])

  return (
    <div className="wrapper">
      {nba &&
        <div className="about-nba d-flex flex-column align-items-center">
          <div className="logo">
            <img className="nbalogo" src={nba.strLogo} alt="nbalogo" /> 
          </div>
          <div className="description">
            <h3>Welcome to Baller</h3>
            <p>A project created during General Assembly&apos;s SEI by Kwasi. <br />
            Baller is a web app which uses two external API’s called SportsDB and Balldontlie. <br /> This website was created to display information about NBA teams which included the team description, founding year, stadium and players for that season.
            </p>
          </div>
          <div className="tech">
            <h3>Technologies Used</h3>
            <div className="bullet-list">
              <i className="devicon-html5-plain-wordmark colored"></i>
              <i className="devicon-css3-plain-wordmark colored"></i>
              <i className="devicon-sass-original colored"></i>
              <i className="devicon-bootstrap-plain-wordmark colored"></i>
              <i className="devicon-javascript-plain colored"></i>
              <i className="devicon-react-original-wordmark colored"></i>
            </div>
          </div>
          <div className="fanart3">
            <img src={nba.strFanart3} alt="fanart" />
          </div>
        </div>
      }
    </div>
  )
}

export default About