const temporaryLanguages = [
  ['English', 1, 1, 1],
  ['French', 1, 1, 1],
  ['Italian', 1, 1, 1],
  ['German', 1, 1, 1],
  ['Spanish - Spain', 1, 1, 1],
  ['Polish', 1, 1, 1],
  ['Traditional Chinese', 1, 0, 1],
  ['Russian', 1, 1, 1],
  ['Japanese', 1, 1, 1],
];

const temporaryGameRating = {
  details: 'BLOOD AND GORE, INTENSE VIOLENCE, SEXUAL THEMES, USE OF ALCOHOL',
  img: 'https://store.cloudflare.steamstatic.com/public/shared/images/game_ratings/ESRB/m.png',
};

const temporaryCategories = [
  {
    id: 1,
    target: "#",
    name: "Single-Player",
    img: "https://store.cloudflare.steamstatic.com/public/images/v6/ico/ico_singlePlayer.png",
  },
  {
    id: 2,
    target: "#",
    name: "Steam Achievements",
    img:"https://store.cloudflare.steamstatic.com/public/images/v6/ico/ico_achievements.png",
  },
  {
    id: 3,
    target: "#",
    name: "Partial Controller Support",
    img: "https://store.cloudflare.steamstatic.com/public/images/v6/ico/ico_singlePlayer.png",
  },
  {
    id: 4,
    target: "#",
    name: "Steam Cloud",
    img: "https://store.cloudflare.steamstatic.com/public/images/v6/ico/ico_cloud.png",
  },
  {
    id: 5,
    target: "#",
    name: "Remote Play on Phone",
    img: "https://store.cloudflare.steamstatic.com/public/images/v6/ico/ico_singlePlayer.png",
  },
  {
    id: 6,
    target: "#",
    name: "Remote Play on Tablet",
    img: "https://store.cloudflare.steamstatic.com/public/images/v6/ico/ico_remote_play.png",
  },
]

module.exports = {
  languages: temporaryLanguages,
  gameRating: temporaryGameRating,
  categories: temporaryCategories,
}
