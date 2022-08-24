import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SideNav from "./SideNav";

const AccountPanel = ({ children, typeUser }) => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (!auth.logged) {
      return navigate("/login");
    }
  }, [auth.logged]);

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-10/12 h-5/6 mx-auto rounded-lg overflow-hidden bg-yellow-600 flex">
        <div className="w-1/5 h-full">
          <SideNav typeUser={typeUser ?? true} />
        </div>
        <div className="bg-white w-4/5 h-full p-10">{children}</div>
      </div>
    </div>
  );
};

export default AccountPanel;
