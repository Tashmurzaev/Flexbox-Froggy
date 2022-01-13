import React from 'react';

import Editor from './Editor';
import classes from './SidebarLayout.module.css';

import LevelSwitcher from './LevelSwitcher';
import Instructions from './Instructions';

function SidebarLayout() {
  return (
    <section className={classes.sidebar}>
      <header className={classes.header}>
        <div>
          <h1 className={classes.title}>Flexbox Froggy</h1>
        </div>
        <LevelSwitcher />
      </header>
      <Instructions />
      <Editor />
    </section>
  );
}

export default SidebarLayout;