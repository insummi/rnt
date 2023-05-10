import { StatusBar } from 'expo-status-bar';
import styled from "styled-components/native";

const AppContainer = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  `

const StyledText = styled.Text`
  color: green;
`

export default function App() {
  return (
    <AppContainer>
      <StyledText>Open up App.js to start working on your app!</StyledText>
      <StatusBar style="auto" />
    </AppContainer>
  );
}
