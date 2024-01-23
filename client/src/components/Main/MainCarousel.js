import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function MainCarousel () {
  return (
    <CarouselContainer>
      <Carousel fade>
        <Carousel.Item>
          <Link to="/shop">
            <Img src="http://img.marieclairekorea.com/2019/03/mck_5c7dd9e2df601-562x708.jpg"></Img>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/shop">
            <Img src="http://img.marieclairekorea.com/2019/03/mck_5c7ddae02807c-562x708.jpg"></Img>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/shop">
            <Img src="http://img.marieclairekorea.com/2019/03/mck_5c7ddbb8b8d24-562x708.jpg"></Img>
          </Link>
        </Carousel.Item>
      </Carousel>
    </CarouselContainer>
  );
};

const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 100px;
`;

const Img = styled.img`
  height: 400px;
`;
