import React, { FC } from "react";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";

const Footer: FC<{}> = () => {
  return (
    <Grid item xs={12}>
      <StyledFooter>
        <p>&copy; 2021 task app.</p>
      </StyledFooter>
    </Grid>
  );
};

const StyledFooter = styled.footer`
  text-align: center;
`;

export default Footer;
