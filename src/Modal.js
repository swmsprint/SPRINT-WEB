import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import ReactGA from "react-ga";
import { db } from "./lib/firebase_config";

const Modal = ({ closeModal }) => {
  const [number, setNumber] = useState("");
  const [agree, setAgree] = useState(false);
  const [beta, setBeta] = useState(false);

  const handleNumber = (e) => {
    const regex = /^[0-9\b -]{0,15}$/;
    if (regex.test(e.target.value)) {
      setNumber(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agree) {
      alert("전화번호 수집에 동의해주세요.");
      return;
    }
    if (number === "") {
      alert("전화번호를 입력해 주세요.");
      return;
    }

    const Reservation = collection(db, "users");
    addDoc(Reservation, { number, beta })
      .then((response) => {
        alert("사전예약이 완료되었습니다! 곧 만나요!");
        closeModal();
        ReactGA.event({
          category: "Button",
          action: "Succeeded Reservation",
        });
      })
      .catch((error) => {
        alert("오류가 발생했습니다. 다시 시도해주세요.");
        ReactGA.event({
          category: "Button",
          action: "Failed Reservation",
        });
      });
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-3/4 md:w-1/2 my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">SPRINT 사전예약</h3>
            </div>
            <form class="w-full">
              <br></br>
              <div class="md:flex md:items-center mb-6">
                <div class="ml-5 md:ml-0 md:w-1/4">
                  <label
                    class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    for="inline-full-name"
                  >
                    전화번호
                  </label>
                </div>
                <input
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded ml-5 md:w-1/2 w-3/4 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  type="text"
                  value={number}
                  onChange={handleNumber}
                  required
                />
              </div>
              <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/4"></div>
                <label class="ml-5 mr-5 md:w-1/2 block text-gray-500 font-bold">
                  <input
                    class="mr-2 leading-tight"
                    type="checkbox"
                    value={agree}
                    onChange={() => setAgree(!agree)}
                  />
                  <span class="text-sm md:text-md">
                    (필수) 정식 출시 알림을 위한 전화번호 수집에 동의합니다.
                  </span>
                </label>
              </div>
              <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/4"></div>
                <label class="ml-5 mr-5 md:w-1/2 block text-gray-500 font-bold">
                  <input
                    class="mr-2 leading-tight"
                    type="checkbox"
                    value={beta}
                    onChange={() => setBeta(!beta)}
                  />
                  <span class="text-sm md:text-md">
                    (선택) 베타 테스터 선정에 응모합니다.
                  </span>
                </label>
              </div>
            </form>
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-indigo-500 background-transparent font-bold uppercase px-6 py-2 text-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={closeModal}
              >
                닫기
              </button>
              <button
                className="bg-indigo-500 text-white active:bg-indigo-700 font-bold uppercase text-md px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={handleSubmit}
              >
                제출하기
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Modal;
