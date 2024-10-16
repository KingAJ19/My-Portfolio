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
import IMG34 from '../../assets/password.jpg';
import IMG35 from '../../assets/todo.png';
import IMG36 from '../../assets/calculator.jpg';
import IMG37 from '../../assets/main.jpg';
import IMG38 from '../../assets/wallpaper.jpg';
import IMG39 from '../../assets/password generator.jpg';
import IMG40 from '../../assets/javascript.jpg';
import IMG41 from '../../assets/basketball.jpg';
import IMG42 from '../../assets/paint.jpg';
import IMG43 from '../../assets/lorem.jpg';
import IMG44 from '../../assets/age.png';

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
      link: 'https://kingaj19.github.io/Language-Translator-/',
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
      link: 'https://kingaj19.github.io/Card-Memory-Game/',
      github: 'https://github.com/KingAJ19/Card-Memory-Game',
    },
    {
      id: 18,
      title: 'Ultimate Quizzes',
      img: IMG18,
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
      link: 'https://kingaj19.github.io/GitHub-Profile-Finder/',
      github: 'https://github.com/KingAJ19/GitHub-Profile-Finder',
    },
    {
      id: 20,
      title: 'Tic-Tac-Toe',
      img: IMG20,
      description:
        'A simple Tic Tac Toe game made with HTML, CSS & Javascript',
      technologies: 'HTML | CSS | Javascript',
      link: 'https://kingaj19.github.io/Tic-Tac-Toe/',
      github: 'https://github.com/KingAJ19/Tic-Tac-Toe',
    },
    {
      id: 21,
      title: 'Random Joke Generator',
      img: IMG21,
      description:
        'A random joke generator made with HTML, CSS & Javascript',
      technologies: 'HTML | CSS | Javascript',
      link: 'https://kingaj19.github.io/Random-Joke-Generator/',
      github: 'https://github.com/KingAJ19/Random-Joke-Generator',
    },
    {
      id: 22,
      title: 'GitHub Profile Finder 2',
      img: IMG22,
      description:
        'Another simple GitHub profile finder made with HTML, CSS & Javascript',
      technologies: 'HTML | CSS | Javascript',
      link: 'https://kingaj19.github.io/GitHub-Profile-Finder-2/',
      github: 'https://github.com/KingAJ19/GitHub-Profile-Finder-2',
    },
    {
      id: 23,
      title: 'Exchange Rate Calculator',
      img: IMG23,
      description:
        'A simple exchange rate calculator made with HTML, CSS & Javascript',
      technologies: 'HTML | CSS | Javascript',
      link: 'https://kingaj19.github.io/Exchange-Rate-Calculator/',
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
      link: 'https://kingaj19.github.io/Simple-Digital-Clock/',
      github: 'https://github.com/KingAJ19/Simple-Digital-Clock',
    },
    {
      id: 26,
      title: 'Rock Paper Scissors Game',
      img: IMG26,
      description:
        'A simple Rock Paper Scissors game made with HTML, CSS & Javascript',
      technologies: 'HTML | CSS | Javascript',
      link: 'https://kingaj19.github.io/Rock-Paper-Scissors/',
      github: 'https://github.com/KingAJ19/Rock-Paper-Scissors',
    },
    {
      id: 27,
      title: 'Pokedex',
      img: IMG27,
      description:
        'A pokedex website made with HTML, CSS & Javascript',
      technologies: 'HTML | CSS | Javascript',
      link: 'https://kingaj19.github.io/Pokedex/',
      github: 'https://github.com/KingAJ19/Pokedex',
    },
    {
      id: 28,
      title: 'Simple Weather App',
      img: IMG28,
      description:
        'A simple weather app made with HTML, CSS & Javascript',
      technologies: 'HTML | CSS | Javascript',
      link: 'https://kingaj19.github.io/Weather-App/',
      github: 'https://github.com/KingAJ19/Weather-App',
    },
    {
      id: 29,
      title: 'Simple Background Remover',
      img: IMG29,
      description:
        'A simple background remover using HTML, CSS & Javascript',
      technologies: 'HTML | CSS | Javascript',
      link: 'https://kingaj19.github.io/Remove-Background/',
      github: 'https://github.com/KingAJ19/Remove-Background',
    },
    {
      id: 30,
      title: 'Lowkey Music',
      img: IMG30,
      description:
        'A simple site for my music made with HTML, CSS & Javascript',
      technologies: 'HTML | CSS | Javascript',
      link: 'https://kingaj19.github.io/Lowkey-Music-Site/',
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
      link: 'https://kingaj19.github.io/Simple-Music-Player/',
      github: 'https://github.com/KingAJ19/Simple-Music-Player',
    },
    {
      id: 33,
      title: 'Character Search Filter',
      img: IMG33,
      description:
        'A character search filter made with HTML, CSS & Javascript',
      technologies: 'HTML | CSS | Javascript',
      link: 'https://kingaj19.github.io/Character-Search-Filter/',
      github: 'https://github.com/KingAJ19/Character-Search-Filter',
    },
    {
      id: 34,
      title: 'Password Generator',
      img: IMG34,
      description:
        'A simple password generator site made with HTML, CSS & Javascript',
      technologies: 'HTML | CSS | Javascript',
      link: 'https://kingaj19.github.io/Password-Generator-/',
      github: 'https://github.com/KingAJ19/Password-Generator-',
    },
    {
      id: 35,
      title: 'Simple Todo List',
      img: IMG35,
      description:
        'A simple todo list site made with HTML, CSS & Javascript',
      technologies: 'HTML | CSS | Javascript',
      link: 'https://kingaj19.github.io/Todo-List/',
      github: 'https://github.com/KingAJ19/Password-Generator-',
    },
    {
      id: 36,
      title: 'Simple Calculator',
      img: IMG36,
      description:
        'A simple calculator app made with HTML, CSS & Javascript',
      technologies: 'HTML | CSS | Javascript',
      link: 'https://kingaj19.github.io/Simple-Calculator/',
      github: 'https://github.com/KingAJ19/Simple-Calculator',
    },
    {
      id: 37,
      title: 'LMK FC',
      img: IMG37,
      description:
        'A new site for the LMK team made with HTML, CSS & Javascript',
      technologies: 'HTML | CSS | Javascript',
      link: 'https://lmk-football-club.netlify.app/',
      github: 'https://github.com/KingAJ19/LMK',
    },
     {
      id: 38,
      title: 'Wallpaper App',
      img: IMG38,
      description:
        'A site to keep my wallpapers made using HTML, CSS & Javascript',
      technologies: 'HTML | CSS | Javascript',
      link: 'https://aneles-wallpapers.netlify.app/',
      github: 'https://github.com/KingAJ19/Wallpaper-App',
    },
     {
      id: 39,
      title: 'Password Generator',
      img: IMG39,
      description:
        'A simple password generator app made with HTML, CSS & Javascript',
      technologies: 'HTML | CSS | Javascript',
      link: 'https://kingaj19.github.io/Password-Generator/',
      github: 'https://github.com/KingAJ19/Password-Generator',
    },
    {
      id: 40,
      title: '30 Days, 30 Javascript',
      img: IMG40,
      description:
        'Doing 30 Javascript projects from a free course',
      technologies: 'HTML | CSS | Javascript',
      link: 'https://30days30javascript.netlify.app/',
      github: 'https://github.com/KingAJ19/30-Days-30-Javascript-Projects',
    },
    {
      id: 41,
      title: 'Basketball Game',
      img: IMG41,
      description:
        'A simple basketball game made with HTML, CSS & Javascript',
      technologies: 'HTML | CSS | Javascript',
      link: 'https://aneles-basketball-game.netlify.app/',
      github: 'https://github.com/KingAJ19/Basketball-Game',
    },
    {
      id: 42,
      title: 'Painting App',
      img: IMG42,
      description:
        'A simple painting app made with HTML. CSS & Javascript',
      technologies: 'HTML | CSS | Javascript',
      link: 'https://aneles-painting-app.netlify.app/',
      github: 'https://github.com/KingAJ19/Painting-App',
    },
    {
      id: 43,
      title: 'Lorem Ipsum Generator',
      img: IMG43,
      description:
        'A simple lorem ipsum generator made with HTML, CSS & Javascript',
      technologies: 'HTML | CSS | Javascript',
      link: 'https://aneles-lorem-ipsum.netlify.app/',
      github: 'https://github.com/KingAJ19/Lorem-Ipsum-Generator',
    },
    {
      id: 44,
      title: 'Age Calculator',
      img: IMG44,
      description:
        'A simple age calculator made with HTML, CSS & Javascript',
      technologies: 'HTML | CSS | Javascript',
      link: 'https://aneles-age-calculator.netlify.app/',
      github: 'https://github.com/KingAJ19/Age-Calculator',
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
