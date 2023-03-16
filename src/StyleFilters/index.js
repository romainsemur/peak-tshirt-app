import { Chip } from "@mui/material";
import { Stack } from "@mui/material";
import { useStyles } from "core/hooks";
import React from "react";

export default function StyleFilters() {
  const { isLoading, styles } = useStyles();

  const [selectedStyles, selectStyles] = React.useState([1, 2]);

  if (isLoading) return "Loading...";
  return (
    <Stack
      direction="row"
      spacing={2}
      component="ul"
      sx={{ margin: 0, padding: 2 }}
    >
      {styles.map(({ id, name }) => (
        <Chip
          label={name}
          component="li"
          variant="outlined"
          color={selectedStyles.includes(id) ? "primary" : "default"}
          key={id}
          onClick={() => {
            console.log(`Click: ${id}`);
          }}
        />
      ))}
    </Stack>
  );
}
