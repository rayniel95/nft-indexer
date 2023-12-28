'use client'

import { Utils } from "alchemy-sdk";
import { Col, Container, Row } from "react-bootstrap";
import Image from 'react-bootstrap/Image';


export interface IERC721TokenProps {
    symbol: string;
    balance: string;
    logo: string;
    decimals: number;
}

export default function ERC721Token({ symbol, balance, logo, decimals }: IERC721TokenProps) {
    const decimalBalance = Utils.formatUnits(balance, decimals);
    return (
        <Container>
            <Row>
                <Col>
                    <p>Symbol: {symbol}</p>
                    <p>Balance: {decimalBalance}</p>
                </Col>
                <Col>
                    <Image src={logo} />
                </Col>
            </Row>
        </Container>
    );
}