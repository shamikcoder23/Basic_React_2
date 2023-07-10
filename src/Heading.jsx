import React from "react";

const customStyle = {
  color: ""
};
const hour = new Date().getHours();
var msg;
if (hour <= 12) {
  msg = "Good Morning";
  customStyle.color = "red";
} else if (hour > 12 && hour <= 18) {
  msg = "Good Afternoon";
  customStyle.color = "green";
} else if (hour > 18 && hour <= 24) {
  msg = "Good Evening";
  customStyle.color = "blue";
}

export default function Heading() {
  return (
    <div>
      <h1 className="heading" style={customStyle}>
        {msg}
      </h1>
    </div>
  );
}
