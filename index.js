var mapping = {
  'https?://9anime.to/watch/': '9anime.js',
  'https?://www.animakai.info/anime/': 'animakai.js',
  'https?://animehaven.to/': 'animehaven.js',
  'https?://twist.moe/a/': 'animetwist.js',
  'https?://www.crunchyroll.com/': 'crunchyroll.js',
  'https?://www.daisuki.net/': 'daisuki.js',
  'https?://www.funimation.com/shows/': 'funimation.js',
  'https?://ww1.gogoanime.io/': 'gogoanime.js',
  'https?://play.google.com/music/': 'googleplaymusic.js',
  'https?://www.hulu.com/watch/': 'hulu.js',
  'https?://kissanime.ru/Anime/': 'kissanime.js',
  'https?://www.masterani.me/anime/watch': 'masterani.js',
  'https?://moetube.net/watch/': 'moetube.js',
  'https?://www.netflix.com/title/': 'netflix.js',
  'https?://play.pocketcasts.com/': 'pocketcasts.js',
  'https?://soundcloud.com/': 'soundcloud.js',
  'https?://www.superanimes.com/': 'superanimes.js',
  'https?://www.viewster.com/serie/': 'viewster.js',
  'https?://www.viz.com/watch/streaming': 'viz.js',
  'https?://www.youtube.com/watch': 'youtube.js'
}

var findStrategy = function(url) {
  for (var strategy in mapping) {
    if (url.match(strategy)) {
      return mapping[strategy]
    }
  }
}

module.exports = { mapping, findStrategy }
