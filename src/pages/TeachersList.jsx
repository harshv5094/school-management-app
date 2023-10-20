import { Box, Container, TableContainer, Table, Thead, Tr, Td, Tbody, Button, } from "@chakra-ui/react"
import { useEffect } from 'react';
import Main from "../components/body"
import { useDispatch, useSelector } from "react-redux"
import { fetchTeachersInformation } from "../features/teacherReducer";
import Loading from "../components/loading-spinner";
import Error from "../components/error-box";
import { NavLink } from "react-router-dom";

function TeachersList() {
  const dispatch = useDispatch()
  const { teachers, status, error } = useSelector(state => state.teachers)

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTeachersInformation())
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
              Teacher's List
            </Container>

            <TableContainer marginTop={`2rem`} overflow={`auto`}>
              <Table variant={`striped`} colorScheme="teal">
                <Thead>
                  <Tr>
                    <Td>Name</Td>
                    <Td isNumeric>Age</Td>
                    <Td>Gender</Td>
                    <Td>Actions</Td>
                  </Tr>
                </Thead>
                <Tbody>
                  {
                    teachers.map((item, index) => {
                      return (
                        <Tr key={index}>
                          <Td>{item.name}</Td>
                          <Td isNumeric>{item.age}</Td>
                          <Td>{item.gender}</Td>
                          <Td>
                            <Button as={NavLink} mx={1} to={`/teachers/${item._id}`} variant={`ghost`} colorScheme="yellow" size={`sm`}>View</Button>
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
      {status === "error" &&
        <Error message={error} />
      }
    </Main>
  )
}

export default TeachersList