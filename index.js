var mapping = {
  'https://9anime.to/watch/': '9anime.js',
  'http://animehaven.to/': 'animehaven.js',
  'https://twist.moe/a/': 'animetwist.js',
  'http://www.crunchyroll.com/': 'crunchyroll.js',
  'http://www.daisuki.net/': 'daisuki.js',
  'http://www.funimation.com/shows/': 'funimation.js',
  'https://play.google.com/music/': 'googleplaymusic.js',
  'http://www.hulu.com/watch/': 'hulu.js',
  'http://kissanime.ru/Anime/': 'kissanime.js',
  'https://www.masterani.me/anime/watch': 'masterani.js',
  'http://moetube.net/watch/': 'moetube.js',
  'https://www.netflix.com/title/': 'netflix.js',
  'https://play.pocketcasts.com/': 'pocketcasts.js',
  'https://soundcloud.com/': 'soundcloud.js',
  'http://www.viewster.com/serie/': 'viewster.js',
  'http://www.viz.com/watch/streaming': 'viz.js',
  'https://www.youtube.com/watch': 'youtube.js'
}

var findStrategy = function(url) {
  for (var strategy in mapping) {
    if (url.indexOf(strategy) != -1) {
      return mapping[strategy]
    }
  }
}

module.exports = { mapping, findStrategy }
