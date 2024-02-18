"use client";
import React from "react";
import { useState } from "react";
import TodoComp from "../components/todoComp/todoComp";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CheckboxComp from "../components/todoComp/CheckboxComp";
// import { purple, blue, pink } from "@mui/material/colors";

// declare module "@mui/material/styles" {
//   interface PaletteColor {
//     darker?: string;
//   }

//   interface SimplePaletteColorOptions {
//     darker?: string;
//   }
// }

// const theme = createTheme({
//   palette: {
//     primary: {
//       light: "#f5f5f5",
//       main: "#f5f5f5",
//     },
//   },
// });

export default function TodoPage() {
  const [isShowBtnActive, setShowBtnActive] = useState(false);
  const [arr, setArr] = useState<any>([]);
  const [Textfield, setTextField] = useState<any>();
  const [isCheckBox, setCheckBox] = useState(false);
  const [isBulletList, setBulletList] = useState(false);
  const [isNumberedList, setNumberedList] = useState(false);

  const addBox = (text: any) => {
    if (text !== null && text === "checkBox") {
      setCheckBox(true);
      setBulletList(false);
      setNumberedList(false);
    }
    if (text !== null && text === "bulletList") {
      setCheckBox(false);
      setBulletList(true);
      setNumberedList(false);
    }
    if (text !== null && text === "numberedList") {
      setCheckBox(false);
      setNumberedList(true);
      setBulletList(false);
    }
  };

  return (
    <div className=" main   flex justify-end mt-40  mr-44  ">
      <div
        className="bg-white  min-h-96 flex flex-row   w-2/5 overflow-hidden "
        onMouseMove={() => {
          setShowBtnActive(true);
        }}
        onMouseLeave={() => {
          setShowBtnActive(false);
        }}
      >
        {isShowBtnActive ? <TodoComp change={addBox} /> : null}

        <div className="inputBox flex flex-col ml-2 mt-3 w-full h-10 ">
          <div className="flex flex-col ">
            {isCheckBox ? <CheckboxComp /> : null}
          </div>

          <div>
            {arr.map((it: any, ind: any) => {
              <div className=" bg-gray-700" key={ind}>
                {it}
              </div>;
            })}
          </div>
          <button
            className=" bg-black text-white"
            title="click me"
            onClick={() => {
              setArr([...arr, 1]);
              console.log("clicked");
            }}
          >
            click me
          </button>
        </div>
      </div>
    </div>
  );
}
