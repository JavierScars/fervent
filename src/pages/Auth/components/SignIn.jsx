import { React } from 'react'
import PropTypes from 'prop-types'
import {
  Flex,
  Heading,
  Box,
  Button,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { FaLock, FaUserAlt } from 'react-icons/fa'
import { useFormik } from 'formik'
import * as Yup from 'yup'
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
const filterInputIconStyles = {
  ...filterInputStyles,
  paddingLeft: '2.5rem',
  borderRadius: '0.4rem',
}
const inputIconStyles = {
  w: '2.5rem',
  h: '2.5rem',
}

const SignInComponent = ({ onChangeMode }) => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: (formData) => {
      console.log(formData)
    },
    validationSchema: Yup.object({
      username: Yup.string().required('We need your username dude!'),
      password: Yup.string().required('You forgot to write your password'),
    }),
  })
  return (
    <Flex
      bgColor="rgba(0,0,0,0.4)"
      padding="2rem"
      color="white"
      direction="column"
      textAlign="center"
      borderRadius="0.4rem"
    >
      <Link to="/">
        <Heading fontSize="2rem" fontStyle="italic">
          Fervent!
        </Heading>
      </Link>
      <Heading fontSize="1.5rem" marginTop="2rem">
        Sign in into party!
      </Heading>
      <form onSubmit={formik.handleSubmit}>
        <FormControl isInvalid={formik.errors.username}>
          <InputGroup {...filterInputIconStyles}>
            <InputLeftElement pointerEvents="none" {...inputIconStyles}>
              <Icon as={FaUserAlt} color="primary.50" />
            </InputLeftElement>
            <Input
              placeholder="Username"
              name="username"
              onChange={formik.handleChange}
              isInvalid={!!formik.errors.username}
              errorBorderColor="primary.500"
            />
          </InputGroup>
          <FormErrorMessage justifyContent="center" marginTop="0">
            {formik.errors.username}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={formik.errors.password}>
          <InputGroup {...filterInputIconStyles}>
            <InputLeftElement pointerEvents="none" {...inputIconStyles}>
              <Icon as={FaLock} color="primary.50" />
            </InputLeftElement>
            <Input
              placeholder="Password"
              type="password"
              name="password"
              onChange={formik.handleChange}
            />
          </InputGroup>
          <FormErrorMessage justifyContent="center" marginTop="0">
            {formik.errors.username
              ? 'And your password too!'
              : formik.errors.password}
          </FormErrorMessage>
        </FormControl>

        <Button {...filterInputStyles} type="submit">
          Sign In!
        </Button>
      </form>
      <Flex direction="column" marginTop="2rem">
        <Box>Don&apos;t have an account yet?</Box>
        <Box>
          Join us{' '}
          <Box
            as="span"
            color="primary.100"
            fontWeight="bolder"
            textDecoration="underline"
            cursor="pointer"
            onClick={() => onChangeMode()}
          >
            here!
          </Box>
        </Box>
      </Flex>
    </Flex>
  )
}

SignInComponent.propTypes = {
  onChangeMode: PropTypes.func,
}
export { SignInComponent }
