import { FaRegFileCode } from "react-icons/fa6";
import { GoRepo} from "react-icons/go";
import { FiUsers, FiUserPlus } from "react-icons/fi";
import { useSelector } from "react-redux";

const Info = () => {
  const { public_repos, followers, following, public_gists } = useSelector(
    (state) => state.github.githubUser
  );

  const items = [
    {
      id: 1,
      icon: <GoRepo/>,
      label: "repos",
      value: public_repos,
      color: "pink",
    },
    {
      id: 2,
      icon: <FiUsers/>,
      label: "followers",
      value: followers,
      color: "green",
    },
    {
      id: 3,
      icon: <FiUserPlus />,
      label: "following",
      value: following,
      color: "purple",
    },
    {
      id: 4,
      icon: <FaRegFileCode />,
      label: "gists",
      value: public_gists,
      color: "yellow",
    },
  ];

  return (
    <div className="my-10 grid grid-cols-2 gap-4 md:grid-cols-4">
      {items.map((item) => (
        <Item key={item.id} {...item}/>
      ))}
    </div>
  );
};

const Item = ({ Id, icon, label, value, color }) => {
  let style = {}
  if (color == "pink"){
    style = { backgroundColor: "rgb(236 158 198)", color: "rgb(218, 74, 145)" }
  } else if (color == "green"){
    style = { backgroundColor: "#e0fcff", color: "#2caeba" }
  } else if (color == "purple"){
    style = { backgroundColor: "rgb(230, 230, 255)", color: "rgb(93, 85, 250)" }
  } else if (color == "yellow"){
    style = { backgroundColor: "rgb(255, 251, 234)", color: "rgb(240, 180, 41)" }
  }
  return (
    <div className="flex items-center gap-4 justify-around bg-white py-5">
      <div style={style} className={`${color} w-10 h-10 flex items-center justify-center rounded-full`}>{icon}</div>
      <div className="flex items-center flex-col ">
        <p className="font-semibold text-3xl">{value}</p>
        <h3 className="text-xl">{label}</h3>
      </div>
    </div>
  );
};

export default Info;
