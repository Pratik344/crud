import React from "react";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

export default function GroupButton() {
    const [state, setState] = useState(0)
    const handleIncrement = () => {
        setState(state+1)
      };
    
    const handleDecrement = () => {
        setState(state-1)
      };
      const displayCounter = state > 0

  return (
    <div>
      <ButtonGroup size="small" aria-label="small outlined button group">
        <Button onClick={handleIncrement}>+</Button>
        {displayCounter && <Button disabled>{state}</Button>}
        {displayCounter && <Button onClick={handleDecrement}>-</Button>}
      </ButtonGroup>
    </div>
  );
}
