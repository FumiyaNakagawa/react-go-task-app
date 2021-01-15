import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';

const Header: FC<{}> = () => {
  return (
    <Grid item xs={12}>
      <header>
        <p>header</p>
      </header>
    </Grid>
  );
}

export default Header;