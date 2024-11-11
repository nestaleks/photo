import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import useMediaQuery from '@mui/material/useMediaQuery';
import './StreetMasonry.css';



export default function StreetMasonryImageList() {
  // Используем useMediaQuery для адаптивного количества колонок
  const isXSmall = useMediaQuery('(max-width: 600px)');
  const isSmall = useMediaQuery('(max-width: 768px)');
  const isMedium = useMediaQuery('(max-width: 1280px)');

  // Определяем количество колонок в зависимости от ширины экрана
  const getColumns = () => {
    if (isXSmall) return 2;
    if (isSmall) return 2;
    if (isMedium) return 3;
    return 3; // по умолчанию для больших экранов
  };

  // Генерация массива с изображениями
  const itemData = [];
  for (let i = 1; i <= 250; i++) {
    itemData.push({
      img: `./images/street/street${i}.jpeg`,
      title: `img${i}`,
    });
  }

  return (
    <Box sx={{ width: '100%', padding: 2 }}>
      <ImageList variant="masonry" cols={getColumns()} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=400&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=400&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}