import { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="w-full h-[64px] p-[32px] flex items-center justify-end ">
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <UserCard />
    </div>
  );
};

export default Header;
