import React from "react";
import styled from "styled-components/native";
import { Navigation } from "./Navigation";

const SafeArea = styled.SafeAreaView`
  flex: 1;
`;

export default function App() {
  return (
    <SafeArea>
      <Navigation />
    </SafeArea>
  );
}
