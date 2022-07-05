import { ReactElement } from 'react';

import Layout from '../components/Layout/Layout';

export default function Home() {
  return (
    <section className="min-h-[calc(100vh-16rem)] h-[calc(100vh-16rem)] rounded-3xl overflow-auto">
      <div className="w-full h-full bg-gradient-to-br to-gray-900 via-gray-600 from-gray-300 bg-[length:175%_175%] animate-[heroBackground_8s_ease_infinite]">
        <div className="w-[1440px] max-w-[1440px] h-full mx-auto grid grid-cols-[1fr_46.7rem] items-center  gap-28">
          <header className="px-40 flex flex-col gap-20">
            <h1 className="font-bold text-5xl text-gray-900 leading-relaxed">
              Lörem ipsum agnostitologi metadiktisk om besam inte pseudotån
              terafiering
            </h1>

            <p className="text-gray-400 font-bold text-4xl text-right">
              Lorem ipsum dolor sit ame
            </p>
          </header>
          <div className="w-[46.7rem] h-[71.6rem] bg-gray-900 rounded-[3rem] flex flex-col items-center justify-center p-14 gap-14">
            <div className="bg-[url('https://images.unsplash.com/photo-1571659315127-8e882c129e0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=716&q=60')] bg-cover bg-no-repeat w-[30rem] h-[30rem] rounded-full border border-[0.75rem] border-gray-100" />

            <header className="px-[4rem] flex flex-col gap-[4rem]">
              <h1 className="text-[2.4rem]  text-gray-100 font-bold">
                Sed ut perspiciatis unde omnis iste natus?
              </h1>
              <p className="text-gray-400 font-normal">
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, and expound the actual
                teachings of the great explorer of the truth.
              </p>
            </header>
          </div>
        </div>
      </div>
    </section>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
