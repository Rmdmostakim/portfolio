import React, { useState } from 'react';
import * as aiIcon from 'react-icons/ai';

export default function Submenu({ icon, title, children }) {
    const [subMenu, setSubmenu] = useState(false);
    const onClickSubmenu = () => {
        setSubmenu(!subMenu);
    };
    return (
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
        <li onClick={onClickSubmenu}>
            <span>
                {icon}
                {title}
                {subMenu ? <aiIcon.AiFillCaretUp /> : <aiIcon.AiFillCaretDown />}
            </span>
            <br />
            {subMenu && children}
        </li>
    );
}
