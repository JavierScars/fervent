import React from 'react'
import { Box, Flex, Button, Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const HeaderComponent = () => (
  <Flex position="relative">
    <Flex
      paddingX="4rem"
      zIndex="1"
      direction="row"
      paddingY={4}
      justifyContent="space-between"
      alignItems="center"
      flexGrow="1"
    >
      <Flex
        fontWeight="bold"
        fontStyle="italic"
        fontSize="2em"
        color="white"
        direction="column"
      >
        <Link to="/">
          <Heading fontSize="2rem">Fervent!</Heading>
          <Heading
            color="primary.50"
            as="h2"
            fontSize="0.9rem"
            paddingLeft="2rem"
            marginTop="-0.5rem"
          >
            What do we do tonight!?
          </Heading>
        </Link>
      </Flex>
      <Box>
        <Button
          colorScheme="white"
          color="white"
          margin="0 1rem"
          variant="ghost"
        >
          New Event
        </Button>
        <Link to="/signin">
          <Button
            color="white"
            colorScheme="white"
            variant="outline"
            marginLeft="1rem"
          >
            Log In
          </Button>
        </Link>
      </Box>
    </Flex>
    <Box
      zIndex="0"
      bgColor="primary.500"
      opacity="0"
      position="absolute"
      top="0"
      height="100%"
      width="100vw"
    ></Box>
  </Flex>
)

export { HeaderComponent }
