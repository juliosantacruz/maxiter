import { ReactNode } from 'react';
import './BtnNavbar.scss'

type NavBtnProps={
  children: ReactNode;
  isActive?: boolean;
}
const NavBtn = ({children, isActive}:NavBtnProps)=>{

  return(
    <div className={`btnNavbar ${isActive?'active':''}`}>
      {children}
    </div>
  )
}

export default NavBtn
