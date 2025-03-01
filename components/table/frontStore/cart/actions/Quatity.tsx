import { useState } from "react";

export default function QuantityItem({ qty }: { qty: number }) {
  const [count, setCount] = useState(qty);
  const classBtn = 'text-center w-full hover:bg-gray-300 hover:font-bold'
  const decrement = () => setCount(count - 1)

  const increment = () => setCount(count + 1)

  const onChange = (val: string) => {
    if (!/^\d+$/.test(val)) return false
    setCount(Number(val))
  }

  return (
    <div className="flex items-center justify-center border rounded-md max-w-sm">
      <button className={classBtn + ' border-r p-2'} onClick={decrement}>-</button>
      <input className="text-center w-10 outline-none" type="text" min={0} value={count} onChange={(e) => onChange(e.target.value)} />
      <button className={classBtn + ' border-l p-2'} onClick={increment}>+</button>
    </div>
  );
}
