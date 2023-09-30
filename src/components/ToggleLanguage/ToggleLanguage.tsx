
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { LanguagesIcon, Languages, Settings } from "lucide-react"
import { Button } from "../ui/button"
import { useContext } from 'react';
import { LanguageContext } from "@/Context/Language/LanguageContext";

const options: Array<{ icon: JSX.Element, code: string, value: "en" | "pt" }> = [
  {
    icon: <LanguagesIcon className="h-[1.2rem] w-[1.2rem]" />,
    code: "EN-US",
    value: "en"
  },
  {
    icon: <Languages className="h-[1.2rem] w-[1.2rem]" />,
    code: "PT-BR",
    value: "pt"
  },
]

const ToggleLanguage = () => {
  const translate = useContext(LanguageContext);

  const handleChangeLanguage = (value: string) => {
    if (translate.currentlanguage != value)
      translate.handleChangeLanguage();
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Settings className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="border-[1px] grid gap-1 rounded-lg p-1 w-[120px] bg-background">
        {options.map((item, index) => {
          return (
            <DropdownMenuItem
              key={index}
              className="hover:cursor-pointer hover:outline-none"
            >
              <button
                onClick={() => handleChangeLanguage(item.value)}
                className="w-full hover:bg-secondary flex items-center gap-2 pl-2 py-1 rounded-sm"
              >
                {item.icon}
                {item.code}
              </button>
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ToggleLanguage