import { useState } from "react";
import { Link } from "react-router-dom";
import DonationModal from "../features/DonationModal";
import NavBarLogo from "./NavBarLogo";

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
      id: "executives",
      title: "কার্যনির্বাহী পরিষদ",
    },
    {
      id: "advisors",
      title: "উপদেষ্টা",
    },
  ];
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const openDonationModal = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <nav
        className={`w-full flex items-center absolute top-0 z-20 bg-primary`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <NavBarLogo />
          </Link>
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-[#1D0061]"
                }
     hover:text-white text-[18px]  font-bold cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}> {link.title}</a>
              </li>
            ))}
          </ul>

          <button
            className="bg-[#1D0061] text-white px-6 lg:px-10 py-2 lg:py-4 rounded-md ml-20 lg:ml-0 lg:-left-16 "
            onClick={openDonationModal}
          >
            দান করুন
          </button>

          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? "close.svg" : "menu.svg"}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />

            <div
              className={`${
                toggle ? "flex" : "hidden"
              } p-6 black-gradient top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            >
              <ul className="list-none flex justify-end items-start flex-col gap-4">
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? "text-white" : "text-[#1D0061]"
                    }
     font-poppins font-bold cursor-pointer text-[16px]`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title);
                    }}
                  >
                    <a href={`#${link.id}`}> {link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="my-16">
        {isOpen && <DonationModal isOpen={isOpen} setIsOpen={setIsOpen} />}
      </div>
    </div>
  );
};

export default NavBar;
