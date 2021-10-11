import { ComponentStylesProps } from 'types/global';
import { createUseStyles } from 'react-jss';

const styles: ComponentStylesProps<any> = {
  Dropdown: {
    position: 'relative',
    width: '130px',
  },
  List: {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
    position: 'absolute',
    zIndex: 1,
    backgroundColor: '#FFFFFF',
    width: '100%',
    border: '1px solid #F1F3FA',
    listStyle: 'none',
    maxWidth: 'inherit',
    '& li': {
      padding: '8px 10px',
      fontWeight: 400,
      '&:hover': {
        cursor: 'pointer',
        backgroundColor: '#b1d4dc'
      }
    }
  },
  DropdownButton: {
    border: '1px solid #F1F3FA',
    backgroundColor: '#F1F3FA',
    padding: '5px 15px',
    color: '#5e5e5e',
    fontSize: '12px',
    width: 'inherit',

    '&:hover':{
      cursor: 'pointer',
      backgroundColor: '#dce2f6',
      borderColor: '#dce2f6'
    }
  }
};

const createStyles = createUseStyles(styles);

export { createStyles };
