import React from "react";

interface TitleProps {
  text: string;
  className?: string;
}

const Title = ({ className, text }: TitleProps) => {
  return <h1 className={className}>{text}</h1>;
};

export default Title;
