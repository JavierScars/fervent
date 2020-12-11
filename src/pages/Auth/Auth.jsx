import { Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Background } from '../../components'
import { SignInComponent } from './components/SignIn'
import { SignUpComponent } from './components/SignUp'

const LoginPage = () => {
  console.log('here')
  // 1 SignIn, 0 SignUp
  const [mode, setMode] = useState(1)
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      minH="100vh"
      marginY="1rem"
    >
      <Background />
      {mode ? (
        <SignInComponent onChangeMode={() => setMode(0)} />
      ) : (
        <SignUpComponent onChangeMode={() => setMode(1)} />
      )}
    </Flex>
  )
}

export { LoginPage }
