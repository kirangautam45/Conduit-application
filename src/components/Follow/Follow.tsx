import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import style from './Follow.module.css';
declare type FollowProps = {
  Follow: string;
};

const Follow = ({ Follow }: FollowProps) => {
  return (
    <div className={style.container}>
      <button className={style.btn} type="submit">
        <AddIcon
          sx={{
            color: '#ccc',
          }}
        />
        {Follow}
      </button>
    </div>
  );
};

export default Follow;
