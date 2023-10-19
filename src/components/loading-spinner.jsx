import { Container, Spinner } from "@chakra-ui/react";

function Loading() {
  return (
    <Container
      display={`flex`}
      marginTop={`5rem`}
      justifyContent={`center`}
      alignContent={`center`}
      centerContent>
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
      />
    </Container>
  )
}

export default Loading