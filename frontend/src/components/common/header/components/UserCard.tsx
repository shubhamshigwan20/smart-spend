import bellIcon from "../../../../assets/bell icon.png";
import userProfile from "../../../../assets/user_profile.png";
import infoIcon from "../../../../assets/info icon.png";
import verticalDivider from "../../../../assets/vertical_divider.png";

const UserCard = () => {
  return (
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
        <img src={userProfile} width="40px" height="40px" alt="User profile" />
      </div>
    </div>
  );
};

export default UserCard;
