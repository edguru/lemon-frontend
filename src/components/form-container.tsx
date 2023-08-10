import type { NextPage } from "next";
import UilfacebookMessengerAltIcon from "./uilfacebook-messenger-alt-icon";
import UiltwitterAltIcon from "./uiltwitter-alt-icon";
import AkarIconsinstagramFill from "./akar-iconsinstagram-fill";
import AkarIconswhatsappFill from "./akar-iconswhatsapp-fill";

const FormContainer: NextPage = () => {
  return (
    <div className="absolute top-[1301px] left-[84px] w-[1280px] h-[1253px] text-right text-xl text-whyte font-space-grotesk">
      <img
        className="absolute top-[338px] left-[0px] rounded-[17.63px] w-[400px] h-[400px] object-cover"
        alt=""
        src="/image-161@2x.png"
      />
      <img
        className="absolute top-[0px] left-[338px] rounded-[17.63px] w-[137px] h-[136px] object-cover"
        alt=""
        src="/image-1731@2x.png"
      />
      <img
        className="absolute top-[338px] left-[880px] rounded-[17.63px] w-[400px] h-[400px] object-cover"
        alt=""
        src="/image-157@2x.png"
      />
      <img
        className="absolute top-[338px] left-[440px] rounded-[17.63px] w-[400px] h-[400px] object-cover"
        alt=""
        src="/image-170@2x.png"
      />
      <img
        className="absolute top-[781px] left-[797px] rounded-[17.63px] w-[474px] h-[472px] object-cover"
        alt=""
        src="/image-172@2x.png"
      />
      <img
        className="absolute top-[1029px] left-[540px] rounded-[17.63px] w-56 h-56 object-cover"
        alt=""
        src="/image-160@2x.png"
      />
      <img
        className="absolute top-[781px] left-[540px] rounded-[17.63px] w-56 h-56 object-cover"
        alt=""
        src="/image-160@2x.png"
      />
      <div className="absolute top-[781px] left-[80px] w-[506px] h-[472px]">
        <div className="absolute top-[0px] left-[0px] rounded-xl [background:linear-gradient(132.05deg,_#9747ff,_#ff6813)] w-[506px] h-[472px]" />
        <div className="absolute top-[320.33px] left-[0px] rounded-tl-xl rounded-tr-31xl rounded-b-xl bg-gray-100 shadow-[0px_4px_6px_rgba(0,_0,_0,_0.25)] w-[506px] h-[151.67px]" />
        <UilfacebookMessengerAltIcon />
        <UiltwitterAltIcon />
        <AkarIconsinstagramFill />
        <AkarIconswhatsappFill />
        <div className="absolute top-[198px] left-[29.83px] rounded-xl bg-gray-1100 w-[450.61px] h-[79.2px] flex flex-row py-[85px] px-8 box-border items-center justify-center">
          <div className="relative inline-block w-[353px] shrink-0">
            Enter Your Email
          </div>
        </div>
        <b className="absolute top-[66.36px] right-[26.63px] text-29xl inline-block w-[449.54px] h-[116.66px]">
          Get Your Newsletter
        </b>
        <div className="absolute top-[33.18px] right-[26.63px] text-5xl inline-block w-[422.91px] h-[33.18px]">
          Stay Up To Date
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
