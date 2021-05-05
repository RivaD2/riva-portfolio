export const projectListData = [
  {
    "title": "Aqaba",
    "img_url": "/images/aqaba.png",
    "webm_url": "/images/aqaba(1).webm",
    "mp4_url": "https://s3-us-west-2.amazonaws.com/nazarov.artemexmachina.com/rivad2/aqaba.mp4",
    "github_url":"https://github.com/RivaD2/aqaba", 
    "deployed_url":"",
    "tools_used":"React, React-Spring, React Responsive Carousel, React Router DOM, OAuth 2.0 with Google APIs, Axios, Material-UI, CSS, and my API-server",
    "text_desc":"Aqaba by Miram Mirani is a fragrance site that carries a product I'm interested in: Aqaba perfumes. I decided to rebuild the site and give it a completely new, modern look while still keeping the Jordanian influence and appeal of the original site.",
    "demo_desc": "This ongoing project has helped to solidify my knowledge of Function components, Class-based components, component hierarchy, state management, and incorporating third party libraries. \n I want this site to feel more modern that the current Aqaba site, with clean navigation, design, and functionality. I've successfully been able to hit my MVP for this e-commerce site but continue to work on additional features. \nFuture goals of this project include: finishing OAuth login using Google Developers API, refactoring components to use Redux or Context API for state management, completing the checkout page to complete the e-commerce flow, and additional CSS styling.",
  },
  {
    "title": "Greener", 
    "img_url": "/images/greenerLogin.png",
    "webm_url": "/images/greenerLogin.webm",
    "mp4_url": "https://s3-us-west-2.amazonaws.com/nazarov.artemexmachina.com/rivad2/greenerLogin.mp4",
    "github_url":"https://github.com/RivaD2/GreenerFrontEnd",
    "tools_used":"React Native, Redux, Expo, Sign In With Google, Google App Auth, Axios",
    "text_desc":"A casual game app modeled after Tamagatchi designed to help people relax.\nThe app allows the user to perform actions on a plant to gain currency for upgrading and expanding their terrarium. Login is possible through form submission or OAuth.",
    "demo_desc":"Through this week-long project I implemented front-end to back-end OAuth via Google. \nI refactored duplicated logic into a standalone component for reuse, and created the action buttons that reward in-game currency to the user. \nWorking on this project solidified to me the importance of writing clean code and provided insight into coding patterns and how to manage feature tasks progress."
  },
  {
    "title": "Project Pinstrat", 
    "img_url": "images/pinstrat-jpg.jpg",
    "webm_url":"/images/pinstrat.webm", 
    "mp4_url": "https://s3-us-west-2.amazonaws.com/nazarov.artemexmachina.com/rivad2/pinstrat.mp4",
    "github_url":"https://github.com/RivaD2/project-pinstrat",
    "tools_used":"MongoDB, Mongoose, Bcrypt, Express.js, Node.js",
    "text_desc":"Project Pinstrat involved building a back-end server and database interface for Pinstrat (our client, an existing in-production application) as well as encrypting HTTP request data and filtering results.",
    "demo_desc": "For this project I took on the role of project manager and was responsible for communicating client needs to the rest of our team. I also set up the CRUD routes, the database and the MongoDB Schema and Model.\nPinstrat provides customized gameplay feedback to users from a game-generated hash. I worked with the client to implement encryption on the request to prevent access to game data that players haven't unlocked during gameplay. \n Originally, the client was using game data hardcoded in a JSON file and shipped with the app. It was our task to create a database so the game data could be dynamic and secure."
  },
  {
    "title": "Movie Night", 
    "img_url": "./images/home.png",
    "webm_url": "https://s3-us-west-2.amazonaws.com/nazarov.artemexmachina.com/rivad2/movie-night.webm",
    "mp4_url": "/images/movie-night.mp4",
    "github_url":"https://github.com/RivaD2/Movie-Night",
    "deployed_url":"https://riva-movie-night.herokuapp.com/",
    "tools_used":"PostgreSQL, EJS, Express.js, the Movie Database API (TMDb)",
    "text_desc":"Movie Night makes it easy for a user to pick a movie from a recommendation list based on ratings.The user can find top-rated movies and add them to a watchlist.",
    "demo_desc": "I took the lead role in the overall styling of this project and created the MovieDetail page, which presents movie information and the option to add it to the watchlist, and the Watchlist page, which enables a user to see and delete movies from the watchlist. \n Initially this project used Superagent to query the Movie Database API and fetch from the local PostgreSQL database. \n Recently I migrated the backend from PostgreSQL to my personal MongoDB API server by creating a new Mongoose Schema and Model to mirror the table from PostgreSQL. From there, I refactored the routes to use Axios instead of Superagent."
  }
]

