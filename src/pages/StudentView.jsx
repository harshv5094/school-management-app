import { Box, Container, Table, TableContainer, Tbody, Td, Thead, Tr } from "@chakra-ui/react"
import Main from "../components/body"
import { useDispatch, useSelector } from "react-redux"
import { fetchStudentsInformation } from "../features/studentReducer"
import { useEffect } from "react"
import Loading from "../components/loading-spinner"
import Error from "../components/error-box"

function StudentView() {
  const dispatch = useDispatch()
  const { students, status, error } = useSelector(state => state.students)

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchStudentsInformation())
    }
  }, [status, dispatch])

  return (
    <Main>
      {status === "loading" && <Loading />}
      {status === "success" &&
        (
          <Box
            mt={`3.6rem`}
            display={`flex`}
            flexDir={`column`}
            alignItems={`center`}
          >
            <Container
              textAlign={`center`}
              fontSize={`30px`}
              fontWeight={`500`}
            >
              Students List
            </Container>

            <TableContainer marginTop={`2rem`} overflow={`auto`}>
              <Table variant={`striped`} colorScheme="red">
                <Thead>
                  <Tr>
                    <Td>Name</Td>
                    <Td>Gender</Td>
                    <Td>Standard</Td>
                    <Td>Emergency Number</Td>
                    <Td>Address</Td>
                    <Td>Marks (Out of 100)</Td>
                    <Td>Attendance (in %)</Td>
                  </Tr>
                </Thead>
                <Tbody>
                  {
                    students.map((item, index) => {
                      return (
                        <Tr key={index}>
                          <Td>{item.name}</Td>
                          <Td>{item.gender}</Td>
                          <Td>{item.standard}</Td>
                          <Td>{item.emergencyNumber}</Td>
                          <Td>{item.address}</Td>
                          <Td>{item.marks}</Td>
                          <Td>{item.attendance}</Td>
                        </Tr>
                      )
                    })
                  }
                </Tbody>
              </Table>

            </TableContainer>
          </Box>
        )}
      {status === "error" && <Error message={error} />}
    </Main>
  )
}

export default StudentView