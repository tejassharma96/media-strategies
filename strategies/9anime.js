var playerName = '9anime'

var getTitle = function() {
  return document.querySelector('.title').innerHTML
}

var getEpisode = function() {
  return parseInt(document.querySelector('#episode-comment > span').innerHTML)
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
  document.getElementsByClassName('next')[0].click()
}

var previous = function() {
  document.getElementsByClassName('prev')[0].click()
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
