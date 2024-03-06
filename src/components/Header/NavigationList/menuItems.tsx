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

export const menuItemsPart1 = [
  {
    id: 1,
    label: "Home",
    path: "/",
    icon: <ImHome3 />,
  },
  {
    id: 2,
    label: "Cars",
    path: "/",
    icon: <IoCarSport />,
  },
  {
    id: 3,
    label: "Fuel",
    path: "/",
    icon: <BsFuelPumpFill />,
  },
  {
    id: 4,
    label: "Service",
    path: "/",
    icon: <MdMiscellaneousServices />,
  },
  {
    id: 5,
    label: "Insurance",
    path: "/",
    icon: <BiSolidShield />,
  },
  {
    id: 6,
    label: "Technical inspection",
    path: "/",
    icon: <FaClipboardCheck />,
  },
];

export const menuItemsPart2 = [
  {
    id: 1,
    label: "Profile",
    path: "/",
    icon: <FaUser />,
  },
  {
    id: 2,
    label: "Statistics",
    path: "/",
    icon: <AiOutlineAreaChart />,
  },
  {
    id: 3,
    label: "Blog",
    path: "/",
    icon: <ImBook />,
  },
  {
    id: 4,
    label: "Contacts",
    path: "/",
    icon: <MdEmail />,
  },
  {
    id: 5,
    label: "About as",
    path: "/",
    icon: <GiCarWheel />,
  },
];
