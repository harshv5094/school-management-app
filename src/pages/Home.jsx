import { Box, Button, Container } from "@chakra-ui/react"
import Main from "../components/body"
import { Link } from "react-router-dom"
import { IoLogoGithub } from 'react-icons/io5'
import { ArrowForwardIcon } from "@chakra-ui/icons"

function Home() {
  return (
    <Main>
      <Container
        marginTop={`10rem`}
        centerContent>
        <Box
          textAlign={`center`}
          fontSize={`30px`}
          fontWeight={`600`}
        >
          Welcome To St Paul School's Management System
        </Box>

        <Box
          textAlign={`center`}
          marginTop={`1rem`}
          marginBottom={`1rem`}
          fontSize={`18px`}
        >
          This project is my assignment of neog camp of using redux toolkit.
        </Box>

        <Button as={Link} leftIcon={<IoLogoGithub />} rightIcon={<ArrowForwardIcon />} to="https://github.com/harshv5094/school-management-app" colorScheme="green">
          View Source Code
        </Button>
      </Container>
    </Main>
  )
}

export default Home