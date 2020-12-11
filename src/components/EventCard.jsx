import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Box, Img } from '@chakra-ui/react'
import * as datefns from 'date-fns'

const EventCardComponent = ({ event, width, height }) => (
  <Flex
    direction="column"
    h={height || '20rem'}
    w={width || '20rem'}
    alignItems="center"
    margin="auto"
  >
    <Flex
      textAlign="center"
      lineHeight="initial"
      marginBottom="1rem"
      fontSize="1.5rem"
      color="white"
      textShadow="0px 5px 5px rgba(255,150,200,0.5)"
      fontWeight="bold"
      margin="0"
      minHeight="4rem"
      marginTop="1rem"
    >
      <Box marginTop="auto" marginBottom="0.5rem">
        {event.name}
      </Box>
    </Flex>
    <Box position="relative" height="100%">
      <Img src={event.image} height="100%" width="auto" />
      <Flex
        position="absolute"
        top="-0.256rem"
        borderTopRadius="0.256rem"
        left="0.5rem"
        bgColor="primary.500"
        fontWeight="bold"
        padding="1rem"
        textShadow={event.type ? null : '0px 0px 15px rgba(255,255,255,0.9)'}
        direction="column"
        alignItems="center"
        width="5rem"
        color={event.type ? 'primary.900' : 'white'}
      >
        <Box>{datefns.format(new Date(event.date), 'MMM').toUpperCase()}</Box>
        <Box fontSize="1.5rem">
          {datefns.format(new Date(event.date), 'dd')}
        </Box>
        <Box fontSize="1rem">{event.type ? 'FREE' : 'VIP'}</Box>
      </Flex>
    </Box>
  </Flex>
)
EventCardComponent.propTypes = {
  event: PropTypes.any.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
}

export { EventCardComponent }
