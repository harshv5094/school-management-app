import { Route, Routes } from "react-router-dom"
import StudentView from "../pages/StudentView"
import PageNotFound from "../pages/404"
import Home from "../pages/Home"
import TeacherView from "../pages/TeacherView"

function PageRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<PageNotFound />} />
      <Route path="/students" element={<StudentView />} />
      <Route path="/teachers" element={<TeacherView />} />
    </Routes>
  )
}

export default PageRouter