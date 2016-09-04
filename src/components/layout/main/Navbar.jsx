import React from 'react'
import {Link} from 'react-router'

import ObjectAssign from 'object-assign'

import User from 'react-icons/lib/fa/user'
import Image from 'react-icons/lib/fa/image'
import Book from 'react-icons/lib/fa/book'
import StickyNote from 'react-icons/lib/fa/sticky-note'

import Home from 'react-icons/lib/fa/home'

if (process.env.BROWSER) {
    require('./Navbar.css')
}
const scrollThreshold = 400

class Navbar extends React.Component {

    constructor() {
        super()
        this.state = {
            scrollTop: 0,
            navbarClass: 'MainNavbar-navbar'
        }
        this.handleScroll = this.handleScroll.bind(this)
    }
	componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }
    handleScroll(event) {
        this.setState({
            scrollTop: event.srcElement.body.scrollTop
        })

        if(this.state.scrollTop > 0 && this.state.navbarClass !== 'MainNavbar-navbarFixed') {
            this.setState({
                navbarClass: 'MainNavbar-navbarFixed'
            })
        }
        if(this.state.scrollTop === 0 && this.state.navbarClass !== 'MainNavbar-navbar') {
            this.setState({
                navbarClass: 'MainNavbar-navbar'
            })
        }
    }
	render() {
        let navbarClass = this.state.navbarClass;

		return (
			<div>
                <nav className={navbarClass}>
                    <Link className="MainNavbar-navbarItem" to="/">主頁</Link>
                    <Link className="MainNavbar-navbarItem" to="/profile">關於我們</Link>
                    <Link className="MainNavbar-navbarItem" to="/photos">相簿</Link>
                    <Link className="MainNavbar-navbarItem" to="/masterpieces">祝福</Link>
                    
                    <Link className="MainNavbar-navbarItemCollapse" to="/">
                        <Home />
                    </Link>
                    <Link className="MainNavbar-navbarItemCollapse" to="/profile">
                         <User />
                    </Link>
                    <Link className="MainNavbar-navbarItemCollapse" to="/photos">
                        <Book />
                    </Link>
                    <Link className="MainNavbar-navbarItemCollapse" to="/masterpieces">
                        <Image  />
                    </Link>
                </nav>
			</div>
		)
	}
}

export default Navbar
