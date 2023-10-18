import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const colors = {
  band: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac'
  },
}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true
}

const theme = extendTheme({ colors, config })

function ChakraUI({ children }) {
  return <ChakraProvider initialColorMode={theme.config.initialColorMode} theme={theme}>{children}</ChakraProvider>
}

export default ChakraUI
