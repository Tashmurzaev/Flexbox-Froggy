import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { gameActions } from '../../store';

import classes from './Editor.module.css';

function Editor() {
  const dispatch = useDispatch(); 
  const currentLevel = useSelector((state) => state.game.currentLevel);
  const level = useSelector((state) =>
    state.game.currentLevels.find((item) => item.level === currentLevel)
  );

  const [game, setGame] = useState('');

  useEffect(() => {
    dispatch(gameActions.gameStyle(''));
    setGame('');
  }, [level.level]);

  const changeStyle = (event) => {
    setGame(event.target.value);
    dispatch(gameActions.gameStyle(event.target.value));
  };

  const nextGame = () => {
    dispatch(gameActions.currentState(currentLevel + 1));
  };

  return (
    <div className={classes.editor}>
      <div className={classes.css}>
        <div className={classes['line-numbers']}>
          1 <br /> 2 <br /> 3<br /> 4<br /> 5<br /> 6<br /> 7<br /> 8 <br /> 9{' '}
          <br />
          10
        </div>
        <pre id="before">
          #pond {'{'} <br /> display: flex;{' '}
        </pre>
        <textarea
          className={classes.code}
          autoFocus
          autoCapitalize="none"
          style={{ height: 24 * level.pondHeight + 'px' }}
          value={game}
          onChange={changeStyle}
        ></textarea>
        <pre>{'}'}</pre>
        <button
          onClick={nextGame}
          className={`${classes.next} ${classes.animation}`}
        >
          Следующий
        </button>
      </div>
    </div>
  );
}

export default Editor;
