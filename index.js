var mapping = {
  'https://play.google.com/music/': 'googleplaymusic.js',
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
