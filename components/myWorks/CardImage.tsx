import React from "react";
import Image from "next/image";

type CardImageProps = {
  coverImageSrc: string;
};
const CardImage: React.FC<CardImageProps> = ({ coverImageSrc }) => {
  return (
    <>
      <div className="relative mx-auto border-secondary bg-slate-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
        <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-black">
          <Image
            src={coverImageSrc}
            className="h-[156px] md:h-[278px] w-full rounded-lg"
            width={1818}
            height={845}
            alt="Project Cover Image."
            loading="lazy"
          />
        </div>
      </div>
      <div className="relative mx-auto bg-secondary rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-destructive"></div>
      </div>
    </>
  );
};

export default CardImage;
