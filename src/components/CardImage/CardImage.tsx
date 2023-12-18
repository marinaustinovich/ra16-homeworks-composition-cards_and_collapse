import React from "react";

type Props = {
  url: string;
  name: string;
};

export const CardImage = ({ url, name }: Props) => (
  <img src={url} className="card-img-top" alt={name} />
);
