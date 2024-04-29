/* eslint-disable no-unused-vars */
import React from "react";
import { InlineWidget, PopupWidget } from "react-calendly";
import './Calendy.css'
const Calendy = () => {
  return (
    <div className="bg-transparent mt-20 w-full h-full relative">
    <InlineWidget url="https://calendly.com/teamassistant1-5" />
    </div>
  );
};

export default Calendy;