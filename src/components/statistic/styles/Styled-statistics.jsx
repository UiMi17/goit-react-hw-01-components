import styled from 'styled-components';

export const StyledStatistics = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 350px;
  padding: 100px;
  background-color: #ffcc00;
`;

export const StyledTitle = styled.h2`
  margin-bottom: 40px;
  text-align: center;
  font-size: 56px;
  color: #333;
`;

export const StyledStatList = styled.ul`
  display: flex;
  font-size: 22px;
  width: 300px;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  color: #fff;
  list-style: none;
`;

export const StyledStatElement = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border-radius: 50px;
  margin: 10px;
  background-color: ${props => props.elementColor};
`;
