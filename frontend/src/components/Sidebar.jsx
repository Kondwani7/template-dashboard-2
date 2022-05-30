import React, {useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
import { MdOutlineCancel, MdOutlineDashboardCustomize } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import {useStateContext} from '../context/ContextProvider';

import {links} from '../data/dummy'
 
const Sidebar = () => {
  //const {activeMenu} = useStateContext();
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState('#1D4ED8');
  const handelCloseSideBar = () => {
    if(activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  }

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg font-semibold  text-white  text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';
  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {activeMenu && (
        <>
          <div className='flex justify-between items-center'>
            {/*logo */}
            <Link 
              to="/" 
              onClick={handelCloseSideBar} 
              className='items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold 
                tracking-tight dark:text-white text-slate-900'>
              <MdOutlineDashboardCustomize size={32}/> <span>Dashboard</span>
            </Link>
            <TooltipComponent content="Menu" position='BottomCenter'>
              <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
                style={{color: currentColor}}
                className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 md:hidden'>
                <MdOutlineCancel size={25}/>
              </button>
            </TooltipComponent>
          </div>
          <div className='mt-10'>
            {links.map((item) => (
              <div key={item.title}>
                <p className='text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase'>
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handelCloseSideBar}
                    style={({isActive}) => ({
                      backgroundColor: isActive ? currentColor: '',
                    })}
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  >
                  {link.icon}
                  <span className='captialize'>{link.name}</span>
                  </NavLink>
                    
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Sidebar