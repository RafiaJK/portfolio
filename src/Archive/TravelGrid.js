import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
// import img1 from './travel/1.jpeg'
import img2 from './travel/2.jpeg'
// import img3 from './travel/3.jpeg'
import img4 from './travel/4.jpeg'
// import img5 from './travel/5.jpeg'
import img6 from './travel/6.jpeg'
import img7 from './travel/7.jpeg'
import img8 from './travel/8.jpeg'
import img9 from './travel/9.jpeg'
const itemData = [

    {
        img: img7,
        title: 'Colares',
    },
    {
        img: img6,
        title: 'Porto',
    },
    {
        img: img2,
        title: 'Venice',
    },
    {
        img: img9,
        title: 'Florence',
    },
    {
        img: img8,
        title: 'Sintra',
    },
    {
        img: img4,
        title: 'Paris',
    },
];



export default function MasonryImageList() {
    return (

        <Box sx={{ width: "100%", height: 400, overflowY: 'scroll' }} >
            <ImageList variant="masonry" cols={3} gap={6} rowHeight={264}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            alt={item.title}
                            loading="lazy"
                        />

                        <ImageListItemBar
                            title={item.title}
                            subtitle={item.author}
                        />

                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    
    );
}