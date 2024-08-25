import { useSelector } from "react-redux";

const Followers = () => {
  const followers = useSelector((state) => state.github.followers);
  return (
    <div className="my-20 md:my-10 md:max-h-64">
      <h3 className="text-center bg-white px-3 py-2 text-lg w-32 text-gray-800">
        Followers
      </h3>
      <div className=" max-h-64 overflow-scroll bg-white  ">
        <div className="followers">
          {followers.map((follower, index) => (
            <div
              key={index}
              className="flex items-center gap-4 mx-6 my-3
                "
            >
              <img
                src={follower?.avatar_url}
                alt="avatar"
                className="w-14 h-14 rounded-full"
              />
              <div>
                <h3 className="font-medium">{follower?.login}</h3>
                <a
                  href={follower?.html_url}
                  target="_blank"
                  className="text-gray-700"
                >
                  {follower?.html_url}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Followers;
