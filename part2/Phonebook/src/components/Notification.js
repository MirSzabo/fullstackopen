import React from "react";

const Notification = ({ message, type }) => {
  return <p className={type}>{message}</p>;
};

export default Notification;
