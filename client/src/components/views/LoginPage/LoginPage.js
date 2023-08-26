import React from 'react';
import LoginForm from '../../Login/Login';
import Head from '../../Main/MainHeader';
import styled from 'styled-components'

function LoginPage () {
    return(
        <Wrap>
            <Head></Head>
            <LoginForm></LoginForm>
        </Wrap>
    )
}

export default LoginPage;

const Wrap = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
`