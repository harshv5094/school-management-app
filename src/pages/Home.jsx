import { Box } from "@chakra-ui/react"
import Main from "../components/body"

function Home() {
  return (
    <Main>
      <Box
        mt={`3rem`}
        fontWeight={`30px`}
        alignItems={`center`}
        textAlign={`center`}
        fontSize={`30px`}>
        Welcome to St. Paul School's Management Portal
      </Box>

    </Main>
  )
}

export default Home