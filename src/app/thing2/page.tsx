"use client";
import { useMyContext } from "../my-context";

export default function Home() {
  const myString = useMyContext();

  return <main>{myString}</main>;
}
