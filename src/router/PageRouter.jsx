import { Route, Routes } from "react-router-dom"
import StudentView from "../pages/StudentView"
import PageNotFound from "../pages/404"

function PageRouter() {
  return (
    <Routes>
      <Route path="/" element={<StudentView />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  )
}

export default PageRouter