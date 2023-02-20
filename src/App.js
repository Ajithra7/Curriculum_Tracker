import logo from './logo.svg';
import './App.css';
import './Components/HeadFoot/HeadFoot.css';
import './Components/Home/Home.css';
import './Components/Account/Account.css';
// import './Components/Account/SignUp.css'
import './Components/AdminPanel/AdminPanel.css';
import './Components/FacultyPanel/FacultyPanel.css'
import Home from './Components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/HeadFoot/Footer';
import Account from './Components/Account/Account';
import AdminPanel from './Components/AdminPanel/AdminPanel';
import TopNavbar from './Components/HeadFoot/TopNavbar';
import FacultyPanel from './Components/FacultyPanel/FacultyPanel';
import RequirementForm from './Components/RequirementForm/RequirementForm';
import AssignedReqForm from './Components/RequirementForm/AssignedReqForm';
import PastView from './Components/ViewCurriculum/PastView';
import ForgetPassword from './Components/Account/ForgetPassword';
// import SignUp from './Components/Account/SignUp';
// import SignIn from './Components/Account/SignIn';


function App() {
  return (
    <div >
      <TopNavbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/account' exact element={<Account />} />
          <Route path='/adminpanel' exact element={<AdminPanel />} />
          <Route path='/facultypanel' exact element = {<FacultyPanel/> }/>
          <Route path='/reqform' exact element = {<RequirementForm/>}/>
          <Route path='/assignedreqform' exact element = {<AssignedReqForm/>}/>
          <Route path='/pastview' exact element = {<PastView/>}/>
          <Route path='/forgetpwd' exact element = {<ForgetPassword/>}/>
          {/* <Route path='/signup' exact element = {<SignUp/>}/>
          <Route path='/signin' exact element = {<SignIn />}/> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
