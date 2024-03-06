import { useState, useRef } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { AnimatePresence } from "framer-motion";
import Logo from "../UI/Logo";
import NavigationList from "./NavigationList";
import Controllers from "./Controllers";
import UserBar from "./UserBar";
import {
  MenuItemsPart1,
  MenuItemsPart2,
} from "src/helpers/DefaultData/MenuItems";
import useClickOutside from "src/hooks/useClickOutside";
import useKeyPress from "src/hooks/useKeyPress";
import { Wrapper, MenuBtn, Container } from "./Header.styled";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigationRef = useRef(null);
  const menuBtnRef = useRef(null);

  const toggle = () => setIsOpen((state) => !state);
  const closeMenu = () => setIsOpen(false);

  useKeyPress({ targetKey: "Escape", callback: closeMenu });
  useClickOutside({
    ref: navigationRef,
    callback: closeMenu,
    ignoreRefs: [],
    triggerRef: menuBtnRef,
  });

  const handleMenuBtnClick = () => {
    toggle();
    if (isOpen) closeMenu();
  };

  return (
    <Wrapper>
      <Logo type="full" />
      <MenuBtn
        type="button"
        onClick={handleMenuBtnClick}
        ref={menuBtnRef}
        animate={{ rotate: isOpen ? 90 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <CgMenuGridO />
      </MenuBtn>
      <AnimatePresence>
        {isOpen && (
          <Container
            ref={navigationRef}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -50 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
          >
            <NavigationList title="Car" options={MenuItemsPart1} />
            <NavigationList title="User" options={MenuItemsPart2} />
            <UserBar
              avatarUrl="https://cdn.pixabay.com/photo/2024/02/21/14/14/mountains-8587802_1280.jpg"
              userName="Yellow Mango"
              carBrand="Peugeot"
              carModel="508 RXH"
              carName="White Queen ♕"
              carMileage={174000}
              insurance={new Date("01-02-2025")}
              technicalInspection={new Date("01-15-2025")}
            />
            <Controllers />
          </Container>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

export default Header;
