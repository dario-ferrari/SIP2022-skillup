import React, { useEffect, useRef } from "react";

import * as d3 from "d3";
import { useSelector } from "react-redux";
import "./admin.css"
import InputForm from "../../components/InputForm";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link } from "react-router-dom";
import ButtonForm from "../../components/ButtonForm";


import Button from '@mui/material/Button';

const NewTech = () => {
 

  return (
    <div className="h-full w-full text-zinc-700 overflow-hidden relative">
      <h1 className="addTech">Add technology</h1>
   
      <div className="techcreated">
        <div>
          <h1 className="text-4xl center margin-top">TECH CREATED</h1>
        </div>
        <div className="techsuccesfully">
          <h1 className="center margin-top">Technology was created succesfully!</h1>
        </div>
        <div className="continue text/center">
          <h1 className="center margin-top">
            <Link to="/admin/newtechnologies">
              <ButtonForm text={"Continue"} />
            </Link>
          </h1>
        </div>       
      </div>
    </div>

  );
};

export default NewTech;
