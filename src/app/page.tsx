import Image from 'next/image';
import {
  SomeServerComponent,
  SomeSlowComponent,
} from './_components/server-only';
import { SomeClientComponent } from './_components/client-component';
import { Suspense } from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SomeServerComponent />
      <Suspense fallback={<div>Loading...</div>}>
        <SomeSlowComponent />
      </Suspense>
    </main>
  );
}

export const dynamic = 'force-dynamic';
