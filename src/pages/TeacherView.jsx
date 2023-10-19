import { Box, Container, TableContainer, Table, Thead, Tr, Td, Tbody, } from "@chakra-ui/react"
import { useEffect } from 'react';
import Main from "../components/body"
import { useDispatch, useSelector } from "react-redux"
import { fetchTeachersInformation } from "../features/teacherReducer";
import Loading from "../components/loading-spinner";
import Error from "../components/error-box";

function TeacherView() {
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
              <Table variant={`striped`} colorScheme="red">
                <Thead>
                  <Tr>
                    <Td>Name</Td>
                    <Td isNumeric>Age</Td>
                    <Td>Gender</Td>
                    <Td>Class Teacher Of</Td>
                    <Td>Subject Incharge</Td>
                    <Td isNumeric>Salary</Td>
                    <Td isNumeric>Phone Number</Td>
                    <Td>Address</Td>
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
                          <Td>{item.classTeacherOf}</Td>
                          <Td>{item.subjectIncharge.join(", ")}</Td>
                          <Td isNumeric>{item.salary}</Td>
                          <Td isNumeric>{item.phoneNumber}</Td>
                          <Td>{item.address}</Td>
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

export default TeacherView