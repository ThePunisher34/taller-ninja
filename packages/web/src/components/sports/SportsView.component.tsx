import { SportsContainer, Sport } from "../../../../common";
import React from "react";
// import "./sports.css";

interface Props {
  sports: Sport[];
  isLoading?: boolean;
}

export function Sports(): JSX.Element {
  return <div>Completar.</div>
}

export function SportsView({ sports, isLoading }: Props): JSX.Element {
  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="UnClassName"> Completar </div>
  );
}
