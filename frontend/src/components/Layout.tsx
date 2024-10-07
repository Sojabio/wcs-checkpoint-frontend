import { ReactNode} from "react";
import Header from "./Header";

const Layout = ({ children }: { children: ReactNode }) => {
return (
    <div className='flex flex-col min-h-screen'>
      <Header/>
      <main className=' flex-grow flex justify-center bg-gray-200'>{children}</main>
    </div>
  );
};

export default Layout;
