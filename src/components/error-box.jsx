import { Alert, AlertDescription, AlertIcon, AlertTitle } from "@chakra-ui/react";


function Error({ message }) {
  return (
    <Alert
      marginTop={`4rem`}
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
        Error fetching data from from the server!
      </AlertTitle>
      <AlertDescription>
        {message}
      </AlertDescription>
    </Alert>
  )
}

export default Error