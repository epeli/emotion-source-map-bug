import React from "react";
import styled from "@emotion/styled";
import { View } from "../components/View";

const Container = styled(View)`
    background-color: hotpink;
`;

function Hello() {
    return <Container>Wrong source map target :(</Container>;
}

export default Hello;
