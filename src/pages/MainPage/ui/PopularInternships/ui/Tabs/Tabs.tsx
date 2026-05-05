// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import { Box } from "@mui/material";
// import CustomTabPanel from "./CustomTabPanel/CustomTubPanel";
// import { useState } from "react";

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }

// export const Tabss = () => {
//   // создаём state для активной вкладки
//   const [value, setValue] = useState(0);

//   // функция для изменения вкладки
//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <>
//       <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           aria-label="basic tabs example"
//         >
//           <Tab label="Item One" {...a11yProps(0)} />
//           <Tab label="Item Two" {...a11yProps(1)} />
//         </Tabs>
//       </Box>
//       <CustomTabPanel value={value} index={0}>
//         Item One
//       </CustomTabPanel>
//       <CustomTabPanel value={value} index={1}>
//         Item Two
//       </CustomTabPanel>
//     </>
//   );
// };
