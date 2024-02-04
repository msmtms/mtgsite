import { createUseStyles } from 'react-jss';
import { COLORLESS_MANA_BACKGROUND_COLOR } from '@/utils/colors';

export const useStyles = createUseStyles({
  colorlessManaSymbol: {
    backgroundColor: COLORLESS_MANA_BACKGROUND_COLOR,
    borderRadius: '100%',
    fontSize: '1.15rem',
    fontFamily: 'Mplantin',
    width: '1.25rem',
    height: '1.25rem',
    lineHeight: '1.25rem',
    textAlign: 'center',
    display: 'inline-block',
  },
});
