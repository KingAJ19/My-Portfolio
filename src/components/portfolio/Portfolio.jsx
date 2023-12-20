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
