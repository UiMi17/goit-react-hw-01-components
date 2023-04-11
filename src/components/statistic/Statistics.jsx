// Libraries
import PropTypes from 'prop-types';
// Styles
import {
  StyledStatistics,
  StyledTitle,
  StyledStatList,
  StyledStatElement,
} from './styles/Styled-statistics';

export const Statistics = ({ stats, title }) => {
  // Rand hex color func
  function generateRandomHexColor() {
    let hex = '#';
    const characters = '0123456789ABCDEF';
    for (let i = 0; i < 6; i++) {
      hex += characters[Math.floor(Math.random() * 16)];
    }
    return hex;
  }

  return (
    <StyledStatistics>
      {title && <StyledTitle>{title}</StyledTitle>}
      <StyledStatList>
        {stats.map(({ id, label, percentage }) => {
          let randomHexColor = generateRandomHexColor();
          return (
            <StyledStatElement key={id} elementColor={randomHexColor}>
              <span className="label">{label}</span>
              <span className="percentage">{percentage}%</span>
            </StyledStatElement>
          );
        })}
      </StyledStatList>
    </StyledStatistics>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
};
