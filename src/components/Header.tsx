import React, { FC } from "react";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";

const Header: FC<{}> = () => {
  return (
    <Grid item xs={12}>
      <StyledHeader>
        <h1>React Task App</h1>
      </StyledHeader>
    </Grid>
  );
};

const StyledHeader = styled.header`
  display: flex;
`;

export default Header;
