import {
  Flex,
  Heading,
  Box,
  Button,
  Input,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import React from 'react'
import DatePicker from 'react-datepicker'
import * as datefns from 'date-fns'
import * as Yup from 'yup'
import { useFormik } from 'formik'

const date18yo = datefns.subYears(new Date(), 18)

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
// const filterInputIconStyles = {
//   ...filterInputStyles,
//   paddingLeft: '2.5rem',
//   borderRadius: '0.4rem',
// }
// const inputIconStyles = {
//   w: '2.5rem',
//   h: '2.5rem',
// }

const SignUpComponent = ({ onChangeMode }) => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: (formData) => {
      console.log(formData)
    },
    validationSchema: Yup.object({
      name: Yup.string().required(),
      surname: Yup.string().required().url,
      avatar: Yup.string().required(),
      dob: Yup.string().required(),
      username: Yup.string().required(),
      password: Yup.string()
        .required()
        .equals([Yup.ref('password')]),
      repeatPassword: Yup.string()
        .required()
        .equals([Yup.ref('password')]),
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
        Ready to join the party?
      </Heading>

      <FormControl isInvalid={formik.errors.username}>
        <Input
          placeholder="Name"
          name="name"
          onChange={formik.handleChange}
          isInvalid={!!formik.errors.username}
          errorBorderColor="primary.500"
          {...filterInputStyles}
        />
        <FormErrorMessage justifyContent="center" marginTop="0">
          {formik.errors.username}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={formik.errors.username}>
        <Input
          placeholder="Surname"
          name="surname"
          onChange={formik.handleChange}
          isInvalid={!!formik.errors.username}
          errorBorderColor="primary.500"
          {...filterInputStyles}
        />
        <FormErrorMessage justifyContent="center" marginTop="0">
          {formik.errors.username}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={formik.errors.username}>
        <Input
          placeholder="Avatar link"
          name="avatar"
          onChange={formik.handleChange}
          isInvalid={!!formik.errors.username}
          errorBorderColor="primary.500"
          {...filterInputStyles}
        />
        <FormErrorMessage justifyContent="center" marginTop="0">
          {formik.errors.username}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={formik.errors.username} {...filterInputStyles}>
        <DatePicker
          width="15rem"
          maxDate={date18yo}
          className="input-group__datepicker"
          selected={date18yo}
          onChange={formik.handleChange}
          isInvalid={!!formik.errors.username}
        />
        <FormErrorMessage justifyContent="center" marginTop="0">
          {formik.errors.username}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={formik.errors.username}>
        <Input
          placeholder="Username"
          name="username"
          onChange={formik.handleChange}
          isInvalid={!!formik.errors.username}
          errorBorderColor="primary.500"
          {...filterInputStyles}
        />
        <FormErrorMessage justifyContent="center" marginTop="0">
          {formik.errors.username}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={formik.errors.username}>
        <Input
          placeholder="Password"
          name="password"
          onChange={formik.handleChange}
          isInvalid={!!formik.errors.username}
          errorBorderColor="primary.500"
          {...filterInputStyles}
        />
        <FormErrorMessage justifyContent="center" marginTop="0">
          {formik.errors.username}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={formik.errors.username}>
        <Input
          placeholder="Confirm Password"
          name="repeatPaswword"
          onChange={formik.handleChange}
          isInvalid={!!formik.errors.username}
          errorBorderColor="primary.500"
          {...filterInputStyles}
        />
        <FormErrorMessage justifyContent="center" marginTop="0">
          {formik.errors.username}
        </FormErrorMessage>
      </FormControl>

      <Button {...filterInputStyles}>Sign up!</Button>

      <Flex direction="column" marginTop="2rem">
        <Box>Already a Fervent member?</Box>
        <Box>
          Sign into the party{' '}
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

SignUpComponent.propTypes = {
  onChangeMode: PropTypes.func,
}
export { SignUpComponent }
