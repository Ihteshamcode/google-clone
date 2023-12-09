import { TbGridDots } from "react-icons/tb";
import ProfileRing from "../assets/profile-ring.svg";

const ProfileIcon = () => {
  return (
    <>
      <div className="flex gap-2">
        <span
          className="h-10 w-10 flex items-center justify-center rounded-full cursor-pointer
           hover:bg-black/[0.05]"
        >
          <TbGridDots size={20} color="#5f6368"/>
        </span>
        <span className="w-8 mt-1 h-8 flex justify-center items-center">
           <img src={ProfileRing}  />
        </span>
      </div>
    </>
  );
};

export default ProfileIcon;
