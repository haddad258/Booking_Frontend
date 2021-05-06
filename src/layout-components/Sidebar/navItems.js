import BarChartIcon from '@material-ui/icons/BarChart';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ChatIcon from '@material-ui/icons/ChatOutlined';
import CodeIcon from '@material-ui/icons/Code';
import DashboardIcon from '@material-ui/icons/DashboardOutlined';
import ErrorIcon from '@material-ui/icons/ErrorOutline';
import FolderIcon from '@material-ui/icons/FolderOutlined';
import DashboardTwoToneIcon from '@material-ui/icons/DashboardTwoTone';
import GradeTwoTone from '@material-ui/icons/GradeTwoTone';
import ListAltIcon from '@material-ui/icons/ListAlt';
import LockOpenIcon from '@material-ui/icons/LockOpenOutlined';
import MailIcon from '@material-ui/icons/MailOutlined';
import PresentToAllIcon from '@material-ui/icons/PresentToAll';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';
import PersonIcon from '@material-ui/icons/PersonOutlined';
import ReceiptIcon from '@material-ui/icons/ReceiptOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';
import ViewModuleIcon from '@material-ui/icons/ViewModule';

var iconsMap = {
  BarChartIcon: BarChartIcon,
  CalendarTodayIcon: CalendarTodayIcon,
  ChatIcon: ChatIcon,
  CodeIcon: CodeIcon,
  DashboardIcon: DashboardIcon,
  ErrorIcon: ErrorIcon,
  FolderIcon: FolderIcon,
  DashboardTwoToneIcon: DashboardTwoToneIcon,
  GradeTwoTone: GradeTwoTone,
  ListAltIcon: ListAltIcon,
  LockOpenIcon: LockOpenIcon,
  MailIcon: MailIcon,
  PresentToAllIcon: PresentToAllIcon,
  PeopleIcon: PeopleIcon,
  PersonIcon: PersonIcon,
  ReceiptIcon: ReceiptIcon,
  SettingsIcon: SettingsIcon,
  ViewModuleIcon: ViewModuleIcon
};

export default [
  {
    label: 'Navigation menu',
    content: JSON.parse(
      `[
  
  {
    "label": "Acceuil",
    "icon": "SettingsIcon",
    "content": [
      {
        "label": "Acceuil",
        "description": "Wide selection of buttons that feature different styles for backgrounds, borders and hover options!",
        "to": "/Acceuil"
      }
    ]
  },
 
  {
  "label": "Cars",
    "icon": "ChatIcon",
    "content": [
  {
    "label": "cars",
    "description": "cars Management.",
    "to": "/cars"
  }
]
},
{
  "label": "Equipment",
    "icon": "ChatIcon",
    "content": [
  {
    "label": "equipment",
    "description": "equipment Management.",
    "to": "/equipment"
  }
]
},
{
  "label": "Hotels",
    "icon": "ChatIcon",
    "content": [
  {
    "label": "hotels",
    "description": "hotels Management.",
    "to": "/hotels"
  }
]
},
  {
    "label": "Settings",
    "icon": "ChatIcon",
    "content": [

      {
        "label": "Users",
        "description": "Users Management.",
        "to": "/Users"
      },
      {
        "label": "transport tools",
        "description": "transport reservation",
        "to": "/Transport"
      },
      {
        "label": "equipment",
        "description": "equipment reservation",
        "to": "/Equipmentreservation"
      }

    ]
  }
]`,
      (key, value) => {
        if (key === 'icon') {
          return iconsMap[value];
        } else {
          return value;
        }
      }
    )
  }
];
