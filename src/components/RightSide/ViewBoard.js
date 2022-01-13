import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import classes from './ViewBoard.module.css';

function ViewBoard() {
    // const froggys = () => {
    //   return level.colors.map((color) => (
    //     <Froggy key={color} className={classes[color]} />
    //   ));
    // };

    // const lilypads = () => {
    //   return level.colors.map((color) => (
    //     <Lilypad key={color} className={classes[color]} />
    //   ));
    // };

  return (
    <div className={classes.view}>
      <div className={classes.board}>
        <div className={classes.pond}>
           {/* {froggys()} */}
            </div>
        <div className={`${classes.background} ${classes.lilypad}`}>
          {/* {lilypads()} */}
        </div>
      </div>
    </div>
  );
}

const Froggy = ({ className }) => {
  return (
    <div className={`${classes.frog} ${className}`}>
      <div className={classes.bg}></div>
    </div>
  );
};

const Lilypad = ({ className }) => {
  return (
    <div className={`${classes.lilypad} ${className}`}>
      <div className={classes.bg}></div>
    </div>
  );
};

export default ViewBoard;
