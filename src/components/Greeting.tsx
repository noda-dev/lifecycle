import React from 'react';

type Props = {
  message: string;
}

const Greeting = (props: Props) => {
  return (
    <div>
      {props.message}
    </div>
  );
}

export default Greeting;