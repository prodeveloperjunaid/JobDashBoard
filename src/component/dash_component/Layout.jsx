import TopNavbar from "./TopNavbar";
import SideBar from "./SideBar";
import Box from "@mui/material/Box";

const Layout = ({ children }) => (
  <Box sx={{ 
    display: "flex", 
    flexDirection: "column", 
    height: "100vh", // Changed from minHeight to height
    overflow: "hidden" // Prevent any overflow
  }}>
    <TopNavbar />
    <Box sx={{ 
      display: "flex", 
      flex: 1,
      overflow: "hidden" // Prevent nested scrolling
    }}>
      <SideBar />
      <Box sx={{ 
        flexGrow: 1, 
        padding: 2,
        overflowY: "auto", // Only allow scrolling for the main content if needed
        height: "100%", // Take full height
        display: "flex",
        flexDirection: "column",
      }}>
        {children}
      </Box>
    </Box>
  </Box>
);

export default Layout;