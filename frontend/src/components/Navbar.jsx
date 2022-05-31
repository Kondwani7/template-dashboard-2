import React,{useEffect, useState} from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import Cart from './Cart';
import Chat from './Chat';
import Notification from './Notification';
import UserProfile from './UserProfile';
import avatar from '../data/avatar.jpg';
import avatar5 from '../data/avatar5.jpeg';
import avatar3 from '../data/avatar3.png';

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

const NavButton = ({title, customFunc, icon, color, dotColor}) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type='button'
      onClick={()=> customFunc()}
      style={{color}}
      className='relative text-xl rounded-full p-3 hover:bg-light-gray'
    >
      <span
        style={{background:dotColor}}
        className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'
      />
        {icon}
    </button>
  </TooltipComponent>
)

const Navbar = () => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState('#03C9D7');
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);

  const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });
  //adjust size
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    //track our screen width
    window.addEventListener('resize', handleResize);
    //call the tracking function
    handleResize();
    //remove the tracker once the function has beeen called
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  //validate when to show our side bar based on the screen size
  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = ()=> setActiveMenu(!activeMenu)

  return (
    <div className='flex justify-between p-2 md:ml-6 md:mr-6 relative'>
      <NavButton title="Menu" customFunc={handleActiveMenu} color={currentColor} icon={<AiOutlineMenu size={25}/>}/>
      <div  className='flex'>
        <NavButton title='Cart' customFunc={() => handleClick('cart')} color={currentColor} icon={<FiShoppingCart/>}/>
        <NavButton title='Chat' dotColor='#03C9D7' customFunc={() => handleClick('chat')} color={currentColor} icon={<BsChatLeft/>}/>
        <NavButton title="Notification" dotColor="rgb(254,201,15)" customFunc={() => handleClick('notification')} color={currentColor} icon={<RiNotification3Line/>}/>
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
            onClick={()=> handleClick('userProfile')}
          >
            <img
              className='rounded-full w-10 h-10'
              src={avatar}
              
              alt="user-profile" 
            />
          </div>
        </TooltipComponent>
        {isClicked.cart && (<Cart/>)}
        {isClicked.chat && (<Chat/>)}
        {isClicked.notification && (<Notification/>)}
        {isClicked.userProfile && (<UserProfile/>)}

        
      </div>
    </div>
  )
}

export default Navbar