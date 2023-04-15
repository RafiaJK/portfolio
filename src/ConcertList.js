import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import BluDeTiger from './Concerts/BluDeTiger.jpeg'; 
import DomFike from './Concerts/DomFike.jpeg'
import EmpressOf from './Concerts/EmpressOf.jpeg'
import Harry15 from './Concerts/Harry15.jpeg'
import HarryBW from './Concerts/HarryBW.jpeg'
import HarryDouble from './Concerts/HarryDouble.jpeg'
import HarryWide from './Concerts/HarryWide.jpeg'
import Maine from './Concerts/Maine.jpeg'
import MaineCowgirl from './Concerts/MaineCowgirl.jpeg'
import PrettyReckless from './Concerts/PrettyReckless.jpeg'
import RinaJean from './Concerts/RinaJean.jpeg'
import RinaSitting from './Concerts/RinaSitting.jpeg'
import SZAsmoke from './Concerts/SZAsmoke.jpeg'
import SZATVs from './Concerts/SZATVs.jpg'
import MaineWH from './Concerts/MaineWH.jpeg'

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <ImageList
      sx={{ width: 500, height: 350 }}
      variant="quilted"
      cols={4}
      rowHeight={140}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: Harry15,
    title: 'Harry Styles',
    rows: 3,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    rows: 1,
    cols: 2,
  },
  {
    img: HarryWide,
    title: 'Harry Styles',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    cols: 2,
  },
{
    img: RinaJean,
    title: 'Rina Sawayama',
    cols: 4,
    rows: 2,
  },
  {
    img: BluDeTiger,
    title: 'Blu DeTiger',
    rows: 2,
    cols: 2,
  },
  {
    img: EmpressOf,
    title: 'Empress Of',
    rows: 2,
    cols: 2,
  },
  {
    img: DomFike,
    title: 'Dominic Fike',
    rows: 2,
    cols: 1,
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    rows: 1,
    cols: 3,
  },
  {
    img: EmpressOf,
    title: 'Empress Of',
    rows: 1,
    cols: 3,
  },
  {
    img: HarryWide,
    title: 'Harry Styles',
    cols: 4,
    rows: 2
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    cols: 2
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },


];