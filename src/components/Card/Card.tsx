import React from "react";
import { CardImage } from "../CardImage";
import { CardType } from "../../types";
import { CardBody } from "../CardBody";

type Props = {
  item: CardType;
};

export const Card = ({ item }: Props) => {
  const { url, nameImg, ...rest } = item;

  return (
    <div className="w-20 d-flex align-items-end">
      <div className="card">
        {url && <CardImage url={url} name={nameImg ?? ""} />}
        <CardBody {...rest}></CardBody>
      </div>
    </div>
  );
};

export default Card;
