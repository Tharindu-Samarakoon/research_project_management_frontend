import React from "react";
import AdminHome from "./components/Admin/AdminHome.js";
import Authentication from "./components/Authentication/Authentication";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import StudentProfile from "./components/StudentProfile/StudentProfile";
import StudentRegistration from "./components/StudentRegistration/StudentRegistration";
import { Route, Routes } from "react-router-dom";
import ViewSupervisors from "./components/ViewSupervisors/ViewSupervisors";
import StaffManagement from "./components/Admin/AdminStaffManagement/StaffManagement.js";
import StudentManagement from "./components/Admin/AdminStudentManagement/StudentManagement.js";
import SubmissionManagement from "./components/Admin/AdminSubmissionManagement/SubmissionManagement.js";
import StudentGroupManagement from "./components/Admin/AdminStudentGroupManagement/StudentGroupManagement.js";
import DocumentUploadManagement from "./components/Admin/AdminDocumentUpload/DocumentUploadManagement.js";
import MarkingSchemeManagement from "./components/Admin/AdminMarkingSchemeManagement/MarkingSchemeManagement.js";
import AddStaffMember from "./components/Admin/AdminStaffManagement/AddStaffMember.js";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <img src={require('./images/ava.jpg').default} height={ 150} width={150} /> */}
      {/* <ViewSupervisors/> */}
      <AdminHome />
      <Routes>
        <Route exact path="/admin"></Route>
        <Route exact path="/staffManagement" element={<StaffManagement />} />
        <Route
          exact
          path="/studentManagement"
          element={<StudentManagement />}
        />
        <Route
          exact
          path="/submissionManagement"
          element={<SubmissionManagement />}
        />
        <Route
          exact
          path="/studentGroupManagement"
          element={<StudentGroupManagement />}
        />
        <Route
          exact
          path="/documentManagement"
          element={<DocumentUploadManagement />}
        />
        <Route
          exact
          path="/markingSchemeManagement"
          element={<MarkingSchemeManagement />}
        />
        <Route exact
         path="/addStaffMember" 
         element={<AddStaffMember />} />
      </Routes>
    </div>
  );
};

export default App;
