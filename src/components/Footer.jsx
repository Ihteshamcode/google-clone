import { quickLinks, settingMenu } from "../utils/Constants";

const Footer = () => {
  return (
    <>
      <div className="bg-[#f2f2f2] mt-10">
        <div className="flex py-[15px] px-[15px] md:px-[30px] border-b border-[#dadce0]">
          <span className="text-[#70767a] text-[15px] leading-none">
            Pakistan
          </span>
        </div>
        <div className="flex flex-col md:flex-row justify-between py-3 md:px-[15px] md:py-0">
          <div className="flex justify-items-center">
            {quickLinks.map((v, i) => {
              return (
                <span
                  key={i}
                  className="text-[12px] md:text-14px text-[#70767a] leading-none p-[10px] md:p-[14px]"
                >
                  {v}
                </span>
              );
            })}
          </div>
          <div className="flex justify-items-center">
            {settingMenu.map((v, i) => {
              return (
                <span
                  key={i}
                  className="text-[12px] md:text-14px text-[#70767a] leading-none p-[10px] md:p-[14px]"
                >
                  {v}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
