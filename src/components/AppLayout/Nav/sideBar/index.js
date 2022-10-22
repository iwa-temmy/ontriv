import React, { useEffect, useState } from "react";
import classnames from "classnames";
import PerfectScrollbar from "react-perfect-scrollbar";
import SidebarHeader from "./SideBarHeader";
import SideBar from "./SideBar";
import DownSideBar from "./DownSideBar";
import { sideBarMenu } from "../../../../utils/sidebarMenu";
import { useLocation } from "react-router-dom";
// import { useNav } from '../../../../utils/context';

const SideNav = ({
  setCurrentSection,
  showMobileSideBar,
  setShowMobileSideBar,
}) => {
  const location = useLocation();
  const [hoveredMenuItem, setHoveredMenuItem] = useState("");
  const [activeItem, setActiveItem] = useState("");
  const [menuShadow, setMenuShadow] = useState("");
  // const [setSection] = useNav()

  const handleSidebarMouseEnter = (id, url) => {
    if (id !== hoveredMenuItem) {
      setHoveredMenuItem(url);
      setActiveItem(url);
      setShowMobileSideBar(false);

      setCurrentSection(id);
    } else {
      setHoveredMenuItem(null);
    }
  };

  let scrollShadow = (container, dir) => {
    if (container && dir === "up" && container.scrollTop >= 100) {
      setMenuShadow(true);
    } else if (container && dir === "down" && container.scrollTop < 100) {
      setMenuShadow(false);
    } else {
      return;
    }
  };

  useEffect(() => {
    if (location?.pathname) {
      const currentLocationObj = sideBarMenu?.find(
        (item) => item.navLink === location?.pathname
      );
      setCurrentSection(currentLocationObj?.id);
      setHoveredMenuItem(location?.pathname);
    }
  }, [location?.pathname]);

  return (
    <React.Fragment>
      <div
        style={{}}
        className={classnames(
          `main-menu menu-fixed menu-light menu-accordion menu-shadow ${
            showMobileSideBar ? "show" : ""
          }`
        )}
      >
        <SidebarHeader
          menuShadow={menuShadow}
          setShowMobileSideBar={setShowMobileSideBar}
        />

        <PerfectScrollbar
          className={classnames("main-menu-content", {
            "overflow-hidden": PerfectScrollbar !== "div",
            "overflow-scroll": PerfectScrollbar === "div",
          })}
          {...(PerfectScrollbar !== "div" && {
            options: { wheelPropagation: false },
            onScrollDown: (container) => scrollShadow(container, "down"),
            onScrollUp: (container) => scrollShadow(container, "up"),
            onYReachStart: () => menuShadow === true && setMenuShadow(false),
          })}
        >
          <ul className="navigation navigation-main mt-3 ">
            <SideBar
              hoverIndex={hoveredMenuItem}
              activeItem={activeItem}
              handleSidebarMouseEnter={handleSidebarMouseEnter}
            />
          </ul>
          <ul className="navigation navigation-main mt-3 mb-4 fixed-bottom">
            <DownSideBar
              hoverIndex={hoveredMenuItem}
              activeItem={activeItem}
              handleSidebarMouseEnter={handleSidebarMouseEnter}
            />
          </ul>
        </PerfectScrollbar>
      </div>
    </React.Fragment>
  );
};

export default SideNav;
