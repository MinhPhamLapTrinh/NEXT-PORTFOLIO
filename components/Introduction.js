import Image from "next/image";
import toji from "../public/toji.png";

export default function Introduction() {
  return (
    <>
      <Image src={toji} alt="toji" width="192" height="192" quality="95" className=""/>
    </>
  );
}
