var mapping = {
  'https://twist.moe/a/': 'animetwist.js',
  'http://crunchyroll.com/': 'crunchyroll.js',
  'https://play.google.com/music/': 'googleplaymusic.js',
  'http://kissanime.to/Anime/': 'kissanime.js',
  'http://moetube.net/watch/': 'moetube.js',
  'https://play.pocketcasts.com/': 'pocketcasts.js',
  'https://soundcloud.com/': 'soundcloud.js',
  'https://www.youtube.com/watch': 'youtube.js',
}

var findStrategy = function(url) {
  for (var strategy in mapping) {
    if (url.indexOf(strategy) != -1) {
      return mapping[strategy]
    }
  }
}

module.exports = { mapping, findStrategy }
