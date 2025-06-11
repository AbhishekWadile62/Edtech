import { BrowserRouter, Router,Routes,Route,Navigate,} from "react-router-dom";
import React ,{ useState } from "react";
import GoogleLogin from "./pages/GoogleLogin";
import { GoogleOAuthProvider } from "@react-oauth/google";
import RefreshHandler from "./pages/RefreshHandler";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import CoursePage from "./pages/CoursePage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact"; // Import the Contact page
import AboutUs from "./pages/AboutUs"; // Import About Us page component
import "./index.css"; // or './app.css' based on which file you choose to use
import Profile from "./pages/Profile"; // Import the Profile component
import CourseContent from "./pages/CourseContent";
import ISR from "./Forth_year/ISR";
import SPM from "./Forth_year/SPM";
import DL from "./Forth_year/DL";
import DS from "./Forth_year/DS";
import SC from "./Forth_year/SC";
import BT from "./Forth_year/BT";
import DocToPdf from "./pages/DocToPdf";
import Assignment from "./pages/Assignment";
import Practical from "./pages/Practical";
import BEE from "./FIrst_year/BEE";
import M1 from "./FIrst_year/M1";
import Ph from "./FIrst_year/Ph";
import CH from "./FIrst_year/Ch";
import SME from "./FIrst_year/SME";
import BXE from "./FIrst_year/BXE";
import PPS from "./FIrst_year/PPS";
import EG from "./FIrst_year/EG";
import EM from "./FIrst_year/EM";
import DM from "./Second_year/DM";
import LDCO from "./Second_year/LDCO";
import DSA from "./Second_year/DSA";
import OOP from "./Second_year/OOP";
import BCN from "./Second_year/BCN";
import M3 from "./Second_year/M3";
import PA from "./Second_year/PA";
import DBMS from "./Second_year/DBMS";
import CG from "./Second_year/CG";
import SE from "./Second_year/SE";
import TOC from "./Third_year/TOC";
import OS from "./Third_year/OS";
import ML from "./Third_year/ML";
import HCI from "./Third_year/HCI";
import CN from "./Third_year/CN";
import DSBDA from "./Third_year/DSBDA";
import WAD from "./Third_year/WAD";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const GoogleAuthWrapper = () => {
    return (
      <GoogleOAuthProvider clientId="490156029558-6a1vd9qndkilgvr30cah7q4kpclso8t9.apps.googleusercontent.com">
        <GoogleLogin></GoogleLogin>
      </GoogleOAuthProvider>
    );
  };
  //Private Routing
  // const PrivateRoute = ({ element }) => {
  //   return isAuthenticated ? element : <Navigate to="/login" />;
  // };
  return (
    <BrowserRouter>
      <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/courses/:id" element={<CoursePage />} />
          <Route path="/login" element={<React.Fragment>
            <Login />
          </React.Fragment>} />
          <Route path="/signup" element={<React.Fragment>
            <Signup />
          </React.Fragment>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<center><Contact /></center>} />{" "}
          {/* Add Contact route */}
          <Route path="/profile" element={<Profile />} />{" "}
          {/* Define /profile route */}
          <Route path="/extras" element={<CourseContent />} />

          <Route path="*" element={<div className="w-[100vw] h-[100vh] flex justify-center items-center text-4xl text-white"><h1>404 Not Found</h1></div>} />

          <Route path="/courses/engineering-2019/final_year/it/0" element={<ISR/>} />
          <Route path="/courses/engineering-2019/final_year/it/1" element={<SPM/>} />
          <Route path="/courses/engineering-2019/final_year/it/2" element={<DL/>} />
          <Route path="/courses/engineering-2019/final_year/it/3" element={<DS/>} />
          <Route path="/courses/engineering-2019/final_year/it/4" element={<SC/>} />
          <Route path="/courses/engineering-2019/final_year/it/5" element={<BT/>} />
          
          <Route path="/courses/engineering-2019/first_year/it/0" element={<M1/>} />
          <Route path="/courses/engineering-2019/first_year/it/1" element={<Ph/>} />
          <Route path="/courses/engineering-2019/first_year/it/2" element={<CH/>} />
          <Route path="/courses/engineering-2019/first_year/it/3" element={<SME/>} />
          <Route path="/courses/engineering-2019/first_year/it/4" element={<BEE/>} />
          <Route path="/courses/engineering-2019/first_year/it/5" element={<BXE/>} />
          <Route path="/courses/engineering-2019/first_year/it/6" element={<PPS/>} />
          <Route path="/courses/engineering-2019/first_year/it/7" element={<EG/>} />
          <Route path="/courses/engineering-2019/first_year/it/8" element={<EM/>} />

          <Route path="/courses/engineering-2019/second_year/it/0" element={<DM/>} />
          <Route path="/courses/engineering-2019/second_year/it/1" element={<LDCO/>} />
          <Route path="/courses/engineering-2019/second_year/it/2" element={<DSA/>} />
          <Route path="/courses/engineering-2019/second_year/it/3" element={<OOP/>} />
          <Route path="/courses/engineering-2019/second_year/it/4" element={<BCN/>} />
          <Route path="/courses/engineering-2019/second_year/it/5" element={<M3/>} />
          <Route path="/courses/engineering-2019/second_year/it/6" element={<PA/>} />
          <Route path="/courses/engineering-2019/second_year/it/7" element={<DBMS/>} />
          <Route path="/courses/engineering-2019/second_year/it/8" element={<CG/>} />
          <Route path="/courses/engineering-2019/second_year/it/9" element={<SE/>} />

          <Route path="/courses/engineering-2019/third_year/it/0" element={<TOC/>} />
          <Route path="/courses/engineering-2019/third_year/it/1" element={<OS/>} />
          <Route path="/courses/engineering-2019/third_year/it/2" element={<ML/>} />
          <Route path="/courses/engineering-2019/third_year/it/3" element={<HCI/>} />
          <Route path="/courses/engineering-2019/third_year/it/4" element={<CN/>} />
          <Route path="/courses/engineering-2019/third_year/it/5" element={<DSBDA/>} />
          <Route path="/courses/engineering-2019/third_year/it/6" element={<WAD/>} />
          
          
          <Route path="/upload/:id" element={<Assignment/>}/>
          <Route path="/practicals/:id" element={<Practical/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
