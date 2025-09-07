import React from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

const USFlagIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 7410 3900">
    <path fill="#b22234" d="M0 0h7410v3900H0z" />
    <path
      d="M0 450h7410M0 1170h7410M0 1890h7410M0 2610h7410M0 3330h7410"
      stroke="#fff"
      strokeWidth="300"
    />
    <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
    <g fill="#fff">
      {/* This is a simplified representation of the stars */}
      <g id="s18">
        <g id="s9">
          <path id="s" d="M247 90l70 215-184-133h228L93 305z" />
          <use href="#s" x="494" />
          <use href="#s" y="210" />
          <use href="#s" x="247" y="210" />
          <use href="#s" x="494" y="210" />
        </g>
        <use href="#s9" x="988" />
        <use href="#s9" x="1976" />
      </g>
      <use href="#s18" y="420" />
      <use href="#s18" y="840" />
      <use href="#s18" y="1260" />
    </g>
  </SvgIcon>
);

export default USFlagIcon;
