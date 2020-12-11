import React from 'react'
import { Img } from '@chakra-ui/react'

const Background = () => (
  <Img
    position="fixed"
    bottom="0"
    zIndex="-1"
    opacity="1"
    minW="100vw"
    src={`${process.env.PUBLIC_URL}/background.jpg`}
    alt="background"
    height="100vh"
  />
)

export { Background }
