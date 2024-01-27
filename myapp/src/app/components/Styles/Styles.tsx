import React, { useState } from "react";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";
import styles from "./Styles.module.css";

const fontFamilyList = [
  "Arial",
  "Babes",
  "Caveat",
  "Comfortea",
  "Exo",
  "Inter",
  "Kanit",
  "Karla",
  "Lato",
  "Lobster",
  "Manrope",
  "Montserrat",
  "Noto",
  "NotoJP",
  "Nunito",
  "Open",
  "Oswald",
  "Pacifico",
  "Playfair",
  "Poppins",
  "Raleway",
  "Roboto",
  "RobotoCondensed",
  "RobotoSlab",
  "SourceCode",
  "Ubuntu",
];
function Styles() {
  const [isOpen, setState] = useState(false);
  const [fontFamily, setFontFamily] = useState(fontFamilyList[0]);

  const [color, setColor] = useColor("#fff");

  const openList = () => {
    setState(!isOpen);
  };

  const changeFontFamily = (e: any) => {
    setFontFamily(e.target.value);
  };

  return (
    <>
      <div>
        <span
          className={`material-symbols-outlined ${styles.pin}`}
          onClick={openList}
        >
          more_vert
        </span>
      </div>

      <div
        className={` ${
          isOpen ? styles.stylesListOpen : styles.stylesListClose
        } `}
      >
        <div className={styles.fontStyle}>
          <select value={fontFamily} onChange={changeFontFamily}>
            {fontFamilyList.map((item, index) => {
              return <option key={index}>{item}</option>;
            })}
          </select>
        </div>
        <div className={styles.fontSize}>
          <input type="number" placeholder="font-size:"></input>
        </div>
        <div className={styles.fontWeight}>
          <input type="number" placeholder="font-weight:"></input>
        </div>
        <div className={styles.color}>
          <ColorPicker
            color={color}
            onChange={setColor}
            hideInput={["hex", "hsv"]}
          />
        </div>
        <div className={styles.backColor}>background color</div>
        <div className={styles.padding}>Padding</div>
        <div className={styles.align}>Align</div>
      </div>
    </>
  );
}

export default Styles;
