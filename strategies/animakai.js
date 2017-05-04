var playerName = 'animakai'

var getTitle = function() {
  return document.title.split(' ').slice(0, -3).join(' ')
}

var getEpisode = function() {
  return parseInt(document.title.split(' ').slice(-2, -1)[0])
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
  document.querySelector('.next').click()
}

var previous = function() {
  document.querySelector('.prev').click()
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