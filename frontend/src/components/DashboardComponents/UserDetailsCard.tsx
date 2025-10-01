import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar  from "@mui/material/Avatar";
import CustomButton from "../common/CustomButton";
import { colorsStatus } from "@/utilities/constants";

const UserDetailsCard: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main", 
        borderRadius: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        px: 6,
        py: 4,
        color: "white",
      }}
    >
      {/* Left Side: Avatar + User Info */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Avatar
          src="/public/userProfile.webp" 
          alt="User Profile"
          sx={{
            width: 128,
            height: 128,
          }}
        />
        <Box>
          <Typography variant="h5" fontWeight="bold" sx={{pb: 1}}>
            Redwan Husein
          </Typography>
          <Typography variant="h5">UI / UX Designer & UX Writer</Typography>
        </Box>
      </Box>

      {/* Right Side: Button + Arrow */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 3}}>
        <CustomButton text={"Edit Profile"} bgColor={colorsStatus.SECONDARY} sx={{px: 5, position: "relative", top: 7, fontSize: "18px"}}/>
        <Box
          component="img"
          src="/public/arrow 2.webp" 
          alt="Arrow Decoration"
          sx={{ width: 100, height: "auto", scale: 2, position: "relative", left: 22}}
        />
      </Box>
    </Box>
  );
};

export default UserDetailsCard;
