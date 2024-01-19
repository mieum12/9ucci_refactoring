
import React, {useState} from "react";
import {auth} from "../firebase";
import { Link, useNavigate} from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import {Input, Switcher, Title, Wrapper, Error,Form} from "../components/auth";
import GithubButton from "../components/githubBtn";

export default function Login(){
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const onChange = (e) =>{
    const {target:{name, value}} = e
    if (name === 'email'){
      setEmail(value)
    } else if (name === 'password'){
      setPassword(value)
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError('') // 새로고침하면 초기화
    console.log( email, password)

    if (isLoading || email === ''|| password === '') return

    try{
      setIsLoading(true)
      await signInWithEmailAndPassword(auth, email, password)

      navigate('/')
    } catch(e) {
      if(e instanceof FirebaseError){
        console.log(e.code, e.message)
        setError(e.message)
      }
    } finally {
      setIsLoading(false)
    }
  }

  return <Wrapper>
    <Title>LOGIN</Title>
    <Form onSubmit={onSubmit}>
      <Input onChange={onChange} name='email' value={email} placeholder='Email' type='email' required/>
      <Input onChange={onChange} name='password' value={password} placeholder='Password' type='password' required/>
      <Input type='submit' value={isLoading ? 'Loading...' : 'LOGIN'}/>
    </Form>
    {error !== '' ? <Error>{error}</Error> : null}
    <Switcher>
      회원이 아닌가요? <Link to='/join'>회원가입 &rarr;</Link>
    </Switcher>
    <GithubButton />
  </Wrapper>
}
