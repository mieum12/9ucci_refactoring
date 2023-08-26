import React from 'react';
import Head from '../../Main/MainHeader';
import styled from 'styled-components';
import ProductGet from '../../Admin/ProductGet';

const ProductGetPage = () => {
    return(
        <Div>
            <Head></Head>
            <ProductGet></ProductGet>
        </Div>
    )
}

export default ProductGetPage;

const Div = styled.div `
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
`