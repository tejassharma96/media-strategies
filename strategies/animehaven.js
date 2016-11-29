var playerName = 'Anime Haven'

var getTitle = function() {
  return document.querySelector('.entry-title').childNodes[0].textContent.split(' – ')[0]
}

var getEpisode = function() {
  var ep = document.querySelector('.entry-title').childNodes[0].textContent.split(' – ')[1]
  return parseInt(ep.substring(ep.indexOf('Episode') + 8))
}

var getPlaying = function() {
  return !(document.querySelector('video').paused)
}

var playPause = function() {
  var video = document.querySelector('video')
  if (video.paused)
    video.play()
  else video.pause()
}

var next = function() {
  document.querySelector('.nav-next > a').click()
}

var previous = function() {
  document.querySelector('.nav-previous > a').click()
}

var getLength = function() {
  return document.querySelector('video').duration * 1000
}

var getPlayhead = function() {
  return document.querySelector('video').currentTime * 1000
}

var seek = function(ms) {
  document.querySelector('video').currentTime = ms / 1000
}

module.exports = { playerName, getTitle, getEpisode, getPlaying, playPause, next, previous, getLength, getPlayhead, seek }
