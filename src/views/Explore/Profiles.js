import React from "react";
import InputForm from "../../components/InputForm";
import ButtonForm from "../../components/ButtonForm";

const busqueda = () =>{

}

const Profiles = () => {

    return (
        <div className="h-full w-full text-zinc-700 overflow-hidden relative">
          <h1 className="text-6xl font-thin text-center">Explore Profiles</h1>
          <form className="-flex">
            <div className="my-10 flex justify-center">
              <InputForm type="text" placeholder="Name" />
              <InputForm type="text" placeholder="Project" />
            </div>
          </form>
          <form className="">
            <div className="my-8 flex justify-around">
              <ButtonForm text={"Search"} onClick={() => busqueda()}/>
            </div>
          </form>
          <div className="bg-orange-200 w-full h-3/5 max-h-2xl py-10 rounded-lg overflow-y-scroll">
            <div className="w-2/4 flex justify-start items-center">
              <img
              src="https://cdn-icons-png.flaticon.com/512/456/456212.png"
              className="w-24 h-24 bg-zinc-300 border-2 border-zinc-400 rounded-full mr-5"
              ></img>
              <h3 className="text-4xl">Pepito Lopez</h3>
              <img
              src="https://cdn-icons-png.flaticon.com/512/456/456212.png"
              className="w-24 h-24 bg-zinc-300 border-2 border-zinc-400 rounded-full mr-5"
              ></img>
              <h3 className="text-4xl">Jorge Lopez</h3>
            </div>
          </div>
        </div>
      );
}

export default Profiles;