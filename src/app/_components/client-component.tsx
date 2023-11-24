'use client';

import { ReactNode, useState } from 'react';
import { SomeServerComponent } from './server-only';

export const SomeClientComponent = (props: { children: ReactNode }) => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col gap-2 rounded-md  bg-red-500 p-4">
      {props.children}
      <p>Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-white p-2 rounded-md text-black"
      >
        Increment
      </button>
    </div>
  );
};
