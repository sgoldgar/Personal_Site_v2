import React from "react";
import NavLinkItems from './navBar__linkItems.jsx';

class NavBar extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            linkItemList : [
                {
                    name: 'Home',
                    href: ''
                },
                {
                    name: 'Projects',
                    href: '',
    
                },
                {
                    name: 'About Me',
                    href: ''
                },
                {
                    name: 'Contact',
                    href: ''
                }
            ]
        }
    }

    render() {
      return (
        <nav>
            <ol>
                <NavLinkItems linkItemList={this.state.linkItemList}/>
            </ol>
        </nav>
      )
    }
  }
  export default NavBar;