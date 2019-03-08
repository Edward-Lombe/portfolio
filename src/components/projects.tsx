import React from 'react'
import {
    Section,
    Heading,
    Hero,
    Container,
    Columns
} from 'react-bulma-components'
import projectImage1 from '../images/iPhone-Images-A1.jpg'
import projectImage0 from '../images/iPhone-Images.jpg'
import saleNote0 from '../images/sale-note-0.png'
import saleNote1 from '../images/sale-note-1.png'

export default () => (
    <Section>
        <Hero>
            <Hero.Body>
                <Container>
                    <Columns>
                        <Columns.Column size={12}>
                            <Heading size={1}>Projects</Heading>
                            <Heading size={3} subtitle>
                                Here is a brief snapshot of some of the work I
                                have done
                            </Heading>
                            <hr />
                        </Columns.Column>
                        <Columns.Column size={12}>
                            <Heading size={3}>4me2realize</Heading>
                            <Heading subtitle size={5}>
                                Mobile development of a goal planning and life
                                management app
                            </Heading>
                        </Columns.Column>
                        <Columns.Column>
                            <img src={projectImage0} />
                        </Columns.Column>
                        <Columns.Column>
                            <img src={projectImage1} />
                        </Columns.Column>
                        <Columns.Column size={12}>
                            <Heading size={3}>Farmsource Sale Note</Heading>
                            <Heading subtitle size={5}>
                                An application designed to create and list sale
                                notes for cattle sales
                            </Heading>
                        </Columns.Column>
                        <Columns.Column>
                            <img src={saleNote0} />
                        </Columns.Column>
                        <Columns.Column>
                            <img src={saleNote1} />
                        </Columns.Column>
                    </Columns>
                </Container>
            </Hero.Body>
        </Hero>
    </Section>
)
