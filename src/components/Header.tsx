import React, { FC } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import styled from "styled-components";

const Header: FC<{}> = () => {
  return (
    <Grid item xs={12}>
      <StyledHeader>
        <h1>Task App</h1>
        <form noValidate autoComplete="off">
          <TextField id="standard-basic" label="Search" />
          <IconButton aria-label="search">
            <SearchIcon />
          </IconButton>
        </form>
      </StyledHeader>
    </Grid>
  );
};

const StyledHeader = styled.header`
  display: flex;
`;

export default Header;
