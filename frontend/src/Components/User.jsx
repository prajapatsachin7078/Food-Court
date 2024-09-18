import React from "react";

const User = ({ name, age, profession }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Functional Component</h1>
      <h3 className="text-lg mb-2">Name: <span className="font-medium">{name}</span></h3>
      <h3 className="text-lg mb-2">Age: <span className="font-medium">{age}</span></h3>
      <h3 className="text-lg">Profession: <span className="font-medium">{profession}</span></h3>
    </div>
  );
};

export default User;
