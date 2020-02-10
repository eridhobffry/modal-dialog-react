import React from "react";
import { useModal } from "./hooks";
import "./App.css";
import CustomModal from "../components/modal/modal";
import UserInformation from "../components/user/user_information";
// import dataUser from "../data";

const data = [
  {
    name: "Oyetoke Toby",
    age: 20,
    job_title: "Software Engineer",
    country: "Nigeria",
    gender: "male"
  },
  {
    name: "Apata Dorcas",
    age: 21,
    job_title: "Makeup Stylist",
    country: "Nigeria",
    gender: "female"
  },
  {
    name: "Jonh Doe",
    age: 22,
    job_title: "Graphic Designer",
    country: "US",
    gender: "male"
  },
  {
    name: "Leke Oyetoke",
    age: 30,
    job_title: "IT Manager",
    country: "Nigeria",
    gender: "male"
  }
];

const App = () => {
  const [modalOpen, setModalOpen, toggle] = useModal();

  return (
    <div className="App">
      <button onClick={toggle}>Show Modal</button>
      <CustomModal
        title={"Item Modal"}
        isActive={modalOpen}
        handleClose={() => setModalOpen(false)}
      >
        <h1>Hey</h1>
      </CustomModal>
      <UserInformation data={data} />
    </div>
  );
};

export default App;
