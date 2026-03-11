import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export const LoadingSpinner = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", padding: "2rem" }}>
      <CircularProgress size="5rem" />
    </Box>
  );
};
