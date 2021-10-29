import { RiHome2Line, RiNumbersLine } from "react-icons/ri";
export const menus = [
  {
    id: "home",
    name: "Home",
    icon: <RiHome2Line size='18' />,
    path: "/",
  },
  {
    id: "logaritmos",
    name: "Logaritmos",
    icon: <RiNumbersLine size='18' />,
    path: "/log",
  },
  {
    id: "derivadas",
    name: "Derivada",
    icon: <RiNumbersLine size='18' />,
    path: "/derivadas",
  },
  // {
  //   id: "algebralinear",
  //   name: "Álgebra Linear",
  //   icon: <RiGridLine size="18" />,
  //   path: "/algbl",
  // },
  {
    id: "fourier",
    name: "Fourier",
    icon: <RiNumbersLine size='18' />,
    path: "/fourier",
  }
];
