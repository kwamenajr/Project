import React from 'react';
import { Link } from 'react-router-dom';
import {
  MenuContainer,
  MenuWrapper,
  MenuHeading,
  MenuTitle,
  MenuCard,
  MenuImg,
  MenuInfo,
  MenuDesc,
  MenuQuantity,
  MenuPrice,
  MenuButton
} from './ProductsElements';
import { Element } from 'react-scroll';

export const menuItems = []

const Menu = ({ heading, data }) => {

  const addToMenu = (menu) => {
    menuItems.push(menu)
    menu.quantity = menu.quantity - 1
  }

  return (
    <MenuContainer>
      <MenuHeading>{heading}</MenuHeading>
      <MenuWrapper>
        {data.map((menu, index) => {
          return (
            <Element name="Product">
              <MenuCard key={index}>
                <MenuImg src={menu.img} alt={menu.alt} />
                <MenuInfo>
                  <MenuTitle>{menu.name}</MenuTitle>
                  <MenuDesc>{menu.desc}</MenuDesc>
                  <MenuQuantity>{menu.quantity} plates left</MenuQuantity>
                  <MenuPrice>{menu.price}</MenuPrice>
                  <Link to='/Checkout'>
                    <MenuButton onClick={() => addToMenu(menu)}>{menu.button}</MenuButton>
                  </Link>
                </MenuInfo>
              </MenuCard>
            </Element>
          );
        })}
      </MenuWrapper>
    </MenuContainer>
  );
};

export default Menu;
