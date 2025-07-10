// import { useState } from 'react';
// import CompFunc, {Provinces,City, flower} from './1-CompFunc'
import JsCode from './2-JsCode';
import EventFunction from './3-EventFunction';
import './App.css'
import AssignmentOne from './assignments/AssignmentOne';
import StateInReact from './4-StateInReact';
import ToggleButton from './5-ToggleButton';
import NumberToWords  from './6-NumberToWords';
import PropsInReact from './7-PropsInReact';
import ObjectData from './8-ObjectData';
import ArrayData from './9-ArrayData';
import PassUseStateAsProps from './10-PassUseStateAsProps';
import PropsDefaultValue from "./11-aPropsDefaultValue";
import PassJsxToProps from './11-bPassJsxToProps';
import InputBoxData from './12-InputBoxData';
import ControlledComp from './13-ControlledComp';
import SpreadOperator from './14-SpreadOperator';
import CheckBoxData from './15-CheckBoxData';
import RadioAndDropDown from './16-RadioAndDropDown';


function App() {
  // let name = "Sarah Ahmed";
  // let address = "Johar Town,Lahore";

  // tutorial-17 ObjectData
  // Passing multiple objects
  // let employee1 = {
  //   name: "Muhammad Ahmed",
  //   age: 34,
  //   salary: 95000,
  //   email: "m_ahmed@gamil.com"
  // }
  // let employee2 = {
  //   name: "Sami Usman",
  //   age: 24,
  //   salary: 95000,
  //   email: "123@gamil.com"
  // }
  // let employee3 = {
  //   name: "Talha Khalid",
  //   age: 30,
  //   salary: 95000,
  //   email: "456@gamil.com"
  // }
  // let employee4 = {
  //   name: "Bisma Gul",
  //   age: 24,
  //   salary: 95000,
  //   email: "879@gamil.com"
  // }

  // tutorial-18 ArrayData
  // Passing data of an array
  // let universities=["UET","NUST","BZU","LUMS","GIKI"]

  // tutorial-19 useState data
  // const [empName, setEmpName] = useState("Humera Khan");

  // tutorial-20
//   let cardStyle = {
//     backgroundColor: "yellow",
//     padding: "20px",
// }

  // let styles = {
  //   border: "2px solid red",
  //   color: "blue",
  // }
  return (
    <>
      {/* <h1>JS code in JSX</h1> */}
     {/* <CompFunc />
      {flower}
      <Provinces />
      <City /> */}
      {/* <JsCode /> */}
      {/* <EventFunction />  */}
      {/* <StateInReact /> */}
      {/* <AssignmentOne /> */}
      {/* <ToggleButton /> */}
      {/* <NumberToWords/> */}
      {/* <PropsInReact fullName={name} age={34} address={address} /> */}
      {/* <h1>Passing Object-Data in Props</h1>
      <ObjectData employee={employee1} />
      <ObjectData employee={employee2} />
      <ObjectData employee={employee3} />
      <ObjectData employee={employee4} /> */}
      {/* <ArrayData uni={universities} />
      <ArrayData uni={universities[2]} /> */}
      {/* {
        empName && 
        <PassUseStateAsProps emp={empName} />
      }
      <button onClick={()=>setEmpName("Farheen Khan")}>Change Name</button> */}
      {/* tutorial-20-a Passing Default Value as Props */}
      {/* <PropsDefaultValue userName="Mustafa"/>
      <PropsDefaultValue userName="Shaheer"/>
      <PropsDefaultValue />
      <PropsDefaultValue /> */}
      {/* tutorial-20-b Passing JSX as Props */}
      {/* <PassJsxToProps >
        <div style={cardStyle}>
        <h2>Passing JSX to Props</h2>
        <h2>Student's Name: Zimar Khan</h2>
        <h2>Father's Name: Shah Muhammad</h2>
        <h2 style={styles}>Class: 6</h2>
        </div>
      </PassJsxToProps> */}
      {/* <InputBoxData /> */}
      {/* <ControlledComp/> */}
      {/* <SpreadOperator/> */}
      {/* <CheckBoxData/> */}
      <RadioAndDropDown/>
    </>
  );
}

export default App
