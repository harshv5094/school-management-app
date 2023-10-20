import { Alert, AlertDescription, AlertIcon, AlertTitle, Container } from "@chakra-ui/react";


function Error({ message }) {
  return (
    <Container
      mt={`3rem`}
      size={`container.lg`}
      centerContent
    >
      <Alert
        status={`error`}
        variant={`subtle`}
        flexDir={`column`}
        alignItems={`center`}
        justifyContent={`center`}
        textAlign={`center`}
        height={`200px`}
      >
        <AlertIcon boxSize={`40px`} mr={0} />
        <AlertTitle mt={4} mb={1} fontSize={`lg`}>
          Error From The Server!
        </AlertTitle>
        <AlertDescription>
          {message}
        </AlertDescription>
      </Alert>
    </Container>
  )
}

export default Error