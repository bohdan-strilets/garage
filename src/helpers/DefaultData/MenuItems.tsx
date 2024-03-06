import { ImHome3 } from "react-icons/im";
import { IoCarSport } from "react-icons/io5";
import { BsFuelPumpFill } from "react-icons/bs";
import { MdMiscellaneousServices } from "react-icons/md";
import { BiSolidShield } from "react-icons/bi";
import { FaClipboardCheck } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { AiOutlineAreaChart } from "react-icons/ai";
import { ImBook } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { GiCarWheel } from "react-icons/gi";
import { PathsRoute } from "src/types/enums/PathsRoute";

export const MenuItemsPart1 = [
  {
    id: 1,
    label: "Home",
    path: PathsRoute.Home,
    icon: <ImHome3 />,
  },
  {
    id: 2,
    label: "Cars",
    path: PathsRoute.Cars,
    icon: <IoCarSport />,
  },
  {
    id: 3,
    label: "Fuel",
    path: PathsRoute.Fuel,
    icon: <BsFuelPumpFill />,
  },
  {
    id: 4,
    label: "Service",
    path: PathsRoute.Service,
    icon: <MdMiscellaneousServices />,
  },
  {
    id: 5,
    label: "Insurance",
    path: PathsRoute.Insurance,
    icon: <BiSolidShield />,
  },
  {
    id: 6,
    label: "Technical inspection",
    path: PathsRoute.TechnicalInspection,
    icon: <FaClipboardCheck />,
  },
];

export const MenuItemsPart2 = [
  {
    id: 1,
    label: "Profile",
    path: PathsRoute.Profile,
    icon: <FaUser />,
  },
  {
    id: 2,
    label: "Statistics",
    path: PathsRoute.Statistics,
    icon: <AiOutlineAreaChart />,
  },
  {
    id: 3,
    label: "Blog",
    path: PathsRoute.Blog,
    icon: <ImBook />,
  },
  {
    id: 4,
    label: "Contacts",
    path: PathsRoute.Contacts,
    icon: <MdEmail />,
  },
  {
    id: 5,
    label: "About us",
    path: PathsRoute.AboutUs,
    icon: <GiCarWheel />,
  },
];
