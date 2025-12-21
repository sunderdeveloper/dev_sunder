import React from "react";

const Shimmer = () => {
  return (
    <div className="w-12/12 h-screen bg-linear-to-tr from-[#0D1225] to-[#411D30] p-4 md:p-10 flex gap-6 justify-center md:flex-row flex-col">
      <div className="w-12/12 md:w-3/12 h-full md:h-12/12 bg-[#ffffff19]  rounded-lg p-10">
        <div className="w-full h-1/3 bg-[#ffffff25] rounded-md md:rounded-lg relative overflow-hidden">
          <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
        </div>
        <div className="w-full h-12 bg-[#ffffff25] mt-6 rounded-md relative overflow-hidden mb-6">
          <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
        </div>
        <div className="flex gap-4 items-center mb-6">
          <div className=" w-10 h-10 md:w-14 md:h-14 bg-[#ffffff25] rounded-md relative overflow-hidden">
            <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
          </div>
          <div>
            <div className="w-25 h-3 md:h-4 bg-[#ffffff25] mb-2 relative overflow-hidden rounded-xs">
              <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
            </div>
            <div className="w-45 h-3 md:h-4 bg-[#ffffff25] relative overflow-hidden rounded-xs">
              <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center mb-6">
          <div className="w-10 h-10 md:w-14 md:h-14 bg-[#ffffff25] rounded-md relative overflow-hidden">
            <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
          </div>
          <div>
            <div className="w-25 h-3 md:h-4 bg-[#ffffff25] mb-2 relative overflow-hidden rounded-xs">
              <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
            </div>
            <div className="w-45 h-3 md:h-4 bg-[#ffffff25] relative overflow-hidden rounded-xs">
              <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center mb-6 ">
          <div className="w-10 h-10 md:w-14 md:h-14 bg-[#ffffff25] rounded-md relative overflow-hidden">
            <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
          </div>
          <div>
            <div className="w-25 h-3 md:h-4 bg-[#ffffff25] mb-2 relative overflow-hidden rounded-xs">
              <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
            </div>
            <div className="w-45 h-3 md:h-4 bg-[#ffffff25] relative overflow-hidden rounded-xs">
              <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-1/2 md:w-8/12 md:h-12/12 bg-[#ffffff19] rounded-lg p-10">
        <div className="w-full h-4 md:h-12 bg-[#ffffff25] rounded-xs md:rounded-md overflow-hidden relative mb-4">
          <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
        </div>
        <div className="w-full h-4 md:h-12 bg-[#ffffff25] rounded-xs md:rounded-md overflow-hidden relative mb-4">
          <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
        </div>
        <div className="w-1/2 h-4 md:h-12 bg-[#ffffff25] rounded-xs md:rounded-md overflow-hidden relative mb-4">
          <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
        </div>

        <div className="flex items-center mt-6 md:mt-10 gap-5">
          <div className="w-1/3 h-15 md:h-25 bg-[#ffffff25] rounded-md relative overflow-hidden flex flex-col items-start justify-center p-4">
            <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
            <div className="w-9/12 h-5 bg-[#ffffff25] rounded-xs mb-2"></div>
            <div className="w-12/12 h-5 bg-[#ffffff25] rounded-xs"></div>
          </div>
          <div className="w-1/3 h-15 md:h-25 bg-[#ffffff25] rounded-md relative overflow-hidden flex flex-col items-start justify-center p-4">
            <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
            <div className="w-9/12 h-5 bg-[#ffffff25] rounded-xs mb-2"></div>
            <div className="w-12/12 h-5 bg-[#ffffff25] rounded-xs"></div>
          </div>
          <div className="w-1/3 h-15 md:h-25 bg-[#ffffff25] rounded-md relative overflow-hidden flex flex-col items-start justify-center p-4">
            <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
            <div className="w-9/12 h-5 bg-[#ffffff25] rounded-xs mb-2"></div>
            <div className="w-12/12 h-5 bg-[#ffffff25] rounded-xs"></div>
          </div>
        </div>
        <div className="flex items-center mt-6 md:mt-10 gap-5">
          <div className="w-1/3 h-15 md:h-25 bg-[#ffffff25] rounded-md relative overflow-hidden flex flex-col items-start justify-center p-4">
            <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
            <div className="w-9/12 h-5 bg-[#ffffff25] rounded-xs mb-2"></div>
            <div className="w-12/12 h-5 bg-[#ffffff25] rounded-xs"></div>
          </div>
          <div className="w-1/3 h-15 md:h-25 bg-[#ffffff25] rounded-md relative overflow-hidden flex flex-col items-start justify-center p-4">
            <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
            <div className="w-9/12 h-5 bg-[#ffffff25] rounded-xs mb-2"></div>
            <div className="w-12/12 h-5 bg-[#ffffff25] rounded-xs"></div>
          </div>
          <div className="w-1/3 h-15 md:h-25 bg-[#ffffff25] rounded-md relative overflow-hidden flex flex-col items-start justify-center p-4">
            <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
            <div className="w-9/12 h-5 bg-[#ffffff25] rounded-xs mb-2"></div>
            <div className="w-12/12 h-5 bg-[#ffffff25] rounded-xs"></div>
          </div>
        </div>

        <div className="w-full h-8 md:h-12 bg-[#ffffff25] rounded-xs md:rounded-md overflow-hidden relative mt-8">
          <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
