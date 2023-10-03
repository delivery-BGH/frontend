import ToggleLanguage from "../ToggleLanguage/ToggleLanguage";
import ToggleTheme from "../ToggleTheme/ToggleTheme";

export default function Menu() {
  return (
    <div className="flex flex-row gap-2 self-end">
      <ToggleTheme />
      <ToggleLanguage />
    </div>
  )
}
