import styled from 'styled-components';

export const StyledTransactionHistory = styled.table`
  width: 100%;
  margin-top: 120px;
  border-collapse: collapse;
`;

export const StyledTRow = styled.tr`
  &:hover {
    background-color: #f7f7f7;
  }
`;

export const StyledTh = styled.th`
  text-align: center;
  font-weight: bold;
  padding: 15px;
  background-color: #f0f0f0;
  border: none;
  border-bottom: 1px solid #ccc;
`;

export const StyledTd = styled.td`
  text-align: center;
  padding: 15px;
  border: none;
  border-bottom: 1px solid #f0f0f0;
`;
