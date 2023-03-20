import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks/store';
import style from './Tags.module.css';
import { defaultTagsSelector } from '../../../../store/defaultTags/selector';
import { getDefaultTags } from '../../../../store/defaultTags/slice';

const Tags = () => {
  const dispatch = useAppDispatch();
  const defaultTags = useAppSelector(defaultTagsSelector);

  useEffect(() => {
    dispatch(getDefaultTags());
  }, [dispatch]);
  return (
    <div className={style.tagsWrapper}>
      <p className={style.p}>Popular Tags</p>
      <div>
        {defaultTags.map((tag, index) => (
          <div className={style.tags} key={index}>
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tags;
