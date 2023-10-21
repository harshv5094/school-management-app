import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, useDisclosure } from "@chakra-ui/react"
import { useRef } from "react"

function DeleteDialog({ deleteFunction, dialogTitle }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef()
  return (
    <>
      <Button variant={`ghost`} colorScheme="red" onClick={onOpen}>
        Delete
      </Button>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize={`lg`} fontWeight={`bold`}>
              {dialogTitle}
            </AlertDialogHeader>
            <AlertDialogBody>
              Are you sure? You can't undo this action afterward.
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={deleteFunction} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}

export default DeleteDialog