import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import userDataRaw from "../../assets/users";

const Profile = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    console.log("auth.logged", auth.logged);
    if (!auth.logged) {
      return navigate("/login");
    }
  }, []);

  const userData = userDataRaw.find((u) => u.email === user.email);

  const dataTitle = "text-2xl 2xl:text-3xl font-semibold text-secondary";

  return (
    userData && (
      <div className="h-full w-full text-zinc-700 overflow-hidden relative">
        <h1 className="text-4xl 2xl:text-6xl font-thin text-center">
          Tu Perfil
        </h1>

        <div className="w-full flex justify-start items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/456/456212.png"
            className="w-16 h-16 2xl:w-24 2xl:h-24 bg-zinc-300 border-2 border-zinc-400 rounded-full mr-5"
          ></img>
          <h3 className="text-3xl 2xl:text-4xl">{`${userData.name} ${userData.surname}`}</h3>
        </div>

        <div className="w-full h-3/5 pr-20 mt-10 overflow-hidden overflow-y-scroll">
          <div className="w-3/5 2xl:w-2/5">
            <div className="flex justify-between items-center">
              <span className={`${dataTitle}`}>Posición:</span>
              <span className="text-xl 2xl:text-2xl">{userData.position}</span>
            </div>
            <div className="flex justify-between items-center mt-3">
              <p className={`inline-block ${dataTitle}`}>Fecha admisión:</p>
              <span className="text-2xl 2xl:text-2xl">
                {userData.admisionDate}
              </span>
            </div>
            <p className={`${dataTitle} mt-3`}>Projectos actuales</p>
            <div className="ml-4 mt-6">
              {userData.projects.map((p, idx) => (
                <div className="mb-8">
                  <div className="flex justify-between">
                    <p className="text-2xl 2xl:text-2xl font-semibold text-secondary">
                      Nombre:
                    </p>
                    <span className="text-xl">{p.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-2xl 2xl:text-2xl font-semibold text-secondary">
                      Lider:
                    </p>
                    <span className="text-xl">{p.leader}</span>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-2xl 2xl:text-2xl font-semibold text-secondary self-start">
                      Equipo:
                    </p>
                    <ul className="self-end text-xl list-disc">
                      {p.teammates.map((t) => (
                        <li>{t}</li>
                      ))}
                    </ul>
                  </div>
                  {idx < userData.length - 1 ? (
                    <hr className="w-1/2 mx-auto my-5 border-1  border-zinc-700" />
                  ) : null}
                  {idx < userData.projects.length - 1 ? (
                    <div className="w-1/2 m-auto mt-5 bg-red-600 border-2 border-solid	border-secondary"></div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Profile;
