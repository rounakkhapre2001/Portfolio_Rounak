import Image from "next/image";
import { memo } from "react";

const SeoImage = () => {
  return (
    <div
      className="overflow-hidden"
      style={{
        width: "1px",
        height: "1px",
      }}
    >
      <Image
        src="/assets/profile-image.jpg"
        alt="Rounak Khapre - MERN stack developer"
        width={1200}
        height={630}
        priority
        quality={65}
      />
    </div>
  );
};

export default memo(SeoImage);