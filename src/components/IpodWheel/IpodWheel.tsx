import React from "react";

export interface IpodWheelProps {
  label: string;
}

const IpodWheel = (props: IpodWheelProps) => {
  return <button>{props.label}</button>;
};

export default IpodWheel;
