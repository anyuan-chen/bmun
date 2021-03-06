import React, { useState } from "react";
import Navbar from "../components/navbar";
import Modal from "../components/modal";
import useSWR from "swr";

export default function Mailing() {
  const addToMailingList = async (event) => {
    event.preventDefault();
    const data = fetcher("/api/email");
    console.log(data);
    setName("");
    setEmail("");
    setstuNum("");
    setGrade("");
    setShowModal(true);
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [stuNum, setstuNum] = useState("");
  const [grade, setGrade] = useState("");
  const [showModal, setShowModal] = useState(false);
  
  const fetcher = (url) =>
    fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        stuNum: stuNum,
        name: name,
        grade: grade,
      }),
    }).then((res) => res.json());

  const getClassName = () => {
    return showModal? "visible" : "hidden";
  }
    
  return (
    <div className="h-screen md:w-screen md:fixed" onClick={() => setShowModal(false)}>
      <Navbar></Navbar>
      <div className={getClassName()}>
        <Modal 
          caption="Email confirmed!"
          message="You have been added to our mailing list and will hear from us soon."
        >
        </Modal>
      </div>
      <div className="grid md:grid-cols-2">
        <div className="bg-main h-full text-white font-body flex flex-col px-8 pt-16 pb-10 md:h-screen lg:px-20 lg:pt-36">
          <h1 className="text-3xl font-bold">Join Our Mailing List</h1>
          <h2 className="pt-16 md:pt-20 text-xl">
            By joining our mailing list, you gain access to many benefits.
          </h2>
          <ul className="pt-5 text-lg">
            <li className="list-inside list-disc">
              notifications for upcoming conferences
            </li>
            <li className="list-inside list-disc">
              updates on latest meetings
            </li>
            <li className="list-inside list-disc">
              educational content on how to become a better delegate
            </li>
          </ul>
        </div>
        <div className="h-full px-8 py-12 md:pb-0 md:h-screen lg:pt-32">
          <form onSubmit={addToMailingList} className="flex md:justify-center">
            <div className="w-full flex flex-col space-y-8 lg:w-8/12">
              <div className="flex flex-col">
                <label for="name">name</label>
                <input
                  type="text"
                  name="name"
                  className=""
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                ></input>
              </div>
              <div className="flex flex-col">
                <label for="name">email</label>
                <input
                  type="text"
                  name="email"
                  className=""
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                ></input>
              </div>
              <div className="flex flex-col">
                <label for="name">grade</label>
                <input
                  type="text"
                  name="grade"
                  className=""
                  value={grade}
                  onChange={(event) => setGrade(event.target.value)}
                ></input>
              </div>
              <div className="flex flex-col">
                <label for="name">student number</label>
                <input
                  type="text"
                  name="student number"
                  className=""
                  value={stuNum}
                  onChange={(event) => setstuNum(event.target.value)}
                ></input>
              </div>
              <button type="submit" className="bg-main py-2 text-white">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <footer></footer>
    </div>
  );
}
