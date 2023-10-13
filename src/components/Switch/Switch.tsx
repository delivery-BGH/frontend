/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  Switch as SwitchHeadlessUi,
  type SwitchProps as HeadlessSwitchProps,
} from "@headlessui/react";

export type SwitchProps = {
  defaultEnable?: boolean;
  disabled?: boolean;
  onChange?: (enabled: boolean) => void;
} & HeadlessSwitchProps<any>;

const Switch = ({
  defaultEnable: enabledByDefault,
  disabled,
  onChange,
  ...rest
}: SwitchProps) => {
  const [enabled, setEnabled] = useState(enabledByDefault);

  const toogle = () => {
    const newState = !enabled;
    setEnabled(newState);
    onChange?.(newState);
  };

  return (
    <SwitchHeadlessUi
      {...rest}
      checked={enabled}
      onChange={toogle}
      disabled={disabled}
      className={`${enabled ? "bg-primary" : "bg-secondary"}
        disabled:bg-disabled
        relative inline-flex h-[24px] w-[47px] pl-[2px] pt-[1px] pb-[1px] cursor-pointer rounded-full border-2 border-primarytransition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-whitefocus-visible:ring-opacity-75`}
    >
      <span className="sr-only">switch toogle</span>
      <span
        aria-hidden="true"
        className={`${enabled ? "translate-x-[21px]" : "translate-x-0"}
          ${enabled ? "bg-secondary" : "bg-primary"}
            pointer-events-none h-[18px] w-[18px]  transform rounded-full  transition duration-200 ease-in-out`}
      />
    </SwitchHeadlessUi>
  );
};

export default Switch;
