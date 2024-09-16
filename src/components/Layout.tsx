import React, { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <div className="left-sidebar" />
            {children}
            <div className="right-sidebar" />
        </>
    );
};

export default Layout;