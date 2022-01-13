import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import classes from './LevelSwitch.module.css';

import {
  LeftTriangle,
  LevelIndicator,
  LevelItem,
  RightTriangle,
} from './levelCounter';

const LevelSwitcher = () => {
  const renderLevels = () => {
    return (
      <div className={`${classes.levelsWrapper} ${classes.tooltip}`}>
        <div className={classes.levels}>
          {/* <LevelItem></LevelItem> */}
        </div>
        <div className={classes.labelReset}>Сбросить</div>
      </div>
    );
  };

  return (
    <div className={classes['level-counter']}>
      <LeftTriangle />
      <LevelIndicator />
      <RightTriangle />
      {renderLevels()}
    </div>
  );
};

export default LevelSwitcher;
