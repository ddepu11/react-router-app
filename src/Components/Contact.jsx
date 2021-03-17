import React from "react";
import { FiMail } from "react-icons/fi";
import { AiOutlineMobile } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

export default function Contact() {
  return (
    <div className="contact">
      <h1>Get in Touch</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam saepe
        quae quaerat praesentium est in maiores officia debitis,
      </p>
      <div className="contact-types">
        <div className="one common flex">
          <FiMail />
          <span>xyz.mno124@gmail.com</span>
        </div>
        <div className="two common flex">
          <AiOutlineMobile />
          <span>895656656</span>
        </div>
        <div className="three common flex">
          <GoLocation />
          <span>4390 Raintree Boulevard</span>
        </div>
      </div>
    </div>
  );
}
