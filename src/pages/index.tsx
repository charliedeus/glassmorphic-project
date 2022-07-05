import { ReactElement } from 'react';

import Layout from '../components/Layout/Layout';

export default function Home() {
  return (
    <section className="min-h-[calc(100vh-16rem)] h-[calc(100vh-16rem)]">
      <div className="w-full h-full bg-gradient-to-br to-gray-900 via-gray-600 from-gray-300 bg-[length:175%_175%] animate-[heroBackground_8s_ease_infinite]" />
    </section>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
