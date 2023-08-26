import React from 'react';
import ProductUpdate from '../../Edit/ProductEdit';
import Head from '../../Main/MainHeader';
import styled from 'styled-components';


const ProductEditPage = () => {
    return(
        <Div>
            <Head></Head>
            <ProductUpdate></ProductUpdate>
        </Div>
    )
}

export default ProductEditPage;

const Div = styled.div `
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
`