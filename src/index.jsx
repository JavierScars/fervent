import React from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { CookiesProvider } from 'react-cookie'
import App from './App'
import { reportWebVitals } from './reportWebVitals'

const breakpoints = ['360px', '768px', '1024px', '1440px']
;[breakpoints.sm, breakpoints.md, breakpoints.lg, breakpoints.xl] = breakpoints

const newTheme = extendTheme({
  styles: {
    global: () => ({
      button: {
        _focus: {
          boxShadow: '0 0 0 3px rgba(255, 255, 255, 0.4) !important',
        },
      },
      '.swiper-container': {
        height: '100%',
      },
      '.react-datepicker__input-container input': {
        display: 'block',
        width: '100%',
        bgColor: 'rgba(0,0,0,0.4)',
        color: 'white',
        padding: '0.5rem 1rem',
        textAlign: 'center',
        borderRadius: '0.5rem',
        fontWeight: 'bolder',
      },
      '.date-picker--disabled': {
        color: 'gray !important',
      },
      '.react-datepicker__day--selected, .react-datepicker__day--keyboard-selected, .react-datepicker__day--keyboard-selected:hover': {
        bgColor: '#9b27af !important',
      },
      '.react-datepicker::focus': {
        boxShadow: 'none',
      },
      '.react-datepicker-wrapper, .react-datepicker__input-container': {
        '&, & * ': {
          outline: 'none',
        },
      },
      '.react-datepicker__header': {
        bgColor: '#9b27af',
        '& *': {
          color: 'white',
        },
      },
      '.chakra-checkbox__control[aria-checked=true], .chakra-checkbox__control[data-checked]': {
        bgColor: '#9b27af !important',
        boxShadow: 'none !important',
        borderColor: 'inherit !important',
      },
      '.chakra-checkbox__control[data-focus]': {
        boxShadow: 'none !important',
        borderColor: 'inherit !important',
      },
    }),
  },
  breakpoints,
  colors: {
    primary: {
      default: '#c37dcf',
      // 50: '#e3adef',
      50: '#ffd5f5',
      100: '#c37dcf',
      200: '#b968c7',
      300: '#af52bf',
      400: '#a53db7',
      500: '#9b27af',
      600: '#8c239e',
      700: '#7c1f8c',
      800: '#6d1b7a',
      900: '#5d1769',
    },
  },
})

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider />
    <ChakraProvider theme={newTheme} resetCSS>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
reportWebVitals()
