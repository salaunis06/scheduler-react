import Scheduler from "./components/Scheduler";
import StaffLoad from "./components/StaffLoad";
import './styles/style.css';

import { staff, section1Data, section2Data, section3Data } from './data/appData';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addAllStaff } from "./store/staff";
import { addSection1Data, addSection2Data, addSection3Data } from "./store/schedule";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addAllStaff(staff));
    dispatch(addSection1Data(section1Data));
    dispatch(addSection2Data(section2Data));
    dispatch(addSection3Data(section3Data));
  }, [])
  return (
    <div>
      <Scheduler />
      <StaffLoad />
    </div>
  );
}

export default App;
