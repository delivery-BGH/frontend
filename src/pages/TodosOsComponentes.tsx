import { useState } from 'react'
import { AiOutlinePlusCircle } from "react-icons/ai"
import Button from "../components/Button/Button"
import BarraDeMedicao from "../components/BarraDeMedicao/BarraDeMedicao"
import Input from "../components/Input/Input"
import Switch from "../components/Switch/Switch"
import Checkbox from '../components/Checkbox/Checkbox'
import SelectSearch from '../components/SelectSearch/SelectSearch'

function TodosOsComponentes() {
  const [enabled, setEnabled] = useState(false);

  const [check, setCheck] = useState(true);

  return (
    <div className="flex flex-col justify-center items-center gap-4 border-2 border-primary rounded-md pt-3 pb-3 w-full">

      <div className='flex flex-col gap-4 w-8/12'>

        <Button>Primary</Button>

        <Button variant="secondary">Secondary</Button>

        <Button variant="tertiary">Tertiary</Button>

        <Button disabled>Disabled</Button>

        <Button><AiOutlinePlusCircle className="text-secondary" /></Button>

        <BarraDeMedicao length={4} />

        <Input label="Label" placeholder="Placeholder" />
        <Input label="Label" value="Value" />
        <Input label="Label" value="Disabled" disabled />
        <Input multiline={true} label="Label" value="123" />

        <Switch onChange={() => { setEnabled(!enabled) }} />
        <Switch defaultEnable={true} disabled />

        <Checkbox onChange={() => setCheck(!check)} checked={!check} disabled />

        <div>
          <SelectSearch />
        </div>

      </div>
    </div>
  )
}

export default TodosOsComponentes
