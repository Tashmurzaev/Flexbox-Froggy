import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import classes from './Editor.module.css';

function Editor() {
 
  return (
    <div className={classes.editor}>
      <div className={classes.css}>
        <div className={classes['line-numbers']}>
          1 <br /> 2 <br /> 3<br /> 4<br /> 5<br /> 6<br /> 7<br /> 8 <br /> 9<br />10
        </div>
        <pre id="before">
          #pond {'{'} <br /> display: flex;{' '}
        </pre>
        <textarea
          className={classes.code}
          autoFocus
          autoCapitalize="none"
          style={{ height: '24 px'}}
        ></textarea>
        <pre>{'}'}</pre>
        <button className={`${classes.next} ${classes.animation}`}>
          Следующий
        </button>
      </div>
    </div>
  );
}

export default Editor;
