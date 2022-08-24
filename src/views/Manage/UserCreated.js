import React, { useEffect, useRef } from "react";


import { Link } from "react-router-dom";
import ButtonForm from "../../components/ButtonForm";


const UserCreated = () => {
 

  return (
    <div className="h-full w-full text-zinc-700 overflow-hidden relative">
      <h1 className="addTech">Create User</h1>
   
      <div className="techcreated">
        <div>
          <h1 className="text-4xl center margin-top">USER CREATED</h1>
        </div>
        <div className="techsuccesfully">
          <h1 className="center margin-top">User was created succesfully!</h1>
        </div>
        <div className="continue text/center">
          <h1 className="center margin-top">
            <Link to="/manage/createuser">
              <ButtonForm text={"Continue"} />
            </Link>
          </h1>
        </div>       
      </div>
    </div>

  );
};

export default UserCreated;
