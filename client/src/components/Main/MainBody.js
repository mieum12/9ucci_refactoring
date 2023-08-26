import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Body = () => {
    return (
        <Div>
        <Carousel fade>
        <Carousel.Item>
            <Link to='/outer'><Img src='https://images.pexels.com/photos/5007234/pexels-photo-5007234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></Img></Link>
        </Carousel.Item>
        <Carousel.Item>
            <Link to='/top'><Img src='https://images.pexels.com/photos/2356344/pexels-photo-2356344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></Img></Link>
        </Carousel.Item>
        <Carousel.Item>
            <Link to='/bottom'><Img src='https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></Img></Link>
        </Carousel.Item>
        </Carousel>
        </Div>
    )
}

export default Body; 

const Img = styled.img `
    width:1310px;
    height : 600px;
`
const Div = styled.div `
    display : flex;
    justify-content : center;
    width:1310px;
    height : 600px;
`