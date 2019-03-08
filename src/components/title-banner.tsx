import React from 'react'
import {
    Section,
    Hero,
    Container,
    Columns,
    Heading
} from 'react-bulma-components'
import { jarallax, jarallaxElement, jarallaxVideo } from 'jarallax'
setTimeout(() => {
    jarallax(document.querySelectorAll('.jarallax'), {
        automaticResize: true,
        type: 'scale'
    })
}, 500)

// jarallaxElement()
import lbg from '../images/lbg.jpg'
const textShadow = {
    textShadow: '4px 4px 8px rgba(0, 0, 0, 1)'
}

import headshot from '../images/headshot.jpg'
export default () => (
    <div className="jarallax">
        <img className="jarallax-img" src={lbg} alt="" />

        <Section style={{ padding: 0 }}>
            <Hero>
                <Hero.Body>
                    <Container>
                        <Columns
                            style={{ minHeight: '80vh' }}
                            centered
                            className="is-vcentered"
                        >
                            <Columns.Column desktop={{ size: 'half' }}>
                                <Heading className="with-text-shadow" size={1}>
                                    EDWARD LOMBE
                                </Heading>
                                <Heading
                                    className="with-text-shadow"
                                    size={3}
                                    subtitle
                                >
                                    CODE. DESIGN. UX \ UI
                                </Heading>
                                <hr style={{ background: 'black' }} />
                                <p className="with-text-shadow">
                                    FROM CANBERRA, AUSTRALIA 🇦🇺
                                </p>
                            </Columns.Column>
                            <Columns.Column desktop={{ size: 'half' }}>
                                <figure className="image">
                                    <img
                                        style={{
                                            boxShadow:
                                                '4px 4px 8px 2px rgba(0,0,0,0.5)'
                                        }}
                                        className="is-rounded"
                                        src={headshot}
                                        alt="This is a bad photo of me, but at least I am using an alt tag"
                                    />
                                </figure>
                            </Columns.Column>
                        </Columns>
                    </Container>
                </Hero.Body>
            </Hero>
        </Section>
    </div>
)
