'use client'

import { Utils } from "alchemy-sdk";
import { Col, Container, Row } from "react-bootstrap";
import Image from 'react-bootstrap/Image';


export interface IERC721TokenProps {
    symbol: string;
    balance: string;
    logo: string;
}

export default function ERC721Token({ symbol, balance, logo }: IERC721TokenProps) {
    return (
        <Container>
            <Row>
                <Col>
                    <p>Symbol: {symbol}</p>
                    <p>Balance: {balance}</p>
                </Col>
                <Col>
                    <Image src={logo} />
                </Col>
            </Row>
        </Container>
    );
}