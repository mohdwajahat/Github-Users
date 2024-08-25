import { useState } from "react";
import searchImg from "../images/search.svg";
import { useDispatch, useSelector } from "react-redux";
import { getGithubUser, rateLimit } from "../store/githubSlice";

const Input = () => {
  const dispatch = useDispatch();
  const { isLoading, requests } = useSelector((state) => state.github);
  const [search, setSearch] = useState("");
  const handleClick = () => {
    dispatch(getGithubUser(search));
    dispatch(rateLimit());
    setSearch("");
  };
  return (
    <div className="w-full py-1 flex md:flex-row flex-col">
      <div className="md:w-3/4 flex justify-between gap-2 items-center">
        <img
          src={searchImg}
          alt="search"
          className=" rounded-lg w-6 h-6 mx-4"
        />
        <input
          type="text"
          className="placeholder:text-gray-400 tracking-widest focus:border-gray-200 text-gray-600  focus:border-2 px-4 py-2 w-full outline-none placeholder:italic"
          value={search}
          placeholder="Enter Github Username"
          onChange={(e) => setSearch(e.target.value)}
          name=""
          id=""
        />
        {!isLoading && (
          <button
            onClick={handleClick}
            className="bg-[#37bcc8] text-white hover:bg-[#80d5dd] hover:text-black rounded-lg px-4 py-2"
          >
            Search
          </button>
        )}
      </div>
      <h3 className=" w-1/4 font-medium tracking-widest m-auto text-center text-xl text-gray-700 pt-2 md:pt-0" >Requests : {requests} / 60</h3>
    </div>
  );
};

export default Input;
