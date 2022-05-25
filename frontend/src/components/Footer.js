import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import LoremIpsum from 'react-lorem-ipsum'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


export default function Footer() {
  return (
    <Grid container spacing={2} columns={16} className='footer'>
  <Grid item xs={12}>
    
        <p>
         <LoremIpsum p={3}/>
        </p>
    
  </Grid>

  <Grid item xs={12}>
    <Item>
        <p>
         <LoremIpsum p={3}/>
        </p>
    </Item>
  </Grid>
  <Grid item xs={12}>
        <p>
         <LoremIpsum p={3}/>
        </p>
  </Grid>
  <Grid item xs={12}>
    <Item>
        <p>
         <LoremIpsum p={3}/>
        </p>
    </Item>
  </Grid>
</Grid>
  )
}
