import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
} from './SidebarElements';
import { Link } from 'react-scroll'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to='/menu'>Menu</SidebarLink>
        <Link to=''>
          <SidebarLink to='/book'>Book A Seat</SidebarLink>
        </Link>
        <Link to="contact" smooth={true} offset={50} duration={500} delay={1000}>
        <SidebarLink to='/'>Contact Us</SidebarLink>
        </Link>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to='/menu'>Order Now</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
