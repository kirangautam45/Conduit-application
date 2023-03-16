import React from "react";
// import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteIcon from "@mui/icons-material/Favorite";
// @ts-ignore
import style from "./Home.module.css";

const Favorite = () => {
  return (
    <button className={style.btn} type="submit">
      <FavoriteIcon
        sx={{
          color: "#5cb85c",
        
          "&:hover": {
            color: "#FFF",
          },
        }}
      />
      617
    </button>
  );
};

export default Favorite;
