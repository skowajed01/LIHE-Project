import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";

const ModelPopUp = ({ isopen, setpopup }) => {
  console.log("model popup");
  return (
    <Dialog
      open={isopen}
      fullWidth
      maxWidth="sm"
      sx={{
        "& .MuiDialog-container": {
          alignItems: "flex-start",
        },
      }}
    >
      <DialogTitle align="center" p={0}>
        <Typography display={"inline-block"} variant="h3" color={"GrayText"}>
          Update Country Details
        </Typography>
        <Tooltip title="Close">
          <IconButton
            sx={{ float: "right", display: "inline-block" }}
            onClick={() => setpopup(!isopen)}
          >
            <CloseIcon color="primary"></CloseIcon>
          </IconButton>
        </Tooltip>
      </DialogTitle>
      <DialogContent>
        <Stack spacing={2} margin={2}>
          <TextField variant="outlined" label="CountryName" />
          <TextField variant="outlined" label="Currency" />
          <TextField variant="outlined" label="Nationality Name" />
          <TextField variant="outlined" label="Calling Code" />
          <Button color="primary" variant="contained">
            Submit
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default ModelPopUp;
