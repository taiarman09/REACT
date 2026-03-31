import { TiThSmall } from "react-icons/ti";
import { MdFreeBreakfast } from "react-icons/md";
import { TbSoupFilled } from "react-icons/tb";
import { CiBowlNoodles } from "react-icons/ci";
import { BiSolidHomeSmile } from "react-icons/bi";
import { GiFullPizza, GiHamburger } from "react-icons/gi";

export const categories = [
  {
    id: 1,
    name: "all",
    icon: <TiThSmall />,
  },
  {
    id: 2,
    name: "breakfast",
    icon: MdFreeBreakfast,
  },
  {
    id: 3,
    name: "soups",
    icon: TbSoupFilled,
  },
  {
    id: 4,
    name: "pasta",
    icon: CiBowlNoodles,
  },
  {
    id: 5,
    name: "main_course",
    icon: BiSolidHomeSmile,
  },
  {
    id: 6,
    name: "pizza",
    icon: GiFullPizza,
  },
  {
    id: 7,
    name: "burger",
    icon: GiHamburger,
  },
];

export default categories;
