import React from 'react'
import { NavLink } from 'react-router-dom';
import { Box, Typography } from '@mui/material'

export default function PointNavigationMenu() {
          const [index, setIndex] = React.useState(1);
          const handleClick = i => (e) => {
            e.preventDefault();
            setIndex(i);
          };
          return (
            <Box height={56} display={'flex'}>
                
                  <NavLink as={'div'} active={index === 0} onClick={handleClick(0)}>
                    <Typography>Home</Typography>
                  </NavLink>
                  <NavLink as={'div'} active={index === 1} onClick={handleClick(1)}>
                    <Typography>Shops</Typography>
                  </NavLink>
                  <NavLink as={'div'} active={index === 2} onClick={handleClick(2)}>
                    <Typography>Portfolio</Typography>
                  </NavLink>
                  <NavLink as={'div'} active={index === 3} onClick={handleClick(3)}>
                    <Typography>Blog</Typography>
                  </NavLink>
                
            </Box>
          )
        }