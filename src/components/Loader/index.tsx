import React from 'react';
import { createStyles } from './style';

const Loader = (): JSX.Element => {
  const classes = createStyles();
  return <div className={classes.Loader}><div></div><div></div><div></div><div></div></div>;
};

export default Loader;
