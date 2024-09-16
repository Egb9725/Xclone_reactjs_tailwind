import { useState } from 'react';
import { FaTwitter, FaUserCircle } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { FaHashtag, FaRegBookmark, FaUser } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { PiEnvelopeSimpleBold } from "react-icons/pi";
import { CiViewList, CiCircleMore } from "react-icons/ci";
import Bouton from './Bouton';

// Type for menu items
interface MenuItem {
  icons: JSX.Element;
  label: string;
}

const menuItems: MenuItem[] = [
  { icons: <IoHomeOutline size={30} />, label: 'Home' },
  { icons: <FaHashtag size={30} />, label: 'Explore' },
  { icons: <IoMdNotifications size={30} />, label: 'Notifications' },
  { icons: <PiEnvelopeSimpleBold size={30} />, label: 'Messages' },
  { icons: <FaRegBookmark size={30} />, label: 'Bookmarks' },
  { icons: <CiViewList size={30} />, label: 'List' },
  { icons: <FaUser size={30} />, label: 'Profile' },
  { icons: <CiCircleMore size={30} />, label: 'More' },
  { icons: <Bouton />, label: '' },
];

const Sidebar = () => {
  const [open, setOpen] = useState<boolean>(true);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <nav className={`shadow-md h-screen p-2 flex sticky top-0 flex-col duration-500 bg-black text-white ${open ? 'w-60' : 'w-16'} md:w-60`}>
      <div className='px-3 py-2 h-20 flex justify-between items-center'>
        <FaTwitter size={34} />
        <button onClick={toggleSidebar} className="text-white md:hidden">
          {open ? '←' : '→'}
        </button>
      </div>

      <ul className='flex-1'>
        {menuItems.map((item, index) => (
          <li key={index} className='px-3 py-2 my-2 hover:bg-blue-800 rounded-md duration-300 cursor-pointer flex gap-2 items-center'>
            <div>{item.icons}</div>
            <p className={`${!open ? 'hidden' : ''} md:block`}>
              {item.label}
            </p>
          </li>
        ))}
      </ul>

      <div className='flex items-center gap-2 px-3 py-2'>
        <FaUserCircle size={30} />
        <div className={`leading-5 ${!open ? 'hidden' : ''} md:block`}>
          <p>Bradhley</p>
          <span>saheb@gmail.com</span>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;