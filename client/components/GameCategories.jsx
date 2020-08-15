import React from 'react';
import styles from '../style.css';

const GameCategory = ({ target, img, name }) => (
  <div className={styles.game_info_category}>
    <div className={styles.game_info_category_icon}>
      <a href={target}>
        <img src={img} />
      </a>
    </div>
    <a className={styles.game_info_category_name} href={target}>{name}</a>
  </div>
);

const GameCategories = ({ categories }) => (
  <div>
    {categories.map((cat) => <GameCategory key={cat.id} target={cat.target} img={cat.img} name={cat.name} />)}
  </div>
);

export default GameCategories;
