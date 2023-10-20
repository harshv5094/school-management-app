import { Box, Button, Container, HStack, VStack } from "@chakra-ui/react"
import Main from "../components/body"
import { NavLink, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { ArrowBackIcon } from "@chakra-ui/icons"
import StudentModal from "../components/student-modal"
import Loading from "../components/loading-spinner"
import { useEffect } from "react"
import { fetchStudentsInformation } from "../features/studentReducer"
import Error from "../components/error-box"


function StudentView() {
  let dispatch = useDispatch()
  let { studentID } = useParams()
  let { students, status, error } = useSelector(state => state.students)
  const filteredData = students.find(x => x._id === studentID)

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchStudentsInformation())
    }
  }, [status, dispatch])

  return (
    <Main>
      <Box
        mt={`3.6rem`}
        display={`flex`}
        flexDir={`column`}
        justifyContent={`center`}
        alignItems={`center`}
      >
        {status === "loading" && <Loading />}
        {status === "success" && (
          <Box>

            <Container
              marginBottom={`2rem`}
              textAlign={`center`}
              fontSize={`30px`}
            >
              Student Details
            </Container>

            <VStack>
              <Box>
                <b style={{ fontSize: "20px" }}>Name:</b>{" "}
                <span style={{ fontSize: "18px" }}>
                  {filteredData.name}
                </span>
                <br />
                <b style={{ fontSize: "20px" }}>Age:</b>{" "}
                <span style={{ fontSize: "18px" }}>
                  {filteredData.age}
                </span>
                <br />
                <b style={{ fontSize: "20px" }}>Gender:</b>{" "}
                <span style={{ fontSize: "18px" }}>
                  {filteredData.gender}
                </span>
                <br />
                <b style={{ fontSize: "20px" }}>Standard:</b>{" "}
                <span style={{ fontSize: "18px" }}>
                  {filteredData.standard}
                </span>
                <br />
                <b style={{ fontSize: "20px" }}>Address:</b>{" "}
                <span style={{ fontSize: "18px" }}>
                  {filteredData.address}
                </span>
                <br />
                <b style={{ fontSize: "20px" }}>Emergency Number:</b>{" "}
                <span style={{ fontSize: "18px" }}>
                  {filteredData.emergencyNumber}
                </span>
                <br />
                <b style={{ fontSize: "20px" }}>Marks:</b>{" "}
                <span style={{ fontSize: "18px" }}>
                  {filteredData.marks}{"/100"}
                </span>
                <br />
                <b style={{ fontSize: "20px" }}>Attendance:</b>{" "}
                <span style={{ fontSize: "18px" }}>
                  {filteredData.attendance}{" %"}
                </span>
              </Box>
            </VStack>

            <HStack
              mt={`2rem`}
              ml={`2rem`}
            >
              <Button leftIcon={<ArrowBackIcon />} colorScheme="yellow" as={NavLink} to={"/students"}>
                Go Back
              </Button>
              <StudentModal />
            </HStack>

          </Box>
        )}
        {status === "error" && <Error message={error} />}
      </Box>
    </Main>
  )
}

export default StudentView