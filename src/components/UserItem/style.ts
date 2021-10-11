import { ComponentStylesProps } from 'types/global';
import { createUseStyles } from 'react-jss';

const styles: ComponentStylesProps<any> = {
  UserItem: {
    padding: '15px 0',
    position: 'relative',

    '& p': {
      margin: 0,
      fontSize:'12px'
    }
  },
  AddInfo: {
    marginTop: '5px',
    '& span': {
      color: '#bababa',
      display: 'block',
      fontSize: '8px',
      fontWeight: '500'
    }
  }
};

const createStyles = createUseStyles(styles);

export { createStyles };