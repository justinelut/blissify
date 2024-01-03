import React, { ReactNode } from 'react';

interface DesktopNavProps {
  children: ReactNode;
}

const DesktopNav: React.FC<DesktopNavProps> = ({ children }) => {
  return <div className='w-full py-8 bg-white dark:bg-slate-950'>{children}</div>;
};

export default DesktopNav;
