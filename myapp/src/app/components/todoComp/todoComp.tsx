"use client";
import React from "react";
import { useState } from "react";
import { MenuItem } from "@mui/material";
export default function TodoComp({ change }: { change: any }) {
  const [open, setOpen] = useState(false);
  const [optionSelected, setOptionSelected] = useState("");
  return (
    <>
      <div className="flex flex-col pl-1">
        <div
          className="ml-1 h-5 mt-5 cursor-pointer "
          onClick={() => {
            setOpen(!open);
          }}
        >
          <span className="material-symbols-outlined ">add</span>
        </div>
        {open ? (
          <div className="list flex flex-col mt-1">
            <MenuItem
              className="checkbox"
              onClick={() => {
                setOpen(false);
                setOptionSelected("checkBox");
                change("checkBox");
              }}
            >
              <span className="material-symbols-outlined">check_box</span>
            </MenuItem>
            <MenuItem
              className="bulletList"
              onClick={() => {
                setOpen(false);
                setOptionSelected("bulletList");
                change("bulletList");
              }}
            >
              <span className="material-symbols-outlined">list</span>
            </MenuItem>

            <MenuItem
              className="numList"
              onClick={() => {
                setOpen(false);
                setOptionSelected("numberedList");
                change("numberedList");
              }}
            >
              <span className="material-symbols-outlined">
                format_list_numbered
              </span>
            </MenuItem>
          </div>
        ) : null}
      </div>
    </>
  );
}
