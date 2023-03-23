import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks/store';
import { defaultTagsSelector } from '../../../../store/defaultTags/selector';
import { getDefaultTags } from '../../../../store/defaultTags/slice';
import style from './Tags.module.css';

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
        {defaultTags.length ? (
          defaultTags.map((tag, index) => (
            <div className={style.tags} key={index}>
              <> {tag} </>
            </div>
          ))
        ) : (
          <div> Loading tags... </div>
        )}
      </div>
    </div>
  );
};

export default Tags;