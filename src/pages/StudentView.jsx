import { Box } from "@chakra-ui/react"
import Main from "../components/body"

function StudentView() {
  return (
    <Main>
      <Box
        mt={`3rem`}
        fontWeight={`30px`}
        alignItems={`center`}
        textAlign={`center`}
        fontSize={`30px`}>
        This is the Student View
      </Box>
    </Main>
  )
}

export default StudentView