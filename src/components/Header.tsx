import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const Header: FC<{}> = () => {
  return (
    <Grid item xs={12}>
      <header>
        <h1>Task App</h1>
        <form noValidate autoComplete="off">
          <TextField id="standard-basic" label="Search" />
          <IconButton aria-label="search">
            <SearchIcon/>
          </IconButton>
        </form>
      </header>
    </Grid>
  );
}

export default Header;