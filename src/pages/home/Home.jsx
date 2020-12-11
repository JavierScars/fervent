import {
  Box,
  Checkbox,
  Flex,
  Heading,
  Img,
  Input,
  Select,
} from '@chakra-ui/react'
import * as datefns from 'date-fns'
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import SwipperCore, { Autoplay } from 'swiper'
import DatePicker from 'react-datepicker'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useCookies } from 'react-cookie'
import {
  FooterComponent,
  HeaderComponent,
  EventCardComponent,
} from '../../components/index'
import 'swiper/swiper.scss'
import 'react-datepicker/dist/react-datepicker.css'

SwipperCore.use(Autoplay)

const HomePage = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['session'])

  const { data: events } = useQuery('repoData', () =>
    fetch('http://localhost:5000/events?_expand=user')
      .then((res) => res.json())
      .then(
        (allEvents) =>
          allEvents &&
          allEvents.length &&
          allEvents.filter(
            (event) => new Date(event.date).getTime() > new Date().getTime(),
          ),
      )
      .then((allEvents) => {
        setFilteredEvents(allEvents)
        return allEvents
      }),
  )

  const [nextEvents, setNextEvents] = useState([])
  useEffect(() => {
    if (events && events.length > 0) {
      setNextEvents(
        events.filter(
          (event) =>
            datefns.differenceInCalendarDays(new Date(), new Date(event.date)) <
            15,
        ),
      )
    }
  }, [events])

  const [eventFilters, setEventFilters] = useState({
    hostname: '',
    location: '',
    type: '',
    date: new Date(),
    useDate: false,
  })
  useEffect(() => {
    if (events) {
      let eventsCopy = [...events]
      eventsCopy = eventsCopy.filter((event) => {
        if (
          eventFilters.hostname &&
          !`${event.user.firstName} ${event.user.lastName} ${event.user.username}`
            .toUpperCase()
            .includes(eventFilters.hostname)
        ) {
          return false
        }
        if (
          eventFilters.location &&
          !event.location.toUpperCase().includes(eventFilters.location)
        ) {
          return false
        }
        if (
          !Number.isNaN(parseInt(eventFilters.type, 10)) &&
          parseInt(eventFilters.type, 10) !== parseInt(event.type, 10)
        ) {
          return false
        }
        if (
          eventFilters.useDate &&
          new Date(eventFilters.date) &&
          datefns.differenceInCalendarDays(
            new Date(eventFilters.date),
            new Date(event.date),
          ) !== 0
        ) {
          return false
        }
        return true
      })
      setFilteredEvents(eventsCopy)
    }
  }, [eventFilters, events])

  const [filteredEvents, setFilteredEvents] = useState([])

  const filterInputStyles = {
    marginTop: '1rem',
    marginX: '2rem',
    variant: 'unstyled',
    bgColor: 'rgba(0,0,0,0.4)',
    color: 'white',
    fontWeight: 'bolder',
    size: 'md',
    paddingY: '0.5rem',
    paddingX: '1rem',
    textAlign: 'center',
    width: '15rem',
  }

  return (
    <Flex direction="column" minH="100vh">
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
      <HeaderComponent></HeaderComponent>
      <Box flexGrow="1" margin="auto" height="100%" width="100%">
        <Heading
          marginTop="6rem"
          colorScheme="primary"
          textAlign="center"
          fontSize="2rem"
          color="white"
        >
          <Box
            color="primary.50"
            textTransform="uppercase"
            textShadow="0px 3px 6px rgba(255, 214, 245, 0.4)"
            fontStyle="italic"
          >
            Whenever
          </Box>
          <Box
            color="primary.50"
            textTransform="uppercase"
            textShadow="0px 5px 10px rgba(255, 200, 200, 0.5)"
            fontStyle="italic"
          >
            wherever
          </Box>
          <Box>There is always something to do!</Box>
        </Heading>
        <Heading
          as="h2"
          textAlign="center"
          color="primary.50"
          marginTop="4rem"
          marginBottom="1rem"
        >
          Next Events
        </Heading>
        <Box bgColor="rgba(50,50,50,0.3)" height="24rem">
          {events && (
            <Swiper
              spaceBetween={30}
              slidesPerView={3}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              speed={1000}
              loop
            >
              {nextEvents.map((event, index) => (
                <SwiperSlide key={index}>
                  <EventCardComponent
                    event={event}
                    width="18rem"
                    height="18rem"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </Box>
        <Box>
          <Heading
            as="h2"
            textAlign="center"
            color="primary.50"
            marginTop="4rem"
          >
            Other Events
          </Heading>
          <Flex direction="column" alignItems="center" marginTop="1rem">
            <Heading as="h3" fontSize="1.5rem" color="primary.50">
              Filter By
            </Heading>
            <Flex marginTop="0.5rem" wrap="wrap" justifyContent="center">
              <Input
                {...filterInputStyles}
                placeholder="HostName"
                value={eventFilters.hostname}
                onChange={(e) =>
                  setEventFilters((old) => ({
                    ...old,
                    hostname: e.target.value.toUpperCase(),
                  }))
                }
              />
              <Input
                placeholder="Location"
                {...filterInputStyles}
                value={eventFilters.location}
                onChange={(e) =>
                  setEventFilters((old) => ({
                    ...old,
                    location: e.target.value.toUpperCase(),
                  }))
                }
              />
              <Box marginTop="1rem" marginX="2rem">
                <Select
                  placeholder="Event Type"
                  width="15rem"
                  bgColor="rgba(0,0,0,0.4)"
                  color="white"
                  fontWeight="bolder"
                  value={eventFilters.type}
                  onChange={(e) =>
                    setEventFilters((old) => ({ ...old, type: e.target.value }))
                  }
                >
                  <option value={1}>Free</option>
                  <option value={0}>VIP</option>
                  <option value="">Both</option>
                </Select>
              </Box>
              <Box
                position="relative"
                marginTop="1rem"
                marginX="2rem"
                width="15rem"
              >
                <Checkbox
                  color="white"
                  fontWeight="bolder"
                  position="absolute"
                  zIndex="1"
                  top="-0.8rem"
                  left="0"
                  value={eventFilters.useDate}
                  onChange={(e) =>
                    setEventFilters((old) => ({
                      ...old,
                      useDate: e.target.checked,
                    }))
                  }
                >
                  Use date
                </Checkbox>
                <DatePicker
                  width="15rem"
                  selected={eventFilters.date}
                  disabled={!eventFilters.useDate}
                  className={
                    eventFilters.useDate
                      ? 'date-picker--active'
                      : 'date-picker--disabled'
                  }
                  onChange={(e) =>
                    setEventFilters((old) => ({ ...old, date: e }))
                  }
                  minDate={new Date()}
                />
              </Box>
            </Flex>
          </Flex>
          <Flex wrap="wrap" justifyContent="center" alignItems="center">
            {filteredEvents &&
              filteredEvents.map((event) => (
                <Box
                  key={event.id}
                  h="24rem"
                  w="24rem"
                  as="span"
                  marginTop="2rem"
                >
                  <EventCardComponent event={event} />
                </Box>
              ))}
          </Flex>
        </Box>
      </Box>
      <Box marginTop="4rem">
        <FooterComponent></FooterComponent>
      </Box>
    </Flex>
  )
}
export { HomePage }
