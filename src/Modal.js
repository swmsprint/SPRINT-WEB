const Modal = ({ closeModal }) => {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-1/2 my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">SPRINT 사전예약</h3>
            </div>
            <form class="w-full">
              <br></br>
              <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/4">
                  <label
                    class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    for="inline-full-name"
                  >
                    전화번호
                  </label>
                </div>
                <div class="md:w-1/2">
                  <input
                    class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    type="text"
                  />
                </div>
              </div>
              <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/4"></div>
                <label class="md:w-1/2 block text-gray-500 font-bold">
                  <input class="mr-2 leading-tight" type="checkbox" />
                  <span class="text-sm">
                    (필수) 정식 출시 알림을 위한 전화번호 수집에 동의합니다.
                  </span>
                </label>
              </div>
              <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/4"></div>
                <label class="md:w-1/2 block text-gray-500 font-bold">
                  <input class="mr-2 leading-tight" type="checkbox" />
                  <span class="text-sm">
                    (선택) 베타 테스터 선정에 응모합니다.
                  </span>
                </label>
              </div>
            </form>
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={closeModal}
              >
                닫기
              </button>
              <button
                className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={closeModal}
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
