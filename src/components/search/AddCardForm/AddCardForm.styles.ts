import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  addCardFormWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'calc(100% - 4rem)',
    padding: '2rem',
    margin: '0 2rem',
    boxSizing: 'border-box',
    border: '1px solid #ccc',
    borderRadius: '0.25rem',
  },
  addCardForm: {
    marginLeft: '5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addCardConditionSelect: {
    width: '20rem',
  },
  addCardConditionButton: {
    width: '10rem',
    marginTop: '3rem',
  },
  addCardPricesWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'space-between',
    marginBottom: '2rem',
    fontSize: '1.5rem',
    fontFamily: 'Open Sans',
    textAlign: 'left',
    width: '20rem',
  },
  addCardPrice: {
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'space-between',
    width: '100%',
  },
  addCardName: {
    fontSize: '2rem',
    fontFamily: 'Open Sans',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
});
