"use client";

import Image from "next/image";

const page = () => {
  return (
    <Image
      src="/image.jpg"
      width="1600"
      height="900"
      alt="Picture of the author"
    />
  );
};

export default page;
