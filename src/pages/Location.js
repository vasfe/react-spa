import React from 'react';
import { Page, Header, Paragraph, Line } from "./PageComponents"
import PublicMap from "../components/PublicMap"

const Location = () => (
        <Page>
                <Header>Lorem ipsum dolor sit amet</Header>
                <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </Paragraph>
                <Line />
                <Header>Where to find us</Header>
                <PublicMap />
                <p>House in the River<br />Inside the River,<br />Scotland,<br />LN1 1PS</p>
                <Line />
        </Page>
)
export default Location

