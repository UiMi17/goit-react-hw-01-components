import styled from 'styled-components';

export const StyledFriendListElement = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  width: 170px;
  height: 70px;
  padding: 15px;
  background-color: #c6c6225b;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

export const StyledStatus = styled.span`
  width: 20px;
  height: 20px;
  margin-right: 20px;
  border-radius: 50%;
  background-color: ${props => props.spanColor};
`;
