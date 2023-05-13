import styled from "styled-components/native";

const PostView = styled.View`
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: #ebebeb;
  border-bottom-style: solid;
  background-color: rgba(255, 255, 255, 0.7);
  flex-direction: row;
  align-items: center;
`;
const PostDetails = styled.View`
  flex-direction: column;
  padding: 15px;
  flex: 1;
`;
const PostImage = styled.Image`
  border-radius: 5px;
  width: 70px;
  height: 70px;
`;
const PostTitle = styled.Text`
  color: #000;
  font-size: 16px;
  font-weight: 600;
`;
const PostText = styled.Text`
  margin-top: 3px;
  color: #636363;
`;

export { PostText, PostView, PostImage, PostTitle, PostDetails };
