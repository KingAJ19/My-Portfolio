import React from 'react';
import IMG1 from '../../assets/yt.jpg';
import IMG2 from '../../assets/anime.jpg';
import IMG3 from '../../assets/todo.jpg';
import IMG4 from '../../assets/cart.png';
import IMG5 from '../../assets/team.jpg';
import IMG6 from '../../assets/typing.jpg';
import IMG7 from '../../assets/quiz.png';
import IMG8 from '../../assets/number.png';
import IMG9 from '../../assets/grocery.jpg';
import IMG10 from '../../assets/lottery.jpeg';
import IMG11 from '../../assets/photography.jpg';
import IMG12 from '../../assets/unsplash.jpeg';
import IMG13 from '../../assets/fives.png';
import IMG14 from '../../assets/animehaven.jpg';
import IMG15 from '../../assets/translator.jpg';
import IMG16 from '../../assets/camera.jpg';
import IMG17 from '../../assets/card.jpg';
import IMG18 from '../../assets/quiz.jpg';
import IMG19 from '../../assets/github.png';
import IMG20 from '../../assets/tic-tac-toe.jpg';
import IMG21 from '../../assets/jokes.jpeg';
import IMG22 from '../../assets/githubs.jpg';
import IMG23 from '../../assets/exchange-rate.jpg';
// import IMG24 from '../../assets/wyr.png';
import IMG25 from '../../assets/clock.jpg';
import IMG26 from '../../assets/rps.jpg';
import IMG27 from '../../assets/pokedex.jpg';
import IMG28 from '../../assets/weather.png';
import IMG29 from '../../assets/removebg.jpg';
import IMG30 from '../../assets/lowkey.jpg';
// import IMG31 from '../../assets/flags.png';
import IMG32 from '../../assets/music.jpg';
import IMG33 from '../../assets/characters.png';


import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'YouTube UI Clone',
      img: IMG1,
      description:
        'A YouTube UI clone',
      technologies: 'HTML | CSS | Javascript',
      link: 'https://aneles-youtube-clone.netlify.app/',
      github: 'https://github.com/KingAJ19/YouTube-Clone',
    },
    {
      id: 2,
      title: 'Shopping Cart',
      img: IMG4,
      description:
        'A simple shopping cart',
      technologies: 'HTML | CSS | Javascript',
      link: 'https://aneles-js-shopping-cart.netlify.app/',
      github: 'https://github.com/KingAJ19/JS-Shopping-Cart',
    },
    {
      id: 3,
      title: 'My Anime Website',
      img: IMG2,
      description: 'An anime site that I made to talk about anime',
      technologies: 'HTML | CSS | JavaScript ',
      link: 'https://aneles-anime-website.netlify.app/',
      github: 'https://github.com/KingAJ19/New-Anime-Site',
    },
    {
      id: 4,
      title: 'Todo List',
      img: IMG3,
      description:
        'A simple todo list',
      technologies: 'HTML | CSS | JavaScript',
      link: 'https://aneles-react-todo-list.netlify.app/',
      github: 'https://github.com/KingAJ19/React-Todo-List',
    },
    {
      id: 5,
      title: 'Fives Team Site',
      img: IMG5,
      description:
        'A site for my Fives team',
      technologies: 'JavaScript | CSS | HTML',
      link: 'https://lmk-fc.netlify.app/',
      github: 'https://github.com/KingAJ19/Fives-Site',
    },
    {
      id: 6,
      title: 'Anime Character Typing Game',
      img: IMG6,
      description:
        'A game where you have to type a name in',
      technologies: 'JavaScript | HTML | CSS',
      link: 'https://anime-typing-game.netlify.app/',
      github: 'https://github.com/KingAJ19/Anime-Character-Typing-Game',
    },
    {
      id: 7,
      title: 'Football Quiz',
      img: IMG7,
      description:
        'A football trivia quiz',
      technologies: 'JavaScript | HTML | CSS',
      link: 'https://football-trivia-game.netlify.app/',
      github: 'https://github.com/KingAJ19/Football-Quiz',
    },
    {
      id: 8,
      title: 'Guessing Game',
      img: IMG8,
      description:
        'A number guessing game',
      technologies: 'JavaScript | HTML | CSS',
      link: 'https://number-guessing-site.netlify.app/',
      github: 'https://github.com/KingAJ19/Number-Guessing-Game',
    },
    {
      id: 9,
      title: 'Grocery List',
      img: IMG9,
      description:
        'A grocery list application',
      technologies: 'JavaScript | HTML | CSS',
      link: 'https://grocery-list-application.netlify.app/',
      github: 'https://github.com/KingAJ19/Grocery-List-App',
    },
    {
      id: 10,
      title: 'Lottery Game',
      img: IMG10,
      description:
        'A simple lottery machine game',
      technologies: 'Python',
      link: 'https://www.pythonanywhere.com/user/Pythonguy/files/home/Pythonguy/lottery-game.py?edit',
      github: 'https://github.com/KingAJ19/Python-Lottery-Game',
    },
    {
      id: 11,
      title: 'My Photography Site',
      img: IMG11,
      description:
        'A Site With My Photography',
      technologies: 'HTML',
      link: 'https://aneles-photography.netlify.app/',
      github: 'https://github.com/KingAJ19/Photography-Site',
    },
    {
      id: 12,
      title: 'Unsplash API Search',
      img: IMG12,
      description:
        'A Unsplash Image Search Site',
      technologies: 'React',
      link: 'https://aneles-unsplash-api.netlify.app/',
      github: 'https://github.com/KingAJ19/Unsplash-Image-Search',
    },
    {
      id: 13,
      title: 'New LMK FC Site',
      img: IMG13,
      description:
        'New simple website for fives team LMK FC',
      technologies: 'HTML | CSS | Javascript',
      link: 'https://lmk-fc-site.netlify.app/',
      github: 'https://github.com/KingAJ19/LMK-FC',
    },
    {
      id: 14,
      title: 'AnimeHaven',
      img: IMG14,
      description:
        'An anime streaming site made with HTML, CSS and JS',
      technologies: 'HTML | CSS | Javascript',
      link: 'https://aneles-animehaven.netlify.app/',
      github: 'https://github.com/KingAJ19/AnimeHaven',
    },
    {
      id: 15,
      title: 'Simple Language Translator',
      img: IMG15,
      description:
        'A simple language translator app made with HTML, CSS and JS',
      technologies: 'HTML | CSS | Javascript',
      link: 'https://aneles-language-translator.netlify.app/',
      github: 'https://github.com/KingAJ19/Language-Translator-',
    },
    {
      id: 16,
      title: 'New Photography Site',
      img: IMG16,
      description:
        'A new site to showcase my photography made with HTML, CSS & Javascript',
      technologies: 'HTML | CSS | Javascript',
      link: 'https://anele-photography.netlify.app/',
      github: 'https://github.com/KingAJ19/New-Photography-Site',
    },
    {
      id: 17,
      title: 'Card Memory Game',
      img: IMG17,
      description:
        'A card memory game made with HTML, CSS & Javascript',
      technologies: 'HTML | CSS | Javascript',
      link: 'https://aneles-memory-game.netlify.app/',
      github: 'https://github.com/KingAJ19/Card-Memory-Game',
    },
    {
      id: 18,
      title: 'Ultimate Quizzes',
      img: IMG17,
      description:
        'A site with a bunch of different quizzes made with HTML, CSS & JS',
      technologies: 'HTML | CSS | Javascript',
      link: 'https://aneles-ultimate-quiz.netlify.app/',
      github: 'https://github.com/KingAJ19/Ultimate-Quiz',
    },
    {
      id: 19,
      title: 'GitHub Profile Finder',
      img: IMG19,
      description:
        'A simple GitHub profile finder made with HTML, CSS & Javascript',
      technologies: 'HTML | CSS | Javascript',
      link: 'https://aneles-simple-github-finder.netlify.app/',
      github: 'https://github.com/KingAJ19/GitHub-Profile-Finder',
    },
    {
      id: 20,
      title: 'Tic-Tac-Toe',
      img: IMG20,
      description:
        'A simple Tic Tac Toe game made with HTML, CSS & Javascript',
      technologies: 'HTML | CSS | Javascript',
      link: 'https://aneles-tic-tac-toe-game.netlify.app/',
      github: 'https://github.com/KingAJ19/Tic-Tac-Toe',
    },
    {
      id: 21,
      title: 'Random Joke Generator',
      img: IMG21,
      description:
        'A random joke generator made with HTML, CSS & Javascript',
      technologies: 'HTML | CSS | Javascript',
      link: 'https://aneles-random-joke-generator.netlify.app/',
      github: 'https://github.com/KingAJ19/Random-Joke-Generator',
    },
    {
      id: 22,
      title: 'GitHub Profile Finder 2',
      img: IMG22,
      description:
        'Another simple GitHub profile finder made with HTML, CSS & Javascript',
      technologies: 'HTML | CSS | Javascript',
      link: 'https://another-github-profile-finder.netlify.app/',
      github: 'https://github.com/KingAJ19/GitHub-Profile-Finder-2',
    },
    {
      id: 23,
      title: 'Exchange Rate Calculator',
      img: IMG23,
      description:
        'A simple exchange rate calculator made with HTML, CSS & Javascript',
      technologies: 'HTML | CSS | Javascript',
      link: 'https://aneles-exchange-rate-calculator.netlify.app/',
      github: 'https://github.com/KingAJ19/Exchange-Rate-Calculator',
    },
    // {
    //   id: 24,
    //   title: 'Would You Rather Game',
    //   img: IMG24,
    //   description:
    //     'A simple Would You Rather game made with HTML, CSS & Javascript',
    //   technologies: 'HTML | CSS | Javascript',
    //   link: 'https://aneles-would-you-rather-game.netlify.app/',
    //   github: 'https://github.com/KingAJ19/Would-You-Rather-Game',
    // },
    {
      id: 25,
      title: 'Simple Digital Clock',
      img: IMG25,
      description:
        'A simple real-time digital clock made with HTML, CSS & Javascript',
      technologies: 'HTML | CSS | Javascript',
      link: 'https://aneles-simple-digital-clock.netlify.app/',
      github: 'https://github.com/KingAJ19/Simple-Digital-Clock',
    },
    {
      id: 26,
      title: 'Rock Paper Scissors Game',
      img: IMG26,
      description:
        'A simple Rock Paper Scissors game made with HTML, CSS & Javascript',
      technologies: 'HTML | CSS | Javascript',
      link: 'https://aneles-rock-paper-scissors-game.netlify.app/',
      github: 'https://github.com/KingAJ19/Rock-Paper-Scissors',
    },
    {
      id: 27,
      title: 'Pokedex',
      img: IMG27,
      description:
        'A pokedex website made with HTML, CSS & Javascript',
      technologies: 'HTML | CSS | Javascript',
      link: 'https://aneles-pokedex.netlify.app/',
      github: 'https://github.com/KingAJ19/Pokedex',
    },
    {
      id: 28,
      title: 'Simple Weather App',
      img: IMG28,
      description:
        'A simple weather app made with HTML, CSS & Javascript',
      technologies: 'HTML | CSS | Javascript',
      link: 'https://aneles-weather-app.netlify.app/',
      github: 'https://github.com/KingAJ19/Weather-App',
    },
    {
      id: 29,
      title: 'Simple Background Remover',
      img: IMG29,
      description:
        'A simple background remover using HTML, CSS & Javascript',
      technologies: 'HTML | CSS | Javascript',
      link: 'https://aneles-background-remover.netlify.app/',
      github: 'https://github.com/KingAJ19/Remove-Background',
    },
    {
      id: 30,
      title: 'Lowkey Music',
      img: IMG30,
      description:
        'A simple site for my music made with HTML, CSS & Javascript',
      technologies: 'HTML | CSS | Javascript',
      link: 'https://lowkey-music.netlify.app/',
      github: 'https://github.com/KingAJ19/Lowkey-Music-Site',
    },
    // {
    //   id: 31,
    //   title: 'Guess The Flag Game',
    //   img: IMG31,
    //   description:
    //     'A simple flag guessing game made with HTML, CSS & Javascript',
    //   technologies: 'HTML | CSS | Javascript',
    //   link: 'https://aneles-flag-guessing-game.netlify.app/',
    //   github: 'https://github.com/KingAJ19/Guess-The-Flag-Game',
    // },
    {
      id: 32,
      title: 'Simple Music Player',
      img: IMG32,
      description:
        'A simple music player made with HTML, CSS & Javascript',
      technologies: 'HTML | CSS | Javascript',
      link: 'https://aneles-music-player.netlify.app/',
      github: 'https://github.com/KingAJ19/Simple-Music-Player',
    },
    {
      id: 33,
      title: 'Character Search Filter',
      img: IMG33,
      description:
        'A character search filter made with HTML, CSS & Javascript',
      technologies: 'HTML | CSS | Javascript',
      link: 'https://aneles-character-search.netlify.app/',
      github: 'https://github.com/KingAJ19/Character-Search-Filter',
    },
    // {
    //   id: 11,
    //   title: 'Grocery List',
    //   img: IMG11,
    //   description:
    //     'A grocery list application',
    //   technologies: 'JavaScript | HTML | CSS',
    //   link: 'https://grocery-list-application.netlify.app/',
    //   github: 'https://github.com/KingAJ19/Grocery-List-App',
    // },
  ];

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
