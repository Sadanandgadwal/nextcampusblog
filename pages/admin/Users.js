import React from "react";

const Users = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 max-w-md mx-auto">
      <div className="flex justify-center">
        <img
          src="path_to_user_profile_image"
          alt="User Profile"
          className="rounded-full h-20 w-20 object-cover"
        />
      </div>
      <div className="mt-4">
        <h2 className="text-2xl font-semibold text-gray-800">John Doe</h2>
        <p className="text-gray-500">Email: john.doe@example.com</p>
        <p className="text-gray-500">Mobile: 123-456-7890</p>
        <p className="text-gray-500">Designation: Developer</p>
        <p className="text-gray-500">Report: 5</p>
        <p className="text-gray-500">Block: No</p>
        <p className="text-gray-500">Warning: No</p>
      </div>
    </div>
  );
};

export default Users;
