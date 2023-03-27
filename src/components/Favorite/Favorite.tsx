import React from 'react';
// import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteIcon from '@mui/icons-material/Favorite';
// @ts-ignore
import style from './Favorite.module.css';

declare type FavoriteProps = {
  Count: string;
};

const Favorite = ({ Count }: FavoriteProps) => {
  return (
    <div className={style.container}>
      <button className={style.btn} type="submit">
        <FavoriteIcon
          sx={{
            color: '#5cb85c',
          }}
        />
        {Count}
      </button>
    </div>
  );
};

export default Favorite;
