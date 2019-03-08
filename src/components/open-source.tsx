import React from 'react'
import {
    Section,
    Hero,
    Container,
    Columns,
    Heading
} from 'react-bulma-components'

import openSource from '../images/open-source-contribution.png'
export default () => (
    <Section style={{ padding: 0 }}>
        <Hero gradient color="primary">
            <Hero.Body>
                <Container>
                    <Columns>
                        <Columns.Column>
                            <Heading>Open source</Heading>
                            <img src={openSource} alt="" />
                        </Columns.Column>
                    </Columns>
                </Container>
            </Hero.Body>
        </Hero>
    </Section>
)
