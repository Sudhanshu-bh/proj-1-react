import React, {useState, createContext} from 'react'

export const SidenavContext = createContext()

export const SidenavStateProvider = (props) => {
    
    const [SidenavOpen, setSidenavOpen] = useState(true);
    
    return (
        <SidenavContext.Provider value={[SidenavOpen, setSidenavOpen]}>
            {props.children}
        </SidenavContext.Provider>
    );
}
