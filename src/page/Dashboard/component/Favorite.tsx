import React from "react";
// import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteIcon from "@mui/icons-material/Favorite";
// @ts-ignore
import style from "./Home.module.css";

declare type FavoriteProps = {
  Count: number;
};

const Favorite = ({ Count }: FavoriteProps) => {
  return (
    <div className={style.btn}>
      <FavoriteIcon
        sx={{
          color: "#5cb85c",

          "&:hover": {
            color: "#FFF",
          },
        }}
      />
      {Count}
    </div>
  );
};

export default Favorite;
