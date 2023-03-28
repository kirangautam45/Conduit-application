import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks/store';
import { defaultTagsSelector } from '../../../../store/defaultTags/selector';
import { getDefaultTags } from '../../../../store/defaultTags/slice';
import style from './Tags.module.css';

const Tags = () => {
  const dispatch = useAppDispatch();
  const { tags, isLoading, isSuccess } = useAppSelector(defaultTagsSelector);

   useEffect(() => {
     dispatch(getDefaultTags());
  }, [dispatch]);
  return (
    <div className={style.tagsWrapper}>
      <p className={style.p}>Popular Tags</p>
      {isSuccess &&
        tags.map((tag, index) => (
          <div className={style.tags} key={index}>
            <> {tag} </>
          </div>
        ))}

      {!isLoading && <div> Loading tags... </div>}
    </div>
  );
};

export default Tags;
