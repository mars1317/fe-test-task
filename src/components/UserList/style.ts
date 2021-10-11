import { ComponentStylesProps } from 'types/global';
import { createUseStyles } from 'react-jss';

const styles: ComponentStylesProps<any> = {
  UserList: {
    display: 'flex',
    width: '100%',
    maxWidth: '400px',
    margin: '0 auto',
    padding: '10px 80px',
    minHeight: '385px',
    justifyContent: 'space-evenly',
    backgroundColor:' #FFF',
    boxShadow: '-1px 0px 8px 0px rgba(34, 60, 80, 0.2)',

    '& h2': {
      textTransform: 'uppercase'
    },
  },
  UserContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems:'center',
    width: '300px',
    borderBottom: '2px solid #F1F3FA'
  }
};

const createStyles = createUseStyles(styles);

export { createStyles };