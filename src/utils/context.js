import React, { createContext, useState, useContext } from 'react';


const NavContext = createContext();
const NavProvider = ({ children }) => {
    const [currentSection, setCurrentSection] = useState('Overview');

    // const handleSectionChange = (section) => {

    //     console.log(section);
    //     setCurrentSection(section);
    // }
    const data = [currentSection, setCurrentSection];
    return (
        <NavContext.Provider value={data}>
            {children}
        </NavContext.Provider>
    )
}

const useNav = () => {
    const context = useContext(NavContext);
    if (context === undefined) {
        throw new Error('UseNav can only be used inside NavProvider');
    }
    return context;
}


const NavConsumer = (Child) => (props) => {
    <NavContext.Consumer>
        {(context) => {
            <Child {...props} {...context}>

            </Child>
        }}
    </NavContext.Consumer>
}

export { NavProvider, useNav, NavConsumer }