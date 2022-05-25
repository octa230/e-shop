import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs, {tabsClasses} from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function ScrollBar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper', color: 'black',}}>

      <Tabs value={value} 
      onChange={handleChange} 
      centered variant='scrollable' 
      scrollButtons
      aria-label='visible arrows tabs example'
      sx={{
          [`&. ${tabsClasses.scrollButtons}`] : {
              '&.mui-disabled': {opacity:0.9},
          }
      }}  
      >

        <Tab label="Roses" /> 
        <Tab label="Bouquet" />
        <Tab label="Sunflower" />


        <Tab label="Small-box" /> 
        <Tab label="Box-large" />
        <Tab label="Gypso" />

        <Tab label="lillies" /> 
        <Tab label="Love-box-small" />
        <Tab label="solidago" />

        <Tab label="wild-love-box-small" /> 
        <Tab label="wild-love-box-medium" />
        <Tab label="wild-love-box-large" />

        <Tab label="Effortlessly-beautiful" /> 
        <Tab label="Orange-box" />
        <Tab label="Item Three" />

        <Tab label="Blissful-bouquet" /> 
        <Tab label="100-Red-roses" />
        <Tab label="light-love" />
      </Tabs>
    </Box>
  );
}
