"use client";
import * as React from "react";

const renderDevice = (deviceType: string, children: React.ReactNode) => {
  switch (deviceType) {
    case "Laptop":
      return (
        <>
          {/** Laptop Device Frame: */}
          <div className="relative mx-auto border-rose-950 dark:border-rose-950 bg-rose-950 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
            <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-rose-950">
              {children}
            </div>
          </div>
          <div className="relative mx-auto bg-rose-900 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-rose-950"></div>
          </div>
        </>
      );
    case "Tablet":
      return (
        <>
          {/** Laptop Tablet Frame: */}
          <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[454px] max-w-[341px] md:h-[682px] md:max-w-[512px]">
            <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
            <div className="rounded-[2rem] overflow-hidden h-[426px] md:h-[654px] bg-white dark:bg-gray-800">
              {children}
            </div>
          </div>
        </>
      );
    case "Phone":
      return (
        <>
          {/** Iphone Device Frame: */}
          <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
            <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
            <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
              {children}
            </div>
          </div>
        </>
      );
    default:
      return null;
  }
};
type DeviceFrameProps = {
  children: React.ReactNode;
  deviceType: string;
};
const DeviceFrame: React.FC<DeviceFrameProps> = ({ children, deviceType }) => {
  return <>{renderDevice(deviceType, children)}</>;
};

export default DeviceFrame;
