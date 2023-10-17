import { useEffect } from "react"
import Header from "./components/Header"
import { fetchStudentsInformation } from "./features/studentReducer"
import { useDispatch, useSelector } from "react-redux"

function App() {
  const dispatch = useDispatch()
  const { students, status, error } = useSelector(state => state.students)
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchStudentsInformation())
    }
  }, [status, dispatch])
  return (
    <div>
      <Header />
    </div>
  )
}

export default App
