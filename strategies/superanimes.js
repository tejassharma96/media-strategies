var playerName = 'SuperAnimes'

var getTitle = function() {
  var title = document.querySelector('.boxBarraInfo > h1').innerHTML
  return title.split(' ').slice(0, -2).join(' ')
}

var getEpisode = function() {
  var title = document.querySelector('.boxBarraInfo > h1').innerHTML
  return parseInt(title.split(' ').slice(-1)[0])
}

var getPlaying = function() {
  return !(document.querySelector('video').paused)
}

var playPause = function() {
  var video = document.querySelector('video')
  if (video.paused
)    video.play()
  else video.pause()
}

var next = function() {
  document.querySelector('#nextEps').click()
}

var previous = function() {
  document.querySelector('#preEpvs').click()
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
