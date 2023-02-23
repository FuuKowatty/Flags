import { useRef, useState } from "react";

import { AiOutlineSearch } from "react-icons/ai";

const ContinentsOptions = ['all' ,'Africa', 'America', 'Asia', 'Europe', 'Oceania']

const UserPanel = ({setFilter, setRegion}) => {
  const focusOnInput = useRef(null);
  const [keyword, setKeyword] = useState('')

  const handleSearchBar = (keyword) => {
    setKeyword(keyword)
    setFilter(keyword)
  }

  const handleRegion = (region) => {
    setRegion(region)
  }

  return (
    <div className="flex justify-between sm:my-10 my-5 w-full sm:flex-row flex-col sm:gap-0 gap-5 dark:text-dark-mode-text">
      <div className="flex  gap-4  White py-4 px-5 shadow-md  rounded-sm dark:bg-dark-blue"
           onClick={() => focusOnInput.current.focus() }
      >
        <AiOutlineSearch size={20} />
        <input
          type="text"
          className="w-[300px] outline-none dark:bg-dark-blue"
          placeholder="Search for a country"
          ref={focusOnInput}
          onChange={(e) => handleSearchBar(e.target.value)}
          value={keyword}
        />
      </div>
      <div>
        <select className="sm:h-full h-[56px] White shadow-md px-5 dark:bg-dark-blue" onChange={(e) => handleRegion(e.target.value)}>
          {ContinentsOptions.map(option => (
            <option key={option} value={option}>{option === 'all' ? 'Filter By Region' : option}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default UserPanel;
