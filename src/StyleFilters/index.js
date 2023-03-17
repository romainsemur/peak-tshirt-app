import { Chip, Stack, CircularProgress } from "@mui/material";
import { useStyles } from "core/hooks";
import { useSet } from "react-use";

export default function StyleFilters() {
  const { isLoading, styles } = useStyles();
  const [selectedStyles, { toggle }] = useSet(new Set());

  const selectFilter = (id) => () => {
    toggle(id);
  };

  if (isLoading) return <CircularProgress />;

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
          color={selectedStyles.has(id) ? "primary" : "default"}
          key={id}
          onClick={selectFilter(id)}
        />
      ))}
    </Stack>
  );
}
