import { Route, Routes } from "react-router-dom"
import PageNotFound from "../pages/404"
import Home from "../pages/Home"
import StudentsList from "../pages/StudentsList"
import TeachersList from "../pages/TeachersList"
import StudentView from "../pages/StudentView"
import TeacherView from "../pages/TeacherView"

function PageRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<PageNotFound />} />
      <Route path="/students" element={<StudentsList />} />
      <Route path="/students/:studentID" element={<StudentView />} />
      <Route path="/teachers" element={<TeachersList />} />
      <Route path="/teachers/:teacherID" element={<TeacherView />} />
    </Routes>
  )
}

export default PageRouter