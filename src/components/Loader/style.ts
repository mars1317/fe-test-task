import { ComponentStylesProps } from 'types/global';
import { createUseStyles } from 'react-jss';

const styles: ComponentStylesProps<any> = {
  Loader: {
    display: 'block',
    width: '80px',
    height: '80px',
    margin:"auto",
    left:"0",
    right:"0",
    top:"0",
    bottom:"0",
    position:"fixed",
    '& div': {
      boxSizing: "border-box",
      display: "block",
      position: "absolute",
      width: "64px",
      height: "64px",
      margin: "8px",
      border: "8px solid #d2def6",
      borderRadius: "50%",
      animation: "$Loader 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite",
      borderColor: "#d2def6 transparent transparent transparent"
    },
    '& div:nth-child(1)':{
      "animationDelay": "-0.45s"
    },
    '& div:nth-child(2)':{
      "animationDelay": "-0.3s"
    },
    '& div:nth-child(3)':{
      "animationDelay": "-0.15s"
    }
  },
    "@keyframes Loader": {
      from: {
        "transform": "rotate(0deg)"
      },
      to: {
        "transform": "rotate(360deg)"
      }
    }
  
};

const createStyles = createUseStyles(styles);

export { createStyles };
