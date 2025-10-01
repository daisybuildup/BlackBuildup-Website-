import React from "react";

const ModalCard = ({ modal, setIsOpenProp }) => {
  return (
    <div
      className="fixed  inset-0 w-full h-full bg-black/70 flex justify-center items-center z-[1000] px-6"
      onClick={() => setIsOpenProp(false)} // click background to close
    >
      {/* Modal content */}
      <div
        className="text-[#4B5564] rounded-[12px] bg-white py-6 px-4 sm:py-8 sm:px-6 
                   w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl 
                   max-h-[70vh] md:max-h-[85vh] overflow-y-auto scrollbar-hide
                   "
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        <h1 className="text-[#0F4082] font-bold text-[24px] sm:text-[28px] md:text-[32px]">
          {modal.titleone}
        </h1>
        <p className="pt-4 sm:pt-6 text-sm sm:text-base">{modal.textone}</p>

        <h2 className="text-[#0F4082] font-bold pt-4 sm:pt-6 text-[18px] sm:text-[20px] md:text-[24px]">
          {modal.titletwo}
        </h2>
        <ul className="list-disc mt-2 sm:mt-3 marker:text-[#82510F] flex flex-col gap-2 sm:gap-3 pl-4 sm:pl-5 text-sm sm:text-base">
          <li>{modal.listone}</li>
          <li>{modal.listtwo}</li>
          <li>{modal.listthree}</li>
          <li>{modal.listfour}</li>
        </ul>

        <div className="mt-8 sm:mt-12 py-6 px-4 sm:py-8 sm:px-6 bg-[#eceffb] rounded-[12px]">
          <h1 className="text-[#0F4082] text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            {modal.titlethree}
          </h1>
          <p className="text-sm sm:text-base">{modal.texttwo}</p>
        </div>
      </div>
    </div>
  );
};

export default ModalCard;
