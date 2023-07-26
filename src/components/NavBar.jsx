import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const navLinks = [
    {
      id: "about",
      title: "আমাদের সম্পর্কে",
    },
    {
      id: "gallery",
      title: "গ্যালারি",
    },
    {
      id: "executive",
      title: "কার্যনির্বাহী পরিষদ",
    },
    {
      id: "advisory",
      title: "উপদেষ্টা",
    },
    
  ];
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`w-full flex items-center absolute top-0 z-20 bg-primary`}>

    <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
      <Link to="/" className="flex items-center gap-2" onClick={() => {
        setActive("");
        window.scrollTo(0, 0);
      }}
      >
        <img src="logo.png" alt="logo" className='w-24 h-24 object-contain' />
      </Link>
      <ul className='list-none hidden sm:flex flex-row gap-10'>
        {navLinks.map((link) => (
          <li key={link.id}

            className={`${active === link.title ? "text-white" : "text-[#1D0061]"}
           hover:text-white text-[18px]  font-bold cursor-pointer`}
            onClick={() => setActive(link.title)}
          >
            <a href={`#${link.id}`}> {link.title}</a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src={toggle ? "close.svg" : "menu.svg"} alt='menu' className='w-[28px] h-[28px] object-contain cursor-pointer'
          onClick={() => setToggle(!toggle)} />

        <div className={`${toggle ? 'flex' : 'hidden'} p-6 black-gradient top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
        <ul className='list-none flex justify-end items-start flex-col gap-4'>
        {navLinks.map((link) => (
          <li key={link.id}

            className={`${active === link.title ? "text-white" : "text-[#1D0061]"}
           font-poppins font-bold cursor-pointer text-[16px]`}
            onClick={() => {
              setToggle(!toggle)
              setActive(link.title);}}
          >
            <a href={`#${link.id}`}> {link.title}</a>
          </li>
        ))}
      </ul>
        </div>

      </div>

    </div>

  </nav>
  )
}

export default NavBar