import BoxItem from "../BoxItem";
import { AiFillEdit } from "react-icons/ai";
import { BsCalendar3, BsBarChartLineFill } from "react-icons/bs";
import { GiSettingsKnobs } from "react-icons/gi";

const opFooter = [
  {
    title: "HABITS",
    icon: <AiFillEdit />
  },
  {
    title: "CALENDAR",
    icon: <BsCalendar3 />
  },
  {
    title: "PROGRESS",
    icon: <BsBarChartLineFill />
  },
  {
    title: "SETTINGS",
    icon: <GiSettingsKnobs />
  },
];

interface Props {
  item: typeof opFooter[0];
}

const ItemFooter = ({ item }: Props) => {

  return (
    <div className="flex justify-center items-center border-2 border-dotted border-tertiary rounded-3xl w-20 h-16">
      <div className="flex flex-col items-center px-1 py-1">
        {item.icon}
        <p className="text-xs font-semibold text-center">{item.title}</p>
      </div>
    </div>
  )
}

export default function Footer() {
  return (
    <div className="
      bg-secondary fixed bottom-0 min-w-full flex flex-row justify-between p-md
    ">

      {opFooter.map((item, index) => {
        return <ItemFooter key={index} item={item} />
      })}

    </div>
  )
}
