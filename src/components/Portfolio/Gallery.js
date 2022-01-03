import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import {itemData} from "./projects"

export default function Gallery() {
  const handleClick = () => {
    console.log("click");
  }
  
  return (
    <Box
      sx={{
        width: 1,
        height: 1,
      }}
    >
      <ImageList variant="masonry" cols={2} gap={5}>
        {itemData.map((item) => (
          <ImageListItem key={item.img} onClick={handleClick}>
            <img
              src={`${item.img}?w=auto&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}