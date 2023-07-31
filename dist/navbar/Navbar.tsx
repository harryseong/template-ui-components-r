import React from 'react';
import './navbar.scss';

interface NavbarProps {
    title: string
    href?: string
    color?: 'primary' | 'tertiary'
}

function Navbar({
    title,
    href = '#',
    color = 'primary',
    ...props
}: NavbarProps) {

    return (
        <nav className={`navbar navbar-expand-lg bg-body-${color}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href={href}>{title}</a>
            </div>
        </nav>
    )
}

export default Navbar;
