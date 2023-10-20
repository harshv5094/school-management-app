import { Box, Button, Container, HStack, Table, TableContainer, Tbody, Td, Thead, Tr, useToast } from "@chakra-ui/react"
import Main from "../components/body"
import { useDispatch, useSelector } from "react-redux"
import { deleteStudentInformation, fetchStudentsInformation } from "../features/studentReducer"
import { useEffect } from "react"
import Loading from "../components/loading-spinner"
import Error from "../components/error-box"
import { NavLink } from "react-router-dom"
import StudentModal from "../components/student-modal"

function StudentsList() {
  const toast = useToast()
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
              marginBottom={`8px`}
              textAlign={`center`}
              fontSize={`30px`}
              fontWeight={`500`}
            >
              Students List
            </Container>

            <HStack>
              <StudentModal />
            </HStack>

            <TableContainer marginTop={`2rem`} overflow={`auto`}>
              <Table variant={`striped`} colorScheme="teal">
                <Thead>
                  <Tr>
                    <Td>Name</Td>
                    <Td>Age</Td>
                    <Td>Standard</Td>
                    <Td>Actions</Td>
                  </Tr>
                </Thead>
                <Tbody>
                  {
                    students.map((item, index) => {
                      return (
                        <Tr key={index}>
                          <Td>{item.name}</Td>
                          <Td>{item.age}</Td>
                          <Td>{item.standard}</Td>
                          <Td>
                            <Button as={NavLink} mx={1} to={`/students/${item._id}`} variant={`ghost`} colorScheme="yellow" size={`sm`}>View</Button>
                            <Button
                              mx={1}
                              variant={`ghost`}
                              colorScheme={`red`}
                              onClick={() => {
                                dispatch(deleteStudentInformation(item._id))
                                toast({
                                  title: 'Student Information is Deleted.',
                                  description: `Information of Student '${item.name}' is successfully deleted from the database.`,
                                  duration: 3000,
                                  status: `success`,
                                })
                              }} >Delete</Button>
                          </Td>
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

export default StudentsList