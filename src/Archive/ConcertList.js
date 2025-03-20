import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import AM from './Concerts/AM.jpeg'
import BluDeTiger from './Concerts/BluDeTiger.jpeg'; 
import DomFike from './Concerts/DomFike.jpeg'
import EmpressOf from './Concerts/EmpressOf.jpeg'
import Harry15 from './Concerts/Harry15.jpeg'
import HarryBW from './Concerts/HarryBW.jpeg'
import HarryDouble from './Concerts/HarryDouble.jpeg'
import HarryWide from './Concerts/HarryWide.jpeg'
import Mahalia from './Concerts/Mahalia.jpeg'
import Maine from './Concerts/Maine.jpeg'
import MaineWH from './Concerts/MaineWH.jpeg'
import MaineWH2 from './Concerts/MaineWH2.jpeg'
import Portugal from './Concerts/Portugal.jpeg'
import MaineCowgirl from './Concerts/MaineCowgirl.jpeg'
import PrettyReckless from './Concerts/PrettyReckless.jpeg'
import RinaJean from './Concerts/RinaJean.jpeg'
import RinaSitting from './Concerts/RinaSitting.jpeg'
import SZAsmoke from './Concerts/SZAsmoke.jpeg'
import SZATVs from './Concerts/SZATVs.jpg'
import SZctrl from './Concerts/SZctrl.jpeg'
import VampireWeekend from './Concerts/VampireWeekend.jpeg'
import './about.css'

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

  <div className='concert-grid'>
    <ImageList
      sx={{height: 400 }}
      variant="quilted"
      cols={4}
      // rowHeight={150}
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
  </div>
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
    img: Mahalia,
    title: 'Mahalia',
    rows: 1,
    cols: 2,
  },
  {
    img: HarryWide,
    title: 'Harry Styles',
    cols: 2,
  },
  {
    img: SZctrl,
    title: 'SZA',
    cols: 2,
  },
{
    img: RinaSitting,
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
    img: AM,
    title: 'Arctic Monkeys',
    rows: 2,
    cols: 3,
  },
  {
    img: HarryDouble,
    title: 'Harry Styles',
    cols: 4,
    rows: 2
  },
  {
    img: Portugal,
    title: 'Portugal The Man',
    cols: 2,
    rows:1
  },
  {
    img: VampireWeekend,
    title: 'Vampire Weekend',
    cols: 2,
    rows:2
  },
  {
    img: Maine,
    title: 'The Maine',
    rows:1,
    cols: 2,
  },

];