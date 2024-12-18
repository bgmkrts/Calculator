"use client";

import React from "react";
import { observer } from "mobx-react-lite";
import calculatorStore from "./stores/CalculatorStore";
import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

const CalculatorApp = observer(() => {
  const numberClick = (number: string) => {
    calculatorStore.appendNumber(number);
  };

  const operatorClick = (operator: string) => {
    calculatorStore.setOperator(operator);
  };

  const clear = () => {
    calculatorStore.clear();
  };

  const equals = () => {
    calculatorStore.calculate();
  };

  return (
    <Box
      sx={{
        maxWidth: 300,
        mx: "auto",
        mt: 5,
        fontWeight: "bold",
        textAlign: "center",
      }}
    >
      HESAP MAKİNASI
      <Typography
        variant="h4"
        align="right"
        sx={{
          backgroundColor: "yellow",
          padding: 2,
          borderRadius: 1,
          mb: 2,
          height: "60px",
          fontWeight: "bold",
        }}
      >
        {calculatorStore.currentInput}
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={9}>
          <Grid container spacing={1}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
              <Grid item xs={4} key={number}>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => numberClick(number.toString())}
                >
                  {number}
                </Button>
              </Grid>
            ))}

            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={equals}
              >
                =
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={3}>
          <Button
            variant="outlined"
            color="error"
            fullWidth
            sx={{ mb: 1 }}
            onClick={clear}
          >
            C
          </Button>
          {["+", "-", "*", "/"].map((operator) => (
            <Button
              key={operator}
              variant="outlined"
              fullWidth
              sx={{ mb: 1 }}
              onClick={() => operatorClick(operator)}
            >
              {operator}
            </Button>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
});

export default CalculatorApp;
