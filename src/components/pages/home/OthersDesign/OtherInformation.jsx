import React from "react";
import { Link } from "react-router-dom";

const OtherInformation = () => {
  return (
    <div className="py-24 ">
      <h1 className="text-center">OTHER INFORMATION</h1>
      <p className="text-center mt-4">
        Food, in the end, in our own tradition, is something holy. It’s not{" "}
        <br />
        about nutrients and calories. It’s about sharing. It’s about honesty.
        It’s about identity.
      </p>
      <div className="grid justify-center mt-6">
        <Link to="/blog">
          <button className="border p-2 px-12 hover:bg-red-500 hover:text-white">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OtherInformation;
