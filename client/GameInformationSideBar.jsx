import React from 'react';
import styles from './style.css';

import GameCategories from './components/GameCategories.jsx'
import GameLanguages from './components/GameLanguages.jsx'
import GameRating from './components/GameRating.jsx'
import ShareBlock from './components/ShareBlock.jsx'
import { languages, gameRating, categories } from './sampleData.js'


const GameInformationSideBar = ({ game }) => (
  <div className={styles.game_information}>

    <div>
      <GameCategories categories={categories} />
      <div className={styles.eula_notice}>
        <div>Requires agreement to a 3rd-party EULA</div>
          <div>
            <a href="http://store.steampowered.com//eula/489830_eula_0" >{'Test Game'} EULA</a>
            </div>
      </div>
    </div>

    <GameLanguages languages={languages} />

    <GameRating details={gameRating.details} img={gameRating.img} />

    <ShareBlock />

  </div>
);

export default GameInformationSideBar;
