import React, { Component } from "react"
import { Link } from "react-router-dom"
import classnames from "classnames"
import sideBarMenu from "../../../../utils/sidebarMenu"
import { ChevronRight } from "react-feather"



class SideMenuContent extends Component {


    render() {
        // Loop over sidebar menu
        // eslint-disable-next-line
        const menuItems = sideBarMenu.map((item, i) => {
            let renderItem = (
                <li
                    className={classnames("nav-item", {
                        active: this.props.hoverIndex === item.navLink
                    })}
                    key={item.id}
                >
                    <Link
                        to={item.navLink}
                        onClick={e => {
                            e.stopPropagation()

                            this.props.handleSidebarMouseEnter(item.id, item.navLink)

                        }}
                        href=""
                        className={`d-flex justify-content-start align-items-center`}

                        key={item.id}
                    >
                        <div className="menu-text">
                            <span className={classnames(`menu-icon-${i % 2 === 0 ? 'even' : 'odd'}`, {
                                active: this.props.hoverIndex === item.navLink
                            })}>
                                {item.icon}
                            </span>
                            <span className={classnames("menu-title", {
                                active: this.props.hoverIndex === item.navLink
                            })}>
                                {item.title}
                            </span>
                        </div>
                        {(this.props.hoverIndex === item.navLink && item.type === "item")

                            ?
                            <p className="pr-5  mb-0">
                                <ChevronRight className="menu-toggle-icon font-weight-bold " size={20} />

                            </p>
                            : (
                                ''
                            )}
                    </Link>
                </li>
            )

            return renderItem
        })

        return <React.Fragment>
            {menuItems}
        </React.Fragment>
    }
}
export default SideMenuContent
