import React from 'react'
import { Flex, List, ListItem, ListIcon, Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { ArrowForwardIcon } from '@chakra-ui/icons'
const FooterComponent = () => {
  const aboutList = [
    [
      {
        title: 'About Me',
        link: '/about-me',
      },
      {
        title: 'Contact',
        link: '/contact',
      },
    ],
    [
      {
        title: 'About Fervent',
        link: '/about-fervent',
      },
      {
        title: 'Become A Parthner',
        link: '/partner',
      },
    ],
  ]

  return (
    <Flex
      direction="row"
      paddingY={4}
      justifyContent="center"
      alignItems="center"
      position="relative"
    >
      <Flex zIndex="1" width="50%" margin="auto" justifyContent="space-evenly">
        {aboutList.map((list, index) => (
          <Flex
            key={index}
            direction="column"
            marginright="2rem"
            margin="auto 2rem"
          >
            <List spacing={3}>
              {list.map((item, listIndex) => (
                <ListItem
                  display="flex"
                  flexDir="row"
                  justifySelf="center"
                  alignItems="center"
                  key={listIndex}
                >
                  <Link to={item.link}>
                    <Flex
                      fontSize="1.2rem"
                      color="white"
                      alignItems="center"
                      direction="row"
                    >
                      <ListIcon as={ArrowForwardIcon} color="primary.50" />
                      {item.title}
                    </Flex>
                  </Link>
                </ListItem>
              ))}
            </List>
          </Flex>
        ))}
      </Flex>
      <Box
        bgColor="primary.900"
        opacity="0.4"
        position="absolute"
        top="0"
        width="100vw"
        height="100%"
        zIndex="0"
      ></Box>
    </Flex>
  )
}

export { FooterComponent }
