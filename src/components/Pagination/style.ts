import { ComponentStylesProps } from 'types/global';
import { createUseStyles } from 'react-jss';

const styles: ComponentStylesProps<any> = {
  Pagination: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',

    '& div': {
      paddingTop:'10px'
    }
  },
  PaginationControl :{
    display: 'flex'
  },

  PaginationButton: {
    cursor: 'pointer',
    
    fontSize: '12px',
    textAlign:'center',
    backgroundColor: '#FFFFFF',
    
    padding: '8px 12px',
    margin:'5px',
    boxShadow: '0 0px 5px rgba(0,0,0,0.16), 0 0px 2px rgba(0, 0, 0, 0.075)',
    textDecoration: 'none'
  },

  active: {
    backgroundColor:'#b1d4dc'
  }
};

const createStyles = createUseStyles(styles);

export { createStyles };
