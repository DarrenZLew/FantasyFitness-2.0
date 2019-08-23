import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import GroupIcon from "@material-ui/icons/Group";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";

const routes = {
  menu: [
    {
      name: "Score",
      link: "/score",
      Icon: FitnessCenterIcon
    },
    {
      name: "Score Sheet",
      link: "/scoresheet",
      Icon: FormatListNumberedIcon
    },
    {
      name: "League",
      link: "/league",
      Icon: GroupIcon
    }
  ],
  account: [
    {
      name: "My Profile",
      link: "/profile",
      Icon: AccountCircleIcon
    },
    { name: "Logout", link: "/login", Icon: ExitToAppIcon }
  ]
};

export default routes;
