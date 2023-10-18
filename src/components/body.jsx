import { Box } from "@chakra-ui/react";

function Main({ children }) {
  return (
    <Box paddingTop={`3rem`}>
      {children}
    </Box>
  )
}

export default Main