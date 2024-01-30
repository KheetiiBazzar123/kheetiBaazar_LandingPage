// @mui material components
import Icon from "@mui/material/Icon";

// @mui icons
import GitHubIcon from "@mui/icons-material/GitHub";

const routes = [
  {
    name: "Home",
    icon: <Icon>dashboard</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "landing pages",
        collapse: [],
      },
      {
        name: "account",
        collapse: [],
      },
    ],
  },
  {
    name: "Gallery",
    icon: <Icon>view_day</Icon>,
    collapse: [],
  },
  {
    name: "About",
    icon: <Icon>article</Icon>,
    collapse: [],
  },
  {
    name: "Services",
    icon: <GitHubIcon />,
    href: "https://www.github.com/creativetimofficial/material-kit-react",
  },
];

export default routes;
