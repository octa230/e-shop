import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FavoriteIcon from '@mui/icons-material/FavoriteBorder';
import CheckIcon from '@mui/icons-material/Check';
import { Facebook, Instagram, Pinterest, Twitter, Whatsapp } from 'react-bootstrap-icons';
import { makeStyles } from '@mui/styles';
import { bgcolor } from '@mui/system';






const actions = [
  { icon: <Facebook />, name: 'Facebook' },
  { icon: <Instagram />, name: 'Instagram' },
  { icon: <Twitter />, name: 'Twitter' },
  { icon: <Pinterest />, name: 'Pinterest' },
  { icon: <Whatsapp />, name: 'Whatsapp' },
];



export default function SpeedMenu() {

  return (
    
    

    <Box sx={{ height: 360, transform: 'translateZ(0px)', flexGrow: 1}}>
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        sx={{ position: 'absolute', bottom: 12, right: 12, padding: 0, bgColor: 'black'}}
        icon={<FavoriteIcon className='speedIcon' openIcon={<CheckIcon />} />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
