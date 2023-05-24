import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: 'https://www.linkedin.com/in/asaph-franks-307a231a5/',
      name: 'Asaph Franks',
      test: 'Anele is one word..."Driven". If he really wants to do something he will push himself to do it. He is also a super fun person to be around.',
    },
    {
      id: 2,
      link: 'https://www.linkedin.com/in/jason-wandrag-004b1512b/',
      name: 'Jason Wandrag',
      test: "Anele is an extremely creative and motivated person, who enjoys creating well scripted Youtube content. Anele has shown to bring this level of quality and creativity to his work, and never fails to bring a team together. He would be great for any marketing or development role.",
    },
    {
      id: 3,
      link: 'https://www.linkedin.com/in/navan-basson-56b1a7223/',
      name: 'Navan Basson',
      test: 'Anele has many amazing qualities. He is creative, hard-working, passionate, works well under pressure and very reliable.',
    },
    {
      id: 4,
      link: 'https://www.linkedin.com/in/oslin-johnson-9400691ab/',
      name: 'Oslin Johnson',
      test: "Meeting Anele has added value to my life by listening to him and hearing what he have to say. He is such a creative person turning out quality content all the time, this makes him an even better developer because of his thought process.",
    },
    {
      id: 5,
      link: 'https://www.instagram.com/kayleensjanse/',
      name: 'Kayleen Janse',
      test: "Anele is a very kind person and is a pleasure to be around. He has proven through the course that he is a very dedicated person and is always improving his coding skills.",
    },
    {
      id: 6,
      link: 'https://www.instagram.com/elanabrahams/',
      name: 'Elan Abrahams',
      test: "Anele is a hard-worker and one of his greatest strengths is his creativity. He is able to find notable solutions and new ideas easily.",
    },
  ];
  return (
    <section id="testmonials">
      <h2>Testimonials</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <div className="client__avatar">
            <a href={test.link}>
              <BsLinkedin />
            </a>
          </div>
          <h5 className='client__name'>{test.name}</h5>
          <small className="client__review">{test.test}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials