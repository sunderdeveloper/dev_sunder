import React from "react";

const Contact = () => {
  return (
    <div className=" w-full md:w-9/12 mx-auto bg-[#070b1a] p-6 rounded-2xl">
      <h1 className="text-3xl text-white font-roboto font-normal w-fit border-b-3 pb-2 border-blue-700 mb-6">
        Contact
      </h1>
      <h3 className="text-white text-xl max-w-2xl">
        Have a project, idea, or question? Let’s connect and build something
        great together.
      </h3>
      <div className="mt-10 md:px-8">
        <form action="#" className="grid grid-cols-1 gap-x-6 gap-y-6">
          <input
            type="text"
            placeholder="Name*"
            className="border-b-2 border-gray-800 w-full mx-2 p-6  text-white placeholder:text-gray-200 text-xl"
          />
          <input
            type="text"
            placeholder="Phone*"
            className="border-b-2 border-gray-800 w-full shrink-0 mx-2 p-6  text-white placeholder:text-gray-200 text-xl"
          />
          <input
            type="text"
            placeholder="Email*"
            className="border-b-2 border-gray-800 w-full mx-2 p-6 text-white placeholder:text-gray-200 text-xl"
          />
          <textarea
            placeholder="Message*"
            className="border-b-2 border-gray-800 w-full mx-2 p-6 text-white placeholder:text-gray-200 text-xl"
          ></textarea>

          <button className="bg-blue-700 w-fit px-6 py-2 text-md text-white text-[20px] font-normal rounded-4xl my-4 mx-auto cursor-pointer">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
