import React, { useState } from 'react';
import NextButton from './buttons/NextButton';
import PrevButton from './buttons/PrevButton';
import yvette from "../../public/images/yvette.jpg"
import izanyi from "../../public/images/izanyi.jpg"
import nyibuka from "../../public/images/nyibuka.jpg"
import StickyDestdiv from './StickyDestdiv';
import About from './About';
import Tours from './Tours';
// import Testimonials from './Testimonials';

const Home = () => {
  const backgrounds = [
    {
      image: yvette,
      content: {
        title: "The life is short The world is wide",
        description: "When preparing to travel, lay out all your clothes and all your money. Then take half the clothes and twice the money",
      },
    },
    {
      image: izanyi,
      content: {
        title: "Susan Heller",
        description: "When preparing to travel, lay out all your clothes and all your money. Then take half the clothes and twice the money",
      },
    },
    {
      image: nyibuka,
      content: {
        title: "Jawaharial Nehru",
        description: "We live in a wonderful world that is full of beauty, charm and adventure. There is no end to the adventures we can have if only we seek them with our eyes open.",
      },
    },
  ];

  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);

  const currentBackground = backgrounds[currentBackgroundIndex];

  const handleNextBackground = () => {
    const nextIndex = (currentBackgroundIndex + 1) % backgrounds.length;
    setCurrentBackgroundIndex(nextIndex);
  };

  const handlePrevBackground = () => {
    const prevIndex = (currentBackgroundIndex - 1 + backgrounds.length) % backgrounds.length;
    setCurrentBackgroundIndex(prevIndex);
  };

  return (
    <>
      <div className="home_cont" style={{ backgroundImage: `url(${currentBackground.image})` }}>
        <h1>{currentBackground.content.title}</h1>
        <p>{currentBackground.content.description}</p>
      </div>
      <NextButton onClick={handleNextBackground} />
      <PrevButton onClick={handlePrevBackground} />
      <StickyDestdiv/>
      <About/>
      <Tours/>
    </>
  );
};

export default Home;
