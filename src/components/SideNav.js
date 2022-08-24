import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loggOut } from "../store/auth/authSlice";

const SideNav = ({ typeUser }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navListUser = [
    {
      name: "Your Profile",
      url: "/my",
      navList: [
        {
          name: "Profile",
          url: "/profile",
        },
        {
          name: "Progression",
          url: "/progression",
        },

        {
          name: "Objectives",
          url: "/objectives",
        },
        {
          name: "Dashboard",
          url: "/dashboard",
        },
      ],
    },
    {
      name: "Explore",
      url: "/explore",
      navList: [
        {
          name: "Projects",
          url: "/projects",
        },
        {
          name: "Profiles",
          url: "/profiles",
        },
      ],
    },
  ];
  const navListAdmin = [
    {
      name: "Manage User",
      url: "/manage",
      navList: [
        {
          name: "Create user",
          url: "/createuser",
        },
        {
          name: "Remove user",
          url: "/removeuser",
        },
        {
          name: "Change rol",
          url: "/changerol",
        },
      ],
    },
    {
      name: "Administrar skills",
      url: "/admin/skill",
      navList: [
        {
          name: "Crear",
          url: "/create",
        },
        {
          name: "Actualizar",
          url: "/actualizar",
        },
        {
          name: "Borrar",
          url: "/borrar",
        },
      ],
    },
  ];

  const location = useLocation();
  const user = useSelector((state) => state.user);

  const logout = () => {
    dispatch(loggOut());
  };

  return (
    <div className="w-full h-full bg-secondary">
      <div className="h-4/5 text-white p-8">
        <h3 className="pb-4 text-2xl 2xl:text-4xl text-center border-b-4 my-5">
          Hello {user.username}
        </h3>
        <ul className="my-6 2xl:text-xl">
          {generateNav(
            typeUser ? navListUser : navListAdmin,
            "",
            0,
            location.pathname
          )}
        </ul>
      </div>
      <div
        className="text-xl font-bold text-white p-8 hover:underline"
        onClick={() => logout()}
      >
        Cerrar sesion
      </div>
    </div>
  );
};

const generateNav = (navList, nodePath, nodeLevel, currentPath) => {
  return (
    <div className="mb-8">
      {navList.map((item, idx) => {
        if (item.navList) {
          return (
            <div>
              <span className="text-xl 2xl:text-2xl font-bold">
                {item.name}
              </span>
              {generateNav(item.navList, item.url, nodeLevel + 1, currentPath)}
            </div>
          );
        }

        const isCurrentLocation = currentPath === nodePath + item.url;
        return (
          <li
            key={idx}
            className={`hover:font-medium mt-1 ml-${nodeLevel * 5} ${
              isCurrentLocation ? "font-medium underline" : ""
            }`}
          >
            <Link to={nodePath + item.url}>{item.name}</Link>
          </li>
        );
      })}
    </div>
  );
};

export default SideNav;
