import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import LocationOn from "@material-ui/icons/LocationOn";
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import MenuIcon from '@material-ui/icons/Menu';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

// Pages for routes
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Builder from "views/Builder/Builder.js";
import Menu from "views/Menu/index.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";

const dashboardRoutes = [
  { 
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/promotion",
    name: "Promotion",
    icon: "content_paste",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/builder",
    name: "Menu Builder",
    icon: LibraryBooks,
    component: Builder,
    layout: "/admin"
  },
  {
    path: "/menu",
    name: "Menu",
    icon: MenuIcon,
    component: Menu,
    layout: "/admin"
  },
  {
    path: "/location",
    name: "Location",
    icon: LocationOn,
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "Users",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/export",
    name: "Export",
    icon: CloudDownloadIcon,
    component: NotificationsPage,
    layout: "/admin"
  },
  {
    path: "/settings",
    name: "Settings",
    icon: SettingsApplicationsIcon,
    component: NotificationsPage,
    layout: "/admin"
  }

];

export default dashboardRoutes;
