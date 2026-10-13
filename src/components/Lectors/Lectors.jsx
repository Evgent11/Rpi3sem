import { lecturers } from "../../data/lecturers";
import { Lector } from "./Lector";
import "./Lectors.css";

export const Lectors = () => (
  <>
    {lecturers.map((l) => (
      <Lector key={l.id} lecturer={l} />
    ))}
  </>
);
