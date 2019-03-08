import 'react-bulma-components/dist/react-bulma-components.min.css'
import React, { Component } from 'react'

import './App.css'

import TitleBanner from './components/title-banner'
import Introduction from './components/introduction'
import Technologies from './components/technologies'
import Projects from './components/projects'
import OpenSource from './components/open-source'

import { Navbar } from 'react-bulma-components'
import EL from './images/EL.png'

class App extends Component<{}, { open: boolean }> {
    public constructor(props: any) {
        super(props)
        this.state = { open: false }
    }

    render() {
        const open = this.state.open ? 'is-active' : ''
        const toggleMenu = () => {
            this.setState({
                open: !this.state.open
            })
        }

        const closeToggle = () => {
            this.setState({ open: false })
            scrollTest()
        }

        return (
            <div>
                <Navbar fixed="top">
                    <Navbar.Brand>
                        <Navbar.Item>
                            <img src={EL} width="28" height="28" />
                        </Navbar.Item>
                        <Navbar.Burger className={open} onClick={toggleMenu} />
                    </Navbar.Brand>
                    <Navbar.Menu className={open}>
                        <Navbar.Container>
                            <Navbar.Item onClick={closeToggle}>
                                Technologies
                            </Navbar.Item>
                            <Navbar.Item>Projects</Navbar.Item>
                        </Navbar.Container>
                    </Navbar.Menu>
                </Navbar>
                <TitleBanner />
                <Introduction />
                <Technologies />
                <Projects />
                <OpenSource />
            </div>
        )
    }
}

function scrollTest() {
    const el = document.getElementById('technologies-section')

    if (!el) {
        return
    }
    const scrollOptions = {
        block: 'start',
        inline: 'nearest',
        behavior: 'smooth'
    }
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default App
