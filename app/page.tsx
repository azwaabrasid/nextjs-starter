import { HelloWorld } from 'components/HelloWorld';

const Page = () => (
  <div className="page">
    <main className="flex w-full flex-1 flex-col items-center justify-center p-20 text-center">
      <h1 className="text-2xl font-bold">NextJS Starter</h1>
      <HelloWorld />
    </main>
  </div>
);

export default Page;
