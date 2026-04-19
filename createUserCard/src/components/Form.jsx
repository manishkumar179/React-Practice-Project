import React, { useState } from "react";

const Form = () => {
  const [naam, setNaam] = useState("");

  return (
    <div className="px-3 py-3 w-[30%]">
      <form action="" className="flex flex-col gap-3  ">
        <input
          onChange={(e) => console.log(e)}
          className="border rounded-xl px-2 py-2  outline-none "
          type="text"
          placeholder="Enter Name"
        />
        <input
          className="border rounded-xl px-2 py-2 outline-none"
          type="text"
          placeholder="Enter email"
        />
        <input
          className="border rounded-xl px-2 py-2 outline-none"
          type="text"
          placeholder="Enter designation"
        />
        <input
          className="border rounded-xl px-2 py-2 outline-none"
          type="number"
          placeholder="Enter Mobile Number"
        />
        <input
          className="border rounded-xl px-2 py-2 outline-none"
          type="url"
          placeholder="Enter url"
        />

        <button
          className="border-none text-white active:scale-95 cursor-pointer px-2 py-2 rounded-xl bg-green-600"
          type="submit"
        >
          Add user
        </button>
      </form>
    </div>
  );
};

export default Form;
