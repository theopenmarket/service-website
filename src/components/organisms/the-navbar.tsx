import React, { ReactChild } from 'react';

export interface TheNavbarProps {
  children: ReactChild;
}

export const TheNavbar: React.FC<TheNavbarProps> = ({ children }) => {
  return (
    <div className='vh-100 d-flex align-items-center justify-content-center'>
      <p>Hello world!</p>
      <div className='max-w'>{children}</div>
    </div>
  );
};
