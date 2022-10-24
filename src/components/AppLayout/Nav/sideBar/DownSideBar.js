import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import { bottomSideBarMenu } from "../../../../utils/sidebarMenu";
import { ChevronRight } from "react-feather";

const SideMenuContent = (props) => {
  // Loop over sidebar menu
  // eslint-disable-next-line
  const menuItems = bottomSideBarMenu.map((item, i) => {
    let renderItem = (
      <li
        className={classnames("nav-item bottom mb-0", {
          activeNav: props.hoverIndex === item?.navLink,
        })}
        key={item.id}
      >
        <Link
          to={item.navLink}
          onClick={(e) => {
            e.stopPropagation();

            props.handleSidebarMouseEnter(
              item.id,
              item?.navLink,
              "bottomSideBarMenu"
            );
          }}
          href=""
          className={`d-flex justify-content-start align-items-center`}
          key={item.id}
        >
          <div className="menu-text bottom">
            <span
              className={classnames(
                `menu-icon-${i % 2 === 0 ? "even" : "odd"}`,
                {
                  activeNav: props.hoverIndex === item?.navLink,
                }
              )}
            >
              {item.icon}
            </span>
            <span
              className={classnames("menu-title", {
                activeNav: props.hoverIndex === item.navLink,
              })}
            >
              {item.title}
            </span>
          </div>
          {props.hoverIndex === item.navLink && item.type === "item" ? (
            <p className="pr-5  mb-0">
              <ChevronRight
                className="menu-toggle-icon font-weight-bold "
                size={20}
              />
            </p>
          ) : (
            ""
          )}
        </Link>
      </li>
    );

    return renderItem;
  });

  return <React.Fragment>{menuItems}</React.Fragment>;
};
export default SideMenuContent;
