import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const CardLIst = ({ children }: Props) => (
  <>
    <h3>CardList</h3>
    <div className="card-group">{children}</div>
  </>
);
