import React from "react";

const NavLinkItems = (props) => {
    return props.linkItemList.map(
        (link) => 
            <li>
                <a href={link.href}>
                    {link.name}
                </a>
            </li>
    )
}
export default NavLinkItems;