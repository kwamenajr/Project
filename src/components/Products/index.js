import React from 'react';
import { Link } from 'react-router-dom';
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductButton,
  ProductQuantity
} from './ProductsElements';
import { Element } from 'react-scroll';

export const cartItems = []

const Products = ({ heading, data }) => {

  const addToCart = (product) => {
    cartItems.push(product)
    product.quantity = product.quantity - 1
  }

  

  
  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        {data.map((product, index) => {
          return (
            <Element key={index} name="Product">
              <ProductCard >
                <ProductImg src={product.img} alt={product.alt} />
                <ProductInfo>
                  <ProductTitle>{product.name}</ProductTitle>
                  <ProductDesc>{product.desc}</ProductDesc>
                  <ProductPrice onClick={() => addToCart(product)} >{product.price}</ProductPrice>
                  <ProductQuantity>{product.quantity} plates left</ProductQuantity>
                  <Link to='/checkout'>
                    {/* <ProductButton onClick={() => addToCartItem(product.name, product.price)} >{product.button}</ProductButton> */}
                    <ProductButton onClick={() => addToCart(product)}>{product.button}</ProductButton>
                  </Link>
                </ProductInfo>
              </ProductCard>
            </Element>

          );
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Products;
