import React from 'react'
import {
    Section,
    Hero,
    Container,
    Columns,
    Heading,
    Form,
    Tag
} from 'react-bulma-components'
export default () => (
    <Section style={{ padding: 0 }}>
        <Hero gradient color="dark">
            <Hero.Body>
                <Container>
                    <Columns className="is-vcentered">
                        <Columns.Column desktop={{ size: 'half' }}>
                            <Heading>Hi, I'm Ed</Heading>
                            <Heading subtitle>
                                And I'm a programmer with 8 years of
                                professional design and development expierence.
                                Over that time I've worked on building fast,
                                responsive and beautiful websites (like the one
                                you're looking at now).
                            </Heading>
                            <Form.Field className="field is-grouped is-grouped-multiline">
                                <Form.Control>
                                    <Tag.Group gapless>
                                        <Tag color="success">EMAIL</Tag>
                                        <Tag>edward.lombe@icloud.com</Tag>
                                    </Tag.Group>
                                </Form.Control>
                                <Form.Control>
                                    <Tag.Group gapless>
                                        <Tag color="info">PHONE</Tag>
                                        <Tag>+61 474 859 835</Tag>
                                    </Tag.Group>
                                </Form.Control>
                            </Form.Field>
                        </Columns.Column>
                    </Columns>
                </Container>
            </Hero.Body>
        </Hero>
    </Section>
)
