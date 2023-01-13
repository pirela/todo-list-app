import styled from "styled-components";
import { TypeStyledText } from "../../const/Types";

export const StyledContainerCard = styled.div`
  width: 100%;
  display: flex;
  line-height: 16px;
  cursor: pointer !important;
`;

export const StyledIcon = styled.div`
  width: 30px;
  padding: 8px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledText = styled.div`
  text-align: ${({ align }: TypeStyledText) => `${align}`};
  width: ${({ width }: TypeStyledText) => `${width}px`};
  padding: 8px;
  font-size: 16px;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

