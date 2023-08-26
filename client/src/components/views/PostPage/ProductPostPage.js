import React from 'react';
import ProductPost from '../../Admin/ProductPost';
import Head from '../../Main/MainHeader';
import styled from 'styled-components';

const ProductPostPage = () => {
    return(
        <Div>
            <Head></Head>
            <ProductPost></ProductPost>
        </Div>
    )
}

export default ProductPostPage;

const Div = styled.div `
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
`