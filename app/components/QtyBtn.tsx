import React from 'react';
import { Button } from './elements';

interface Props {
  onIncrease: () => void;
  onDecrease: () => void;
  qty: number;
}

const QtyBtn = (props: Props) => {
  return (
    <div className='flex gap-2 justify-center items-center'>
      <Button variant='danger' onClick={props.onDecrease}>
        -
      </Button>
      <p>{props.qty}</p>
      <Button variant='success' onClick={props.onIncrease}>
        +
      </Button>
    </div>
  );
};

export default QtyBtn;
