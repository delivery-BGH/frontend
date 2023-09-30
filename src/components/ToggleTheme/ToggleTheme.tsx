import { Theme, useTheme } from "@/Context/Theme/ThemeContext"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { Cpu, Moon, Sun } from "lucide-react"
import { Button } from "../ui/button"

const options: Array<{ icon: JSX.Element, text: string, theme: Theme }> = [
  {
    icon: <Sun className="h-[1.2rem] w-[1.2rem]" />,
    text: "Light",
    theme: "light"
  },
  {
    icon: <Moon className="h-[1.2rem] w-[1.2rem]" />,
    text: "Dark",
    theme: "dark"
  },
  {
    icon: <Cpu className="h-[1.2rem] w-[1.2rem]" />,
    text: "System",
    theme: "system"
  }
]

const ToggleTheme = () => {
  const { setTheme } = useTheme()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="border-[1px] grid gap-1 rounded-lg p-1 w-[120px] bg-background">
        {options.map((item, index) => {
          return (
            <DropdownMenuItem
              key={index}
              className="hover:cursor-pointer hover:outline-none"
              onClick={() => setTheme(`${item.theme}`)}
            >
              <div className="hover:bg-secondary flex items-center gap-2 pl-2 py-1 rounded-sm">
                {item.icon}
                <p>{item.text}</p>
              </div>
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ToggleTheme