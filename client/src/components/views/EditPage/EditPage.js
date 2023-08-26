import React from 'react';
import Update from '../../Edit/Update';
import Head from '../../Main/MainHeader';
import styled from 'styled-components';

const EditPage = () => {
    return(
        <Div>
            <Head></Head>
            <Update></Update>
        </Div>
    )
}

export default EditPage;

const Div = styled.div `
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
`