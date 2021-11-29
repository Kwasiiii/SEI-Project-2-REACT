# Ballers - GA Project Two

## Process Overview

A solo React App that uses two external APIs called SportDB and Balldontlie.

The app has been deployed with Netlify and is available [here](sei-baller.netlify.app).

## Brief: Build a React application that consumes any public API.

## Timeframe:
48 hours.

## Getting started

 1. Access the source code via the 'clone or download' button.
 2. In CLI, run yarn on the root level to install dependencies.
 3. Run yarn start to run program in your local environment.


## Technology used:

 - HTML5
 - CSS
 - SCSS
 - Bootstrap
 - JavaScript (ES6)
 - React.js
 - Yarn
 - Axios
 - Insomnia REST Client
 - react-router-dom
 
## Demonstation of the App Flow
![demo](https://media.giphy.com/media/Sn0KtHh6MF6l6OkQUW/giphy.gif)

## Approach Taken

### Wireframe
<img src="https://i.imgur.com/J8GHhzi.png" alt="home-page-ballers" width="400" /><img src="https://i.imgur.com/UuzLtFm.png" alt="team-card-page" width="400" /><img src="https://i.imgur.com/8AmSngg.png" alt="team-list-page" width="400" /><img src="https://i.imgur.com/sAYfMKp.png" alt="players-list-page" width="400" /><img src="https://i.imgur.com/s77PvAo.png" alt="upcoming-games-page" width="400" />

### Styling
I chose to use Bootstrap CSS Framework for some out-the-box styling to manage my time. I needed a font that would make my web application stand out so I used Graduated for the headers and titles but for the body or contents on the page I used the montserrat font family. The rest of the styling we wanted to keep quite minimal but fun to allow the user interface to be as clear and intuitive as possible.

### Development
#### TEAM LIST PAGE
![team-list-page](https://i.imgur.com/MuFz7fm.png)
To get the team to display and its official logo I had to test the query below in Insomnia to make sure it returned the information I wanted and this returned information contained the official team logo and all I had to do was loop through it and display.
Query: https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4387
![enter image description here](https://i.imgur.com/VHSmWKR.png)
#### TEAM-CARD PAGE
![teamcard-page](https://i.imgur.com/HhizpR4.png)
To get this information to display we had to use two different queries and they are;
 - https://www.thesportsdb.com/api/v1/json/40130162/lookupteam.php?id=123
 - https://www.thesportsdb.com/api/v1/json/40130162/lookup_all_players.php?id=123
![team-card-code](https://i.imgur.com/2Mr3JB8.png)
Due to trying to get specific information related to a specific team, I had to use useParam to pass the id of the team in the query as you can see above and with axios we are able to retrieve this data and save it into a state using useState. From the state we can loop through it and display the information we want to display on the page.

#### PLAYERS PAGE
![all-players-page](https://i.imgur.com/0QSov8n.png)
Using balldontlie api to get this data we had to use this following query, https://www.balldontlie.io/api/v1/players?per_page=22&page=${page} 
![enter image description here](https://i.imgur.com/xnjdzuI.png)
The query url allowed me to pass per_page and page into it as i was getting every single player in the NBA to display on one page which was a lot. This made me want to implement a paginator into the page therefore I set the limit of how many players to be displayed at a time and the current page we are on. The updatePage function below the useEffect is to update the page value so that it changes every time we click next or prev.

### Challenges
Building my first React app from scratch provided a fair amount of challenges. One of the problems as a first time React creator I was facing was information not displaying on first render but I was explained by my instructor about why it wasn't working on initial render and was fixed.

### Wins
Styling. I am not massively experienced when it comes to styling and being introduced to Bootstrap and Sass. I was able to incorporate them into my web application. Completing this project in a two day solo was impressive for me as I was only recently introduced to React. I learnt a lot during this development.

### Future Implementation

 1. Make it responsive
 2. Add a search field to players page
 3. Implement another feature to check players stats

### Key learnings

 - As this was my first React App, I learned a lot about conditional rendering, how state works and how to pass props using URLs.
 - I learned a lot about styling as i was using SASS and Bootstrap. Eg my navbar was created using bootstrap and used both css and sass to style the website.

