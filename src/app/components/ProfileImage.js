import { Blob } from "./Blob";
import Image from "next/image";

export default function ProfileImage(props) {
  const { src } = props;
  return (
    <Blob className="relative w-60 lg:w-80 h-60 lg:h-80 my-8 lg:my-10">
      <Image alt="" src={src} fill loading="lazy" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
    </Blob>
  );
}
