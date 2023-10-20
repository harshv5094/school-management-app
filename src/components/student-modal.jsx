import { PlusSquareIcon } from "@chakra-ui/icons";
import { Box, Button, FormLabel, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Radio, RadioGroup, Select, Stack, useDisclosure, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { IoClose, IoPencilSharp, IoSave } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addStudentInformation, updateStudentInformation } from "../features/studentReducer";

function StudentModal() {
  const dispatch = useDispatch()
  let toast = useToast()

  let { studentID } = useParams()
  let { isOpen, onOpen, onClose } = useDisclosure()
  let { students } = useSelector(state => state.students)
  const student = students.find(x => x._id === studentID)

  const [name, setName] = useState(student ? student.name : "")
  const [age, setAge] = useState(student ? student.age : 0)
  const [gender, setGender] = useState(student ? student.gender : '')
  const [standard, setStandard] = useState(student ? student.standard : '')
  const [address, setAddress] = useState(student ? student.address : '')
  const [emergencyNumber, setEmergencyNumber] = useState(student ? student.emergencyNumber : 0)
  const [marks, setMarks] = useState(student ? student.marks : '')
  const [attendance, setAttendance] = useState(student ? student.attendance : '')


  const handleSubmit = () => {
    const studentData = {
      name: name,
      age: age,
      gender: gender,
      standard: standard,
      address: address,
      emergencyNumber: emergencyNumber,
      marks: marks,
      attendance: attendance,
    }

    if (student) {
      dispatch(updateStudentInformation({ id: student._id, studentData: studentData }))
      toast({
        title: 'Information Updated.',
        description: `${name} data is updated on the server.`,
        status: "success",
        duration: 3000,
      })
    }
    else {
      dispatch(addStudentInformation(studentData))
      toast({
        title: 'New Student Added Successfully.',
        description: `${name} data is added in the server.`,
        status: "success",
        duration: 3000,
      })
    }
  }

  return (
    <Box>
      {student ? (
        <Button rightIcon={< IoPencilSharp />} onClick={onOpen} colorScheme="gray" >
          Edit Details
        </Button>
      ) : (

        <Button variant={`ghost`} onClick={onOpen} leftIcon={<PlusSquareIcon />} colorScheme="green">
          Add New Student
        </Button>
      )}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>{student ? "Edit" : "Add New"} Student Information</ModalHeader>

          <ModalBody overflow={`auto`}>

            <FormLabel>Name</FormLabel>
            <Input
              mb={2}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <FormLabel>Age</FormLabel>
            <Input
              mb={2}
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />

            <FormLabel>Gender</FormLabel>
            <RadioGroup mb={2} onChange={setGender} value={gender}>
              <Stack direction={`row`}>
                <Radio mx={2} value="Male">Male</Radio>
                <Radio mx={2} value="Female">Female</Radio>
                <Radio mx={2} value="Transgender">Transgender</Radio>
              </Stack>
            </RadioGroup>

            <FormLabel>Standard</FormLabel>
            <Select mb={2} placeholder="Standard" size={`md`} onChange={e => setStandard(e.target.value)} value={standard}>
              <option value='1st'>1st</option>
              <option value='2nd'>2nd</option>
              <option value='3rd'>3rd</option>
              <option value='4th'>4th</option>
              <option value='5th'>5th</option>
              <option value='6th'>6th</option>
              <option value='7th'>7th</option>
              <option value='8th'>8th</option>
              <option value='9th'>9th</option>
              <option value='10th'>10th</option>
            </Select>

            <FormLabel>Address</FormLabel>
            <Input
              mb={2}
              type="text"
              value={address}
              onChange={e => setAddress(e.target.value)}
            />

            <FormLabel>Emergency Number</FormLabel>
            <Input
              mb={2}
              type="text"
              value={emergencyNumber}
              onChange={e => setEmergencyNumber(e.target.value)}
            />

            <FormLabel>Marks (Out of 100)</FormLabel>
            <Input
              mb={2}
              type="number"
              value={marks}
              onChange={(e) => setMarks(e.target.value)}
            />

            <FormLabel>Attendance (in %)</FormLabel>
            <Input
              mb={2}
              type="number"
              value={attendance}
              onChange={(e) => setAttendance(e.target.value)}
            />

          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="green"
              mx={1}
              onClick={handleSubmit}
              leftIcon={student ? <IoSave /> : <PlusSquareIcon />}>
              {student ? "Save" : "Add"}
            </Button>

            <Button
              colorScheme="red"
              variant={`ghost`}
              mx={1}
              onClick={onClose}
              leftIcon={<IoClose />}>
              Close
            </Button>
          </ModalFooter>

        </ModalContent>
      </Modal>
    </Box>
  )
}

export default StudentModal
