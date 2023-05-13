import React from "react";
import styled from "styled-components/native";
import { Navigation } from "./Navigation";
import { StatusBar } from "expo-status-bar";

const SafeArea = styled.SafeAreaView`
  flex: 1;
`;

export default function App() {
  return (
    <SafeArea>
      <StatusBar barStyle="light-content" />
      <Navigation />
    </SafeArea>
  );
}
