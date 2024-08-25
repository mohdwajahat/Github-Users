import officeImg from "../images/office.svg";
import locationImg from "../images/location.svg";
import linkImg from "../images/link.svg";
import { useSelector } from "react-redux";

const User = () => {
  const {
    avatar_url,
    name,
    twitter_username,
    bio,
    company,
    location,
    blog,
    html_url,
  } = useSelector((state) => state.github.githubUser);

  return (
    <div className="my-10 max-h-64  ">
      <h3 className="text-center bg-white px-3 py-1 text-lg w-16 text-gray-800">
        User
      </h3>
      <div className="text-gray-800 flex h-fit max-h-64 justify-between p-5 overflow-scroll bg-white">
        <div>
          <div>
            <img
              src={avatar_url}
              alt="avatar"
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3>{name}</h3>
              <p>@{twitter_username}</p>
            </div>
          </div>
          <p className="py-2">{bio}</p>
          <div className="flex items-center gap-2">
            <img src={officeImg} alt="office" />
            <p>{company}</p>
          </div>
          <div className="flex gap-2 items-center">
            <img src={locationImg} alt="location" />
            <p>{location}</p>
          </div>
          <div className="flex gap-2 items-center">
            <img src={linkImg} alt="link" />
            <p>{blog}</p>
          </div>
        </div>
        <div>
          <a
            className="relative mt-3 block hover:bg-[#2caeba] hover:text-white text-[#2caeba] border-[#2caeba] border-[1px] rounded-full px-4 py-1"
            href={html_url}
            target="_blank"
          >
            Follow
          </a>
        </div>
      </div>
    </div>
  );
};

export default User;
