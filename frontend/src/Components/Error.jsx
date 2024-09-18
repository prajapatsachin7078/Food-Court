import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <div className="container mx-auto text-center py-10">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqI3lHFjBbLelg5rGnkZVukHUI2cd9cnEGOQ&s"
        alt="Error"
        className="w-60 mx-auto mb-8"
      />
      <h1 className="text-4xl font-bold text-red-600 uppercase mb-6">
        {error.data}
      </h1>
      <h3 className="text-2xl text-gray-500 mt-4">
        Error {error.status}: {error.statusText}
      </h3>
    </div>
  );
};

export default Error;
