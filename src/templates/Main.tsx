import { ReactNode } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased w-full bg-black">
    {props.meta}
    <Header />
    <main className="min-h-screen w-full mx-auto">{props.children}</main>
    <Footer />
  </div>
);
// pt-48 md:pt-56
export { Main };
