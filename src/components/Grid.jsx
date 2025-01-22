import GridEl from "./GridEl";
import { useState } from "react";

function Grid() {
  const [red, setRed] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [order, setOrder] = useState([]);

  const handleSetRed = (index) => {
    if (index != 8) {
      const newOrder = [...order];
      const newRed = [...red];
      newOrder.push(index);
      setOrder(newOrder);
      newRed[index] = !newRed[index];
      setRed(newRed);
    } else {
      order.forEach((clickIndex, i) => {
        setTimeout(() => {
          setRed((prev) => {
            const next = [...prev];
            next[clickIndex] = 0;

            return next;
          });
        }, 1000 * i);
      });
    }
  };

  return (
    <div className="grid grid-cols-3 gap-2 bg-gray-300 rounded-lg  w-[200px]  p-4 shadow-inner">
      {red.map((_, index) => (
        <div key={index} onClick={() => handleSetRed(index)}>
          <GridEl red={red[index]} index={index} />
        </div>
      ))}
    </div>
  );
}

export default Grid;
