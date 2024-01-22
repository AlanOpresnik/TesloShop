import { titleFont } from "@/config/fonts";
import React from "react";

interface Props {
  title: string;
  subTitle?: string;
  classname?: string;
}

const Title = ({ title, subTitle, classname }: Props) => {
  return (
    <div className={`mt-3 ${classname}`}>
      <h1
        className={`${titleFont.className} antialiased text-4xl font-semibold mt-10 mb-2` }
      >
        {title}
      </h1>
      {subTitle ? <h3 className="text-xl mb-5">{subTitle}</h3> : ""}
    </div>
  );
};

export default Title;
