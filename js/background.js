const images = [
  "california_highway.jpg",
  "coast_stars.jpg",
  "Greenwood_lake.jpg",
  "Iceland_plateau.jpg",
  "Jeju_island.jpg",
  "Norway_aurora.jpg",
  "Norway_mountain.jpg",
  "Scotland_aberdeen_coast.jpg",
  "Silent_wharf.jpg",
  "Yoshino_mountain_nara.jpg",
];

function changeBackground() {
  const chosenImage = images[Math.floor(Math.random() * images.length)];
  document.documentElement.style.setProperty(
    "--background-img",
    `url(../img/${chosenImage})`
  );
}

changeBackground();
