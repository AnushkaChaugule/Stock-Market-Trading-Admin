import { Avatar, IconButton, Tooltip } from "@mui/material";

const CustomIconButton = ({
  children,
  color,
  description,
  disabled = false,
  onClick = () => {},
}) => {
  return (
    <Tooltip title={description}>
      <Avatar
        sx={{
          bgcolor: disabled ? "grey" : color,
          color: disabled ? "white" : undefined,
        }}
      >
        <IconButton
          disabled={disabled}
          onClick={onClick}
          sx={{
            color: "white",
            // cursor: disabled ? "not-allowed" : "pointer",
            ":disabled": {
              color: "white",
            },
            "& :hover": {
              // bgcolor: hoverBackgroundColor,
              color: "white",
            },
          }}
        >
          {children}
        </IconButton>
      </Avatar>
    </Tooltip>
  );
};

export default CustomIconButton;
