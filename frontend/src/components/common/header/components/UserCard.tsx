import bellIcon from "../../../../assets/bell icon.png";
import userProfile from "../../../../assets/user_profile.png";
import infoIcon from "../../../../assets/info icon.png";
import verticalDivider from "../../../../assets/vertical_divider.png";
import { useTheme } from "../../../../context/ThemeContext";

const UserCard = () => {
  const { toggleTheme } = useTheme();
  return (
    <>
      <div className="w-[54px] h-[40px] flex justify-center items-center">
        <div className="w-[40px] h-[30px] overflow-hidden flex justify-center">
          <button onClick={toggleTheme}>
            <p className="text-[8px] bg-indigo-600 text-white rounded-[3px]">
              Toggle Theme
            </p>
          </button>
        </div>
      </div>
      <div className="w-[291px] h-[40px] flex items-center justify-center">
        <div className="w-[84px] flex justify-center gap-[18px]">
          <div className="w-[30px] flex justify-center">
            <img src={bellIcon} alt="Notifications" />
          </div>
          <div className="w-[34px] flex justify-center">
            <img src={infoIcon} alt="Info Icon" />
          </div>
        </div>
        <div className="flex w-[49px] justify-center">
          <img src={verticalDivider} alt="vertical divider" />
        </div>
        <div className="w-[158px] h-[40px] flex gap-[12px]">
          <div className="w-[105px] flex-col items-center justify-center">
            <p className="font-inter font-semibold text-[13px] leading-5 tracking-normal">
              Alex Thompson
            </p>
            <p className="font-inter font-bold text-[9px] leading-[15px] tracking-[0.5px]">
              PREMIUM MEMBER
            </p>
          </div>
          <img
            src={userProfile}
            width="40px"
            height="40px"
            alt="User profile"
          />
        </div>
      </div>
    </>
  );
};

export default UserCard;
