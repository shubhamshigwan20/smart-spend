import SearchIcon from "../../../../assets/search_icon.png";

type SearchProps = {
  searchValue: string;
  setSearchValue: (value: string) => void;
};

const SearchBar = (props: SearchProps) => {
  const { searchValue, setSearchValue } = props;
  return (
    <div className="w-[685px] h-[36px] flex justify-center items-center">
      <div className="w-[448px] h-[36px] flex items-center pl-[16px] pr-[16px] gap-[15px] rounded-[12px] bg-[#F1F3FF]">
        <img src={SearchIcon} alt="Search Icon" className="w-[10px] h-[20px]" />

        <input
          type="text"
          id="search"
          value={searchValue}
          onChange={(event) => setSearchValue(event?.target.value)}
          placeholder="Search transactions..."
          className="w-full h-full bg-transparent outline-none font-inter text-[13px] leading-[16px] tracking-[0px]"
        />
      </div>
    </div>
  );
};

export default SearchBar;
