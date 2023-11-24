import fs from 'fs';

export async function SomeServerComponent() {
  return <div>header like</div>;
}

export async function SomeSlowComponent() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return <div>Slow guy</div>;
}
