import React, { Component } from "react"
import classnames from "classnames"
import PerfectScrollbar from "react-perfect-scrollbar"
// import Hammer from "react-hammerjs"
import SidebarHeader from "./SideBarHeader"
import SideBar from './SideBar'


class SideNav extends Component {

    static getDerivedStateFromProps(props, state) {
        if (props.activePath !== state.activeItem) {
            return {
                activeItem: props.activePath
            }
        }
        // Return null if the state hasn't changed
        return null
    }

    state = {
        hoveredMenuItem: window.location.pathname,
        ScrollbarTag: PerfectScrollbar
    }

    mounted = false


    handleSidebarMouseEnter = (id,url) => {
        if (id !== this.state.hoveredMenuItem) {
            this.setState({
                hoveredMenuItem: url,
                activeItem: url
            })
        console.log(this.state)
        } else {
            this.setState({
                hoveredMenuItem: null
            })
        }
    }

    render() {
       

        let {
            menuShadow,
            hoveredMenuItem,
            ScrollbarTag
        } = this.state

        let scrollShadow = (container, dir) => {
            if (container && dir === "up" && container.scrollTop >= 100) {
                this.setState({ menuShadow: true })
            } else if (container && dir === "down" && container.scrollTop < 100) {
                this.setState({ menuShadow: false })
            } else {
                return
            }
        }
        return (
            <div>
               
                        <React.Fragment>
                            <div
                                style={{
                                }}
                                className={classnames(
                                    `main-menu menu-fixed menu-light menu-accordion menu-shadow`
                                )}
                              
                                >
                                <SidebarHeader
                                    menuShadow={menuShadow}
                                />

                                <ScrollbarTag
                                    className={classnames("main-menu-content", {
                                        "overflow-hidden": ScrollbarTag !== "div",
                                        "overflow-scroll": ScrollbarTag === "div"
                                    })}
                                    {...(ScrollbarTag !== "div" && {
                                        options: { wheelPropagation: false },
                                        onScrollDown: container => scrollShadow(container, "down"),
                                        onScrollUp: container => scrollShadow(container, "up"),
                                        onYReachStart: () =>
                                            menuShadow === true &&
                                            this.setState({ menuShadow: false })
                                    })}>
                                    {/* <Hammer
                                        onSwipe={() => {
                                            sidebarVisibility()
                                        }}
                                        direction={
                                            dir === "rtl" ? "DIRECTION_RIGHT" : "DIRECTION_LEFT"
                                        }> */}
                                    <ul className="navigation navigation-main mt-3">
                                        <SideBar
                                            hoverIndex={hoveredMenuItem}
                                            handleSidebarMouseEnter={this.handleSidebarMouseEnter}
                                        />
                                    </ul>
                                    {/* </Hammer> */}
                                </ScrollbarTag>
                            </div>
                        </React.Fragment>
                  
            </div>
        )
    }
}


export default SideNav
