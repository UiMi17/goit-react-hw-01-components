// Libraries
import PropTypes from 'prop-types';
// Styles
import {
  StyledTransactionHistory,
  StyledTRow,
  StyledTh,
  StyledTd,
} from './styles/StyledTransactions';

export const TransactionHistory = ({ items }) => {
  return (
    <StyledTransactionHistory>
      <thead>
        <StyledTRow>
          <StyledTh>Type</StyledTh>
          <StyledTh>Amount</StyledTh>
          <StyledTh>Currency</StyledTh>
        </StyledTRow>
      </thead>
      <tbody>
        {items.map(({ type, amount, currency, id }) => {
          return (
            <StyledTRow key={id}>
              <StyledTd>{type}</StyledTd>
              <StyledTd>{amount}</StyledTd>
              <StyledTd>{currency}</StyledTd>
            </StyledTRow>
          );
        })}
      </tbody>
    </StyledTransactionHistory>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
