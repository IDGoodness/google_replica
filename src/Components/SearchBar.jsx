// This is how you can archive what I told you in office today about search and it's dropdown :

import { useState, useEffect } from "react";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);

  // Load search history from localStorage on mount
  useEffect(() => {
    const storedSearchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
    setSearchHistory(storedSearchHistory);
  }, []);

  // Handle change in search input
  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  // Handle search button click
  const handleSearchClick = () => {
    if (searchText && !searchHistory.includes(searchText)) {
      const updatedSearchHistory = [searchText, ...searchHistory];
      setSearchHistory(updatedSearchHistory);
      localStorage.setItem("searchHistory", JSON.stringify(updatedSearchHistory));
    }
  };

  return (
    <div className="relative">
      <input type="text" value={searchText} onChange={handleSearchChange} className="border rounded px-4 py-2" placeholder="Search..." />
      <button onClick={handleSearchClick} className="absolute right-0 top-0 px-4 py-2 bg-blue-500 text-white rounded">
        🔍
      </button>

      {/* Show search history dropdown */}
      {searchText && (
        <ul className="absolute top-full left-0 right-0 bg-white shadow-lg max-h-60 overflow-y-auto">
          {searchHistory
            .filter((item) => item.toLowerCase().includes(searchText.toLowerCase()))
            .map((item, index) => (
              <li
                key={index}
                className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                onClick={() => setSearchText(item)}
              >
                {item}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;