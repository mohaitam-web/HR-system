import React, { memo } from "react";
import { AppBar, Toolbar, Box, IconButton, Badge, Avatar } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Notifications from "@mui/icons-material/Notifications";
import Mail from "@mui/icons-material/Mail";
import { NavLink } from "react-router-dom";
import useNavLinks from "@/hooks/useNavLinks";

const Header: React.FC = () => {
  console.log("Header rendered");
  const theme = useTheme();
  const navLinks = useNavLinks();
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left placeholder */}
        <Box sx={{ width: 120 }} />

        {/* Middle - Navigation */}
        <Box sx={{ display: "flex", gap: 3 }}>
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              style={({ isActive }) => ({
                textDecoration: "none",
                fontWeight: 500,
                color: "black",
                borderBottom: isActive
                  ? `4px solid ${theme.palette.secondary.main}`
                  : "none",
                paddingBottom: "1rem",
                paddingTop: "1rem",
                borderRadius: "4px",
              })}
            >
              {label}
            </NavLink>
          ))}
        </Box>

        {/* Right side - Actions */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton color="inherit">
            <Badge badgeContent={2} color="error">
              <Box
                sx={{
                  backgroundColor: "primary.main",
                  borderRadius: "50%",
                  padding: "6px", // adjust to control circle size
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Notifications sx={{ color: "white" }} />
              </Box>
            </Badge>
          </IconButton>

          <IconButton color="inherit">
            <Badge badgeContent={3} color="error">
              <Box
                sx={{
                  backgroundColor: "greenBg.main",
                  borderRadius: "50%",
                  padding: "6px", // adjust to control circle size
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Mail sx={{color: "white"}}/>
              </Box>
            </Badge>
          </IconButton>

          <Avatar alt="User Profile" src={`${"/public/userAvatar.webp" || "/static/images/avatar/1.jpg"}`} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default memo(Header);
