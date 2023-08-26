import React  from "react";
import styled from "styled-components";
import {Link, useNavigate} from 'react-router-dom';


export function CartButtons() {
	const navigate = useNavigate()
	const PageHandler = () => {
		navigate('/BuyPage')
	}
	return(
		<Buttons>
			<button className="deleteall">DELETE ALL</button>
			<button className="buttonrest" onClick={PageHandler}>BUY</button>
			<br/>        
			<Link to='/'><button className="buttonrest">COUNTINUE SHOPPING</button></Link>
		</Buttons>
	)
}

const Buttons = styled.div`
	// background-color: pink;
	text-align: center;
	button {
		margin: 20px;
	}
	.deleteall{
		background-color: tomato ;
		color: white;
    border: 3px solid;
    border-radius: 10px;
	}
	.buttonrest{
		background-color: grey ;
		color: white;
    border: 3px solid;
    border-radius: 10px;
	}
`
