import React from "react";

type Props = {
  title: string;
  text: string;
  link: string;
};

export const CardBody = ({ title, text, link }: Props) => (
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{text}</p>
    <a href={link} className="btn btn-primary">
      Go somewhere
    </a>
  </div>
);
