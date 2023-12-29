'use client'

import { OwnedNft, Utils } from "alchemy-sdk";
import { Col, Container, Row } from "react-bootstrap";
import Image from 'react-bootstrap/Image';


export interface IERC721TokenProps extends OwnedNft {}

export default function ERC721Token({
    contract,
    tokenId,
    tokenType,
    name,
    description,
    image,
    raw,
    tokenUri,
    timeLastUpdated,
    acquiredAt,
    collection,
    mint
}: IERC721TokenProps) {
    return (
        <Container>
            <Row>
                <Col>
                    <p>Name: {name?name:'No Name'}</p>
                    <p>Token id: {tokenId}</p>
                </Col>
                <Col>
                    <Image src={image.originalUrl??'https://via.placeholder.com/200'} />
                </Col>
            </Row>
        </Container>
    );
}