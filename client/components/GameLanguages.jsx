import React from 'react';
import styles from '../style.css';

const GameLanguages = ({ languages }) => (
  <div>
    <div className={styles.game_language_title}>Languages</div>
    <table className={styles.game_languages_table}>
      <tbody>
        <tr>
          <th style={{width: '94px'}}/>
          <th>Interface</th>
          <th>Full Audio</th>
          <th>Subtitles</th>
        </tr>
        {languages.map((lang, index) => (
          <tr key={index}>
            <td className={styles.lang_name} style={{ width: '94px', 'textAlign': 'left' }}>{lang[0]}</td>
            {(lang[1]) ? <td className={styles.lang_check}><span>✔</span></td> : <td></td>}
            {(lang[2]) ? <td className={styles.lang_check}><span>✔</span></td> : <td></td>}
            {(lang[3]) ? <td className={styles.lang_check}><span>✔</span></td> : <td></td>}
          </tr>
        ))}
      </tbody>
    </table>
  </div>

);

export default GameLanguages;
