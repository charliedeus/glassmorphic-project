import { Header } from '../Header';

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="bg-gray-300 mt-[14rem] max-h-[calc(100vh-16rem)] mb-8">
        {children}
      </main>
    </>
  );
}
