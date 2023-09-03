import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn
} from './HeroElements';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>Best Restaurant On Campus</HeroH1>
          <HeroP>Tafere wonsa</HeroP>
          <Link to='/Menu'><HeroBtn>Place Order</HeroBtn></Link>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
