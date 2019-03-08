import React from 'react'
import {
    Section,
    Hero,
    Columns,
    Container,
    Content,
    Heading
} from 'react-bulma-components'
import * as logos from '../images/logos'
export default () => (
    <Section id="technologies-section" style={{ padding: 0 }}>
        <Hero gradient color="light">
            <br />
            <Hero.Body>
                <Container>
                    <Columns breakpoint="mobile">
                        <Columns.Column size={12}>
                            <Content>
                                <Heading>
                                    Languages, tools, libraries and frameworks
                                </Heading>
                                <blockquote>
                                    Life moves pretty fast. If you don't stop
                                    and look around once in a while, you could
                                    miss it.
                                    <br />- <em>Ferris Buller</em>
                                </blockquote>
                                <br />
                            </Content>
                        </Columns.Column>
                        {Object.entries(logos).map(([name, logo], i) => (
                            <Columns.Column
                                key={i}
                                className="is-half-mobile"
                                tablet={{ size: 'one-third' }}
                                desktop={{ size: 'one-quarter' }}
                                widescreen={{ size: 'one-fifth' }}
                            >
                                <figure className="image container is-128x128">
                                    <img
                                        style={{ display: 'inline' }}
                                        src={logo}
                                    />
                                </figure>
                            </Columns.Column>
                        ))}
                    </Columns>
                </Container>
            </Hero.Body>
        </Hero>
    </Section>
)
