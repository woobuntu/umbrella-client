import styled, { css } from "styled-components";

const Box = styled.div`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height};
  background: ${(props) => props.color};
  opacity: ${(props) => props.opacity || "1"};
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "0"};
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "row"};
  justify-content: ${(props) => props.justify || "center"};
  align-items: ${(props) => props.align || "center"};
`;

export default Box;
