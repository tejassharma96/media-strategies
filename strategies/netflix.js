var playerName = 'Netflix'

var getTitle = function() {
  return document.querySelector('name').innerHTML
}

var getEpisode = function() {
  var ep = document.querySelector('.playable-title').innerHTML
  return parseInt(ep.substring(ep.indexOf('E') + 1, ep.indexOf(' ')))
}

var getSeason = function() {
  var ep = document.querySelector('.playable-title').innerHTML
  return parseInt(ep.substring(ep.indexOf('S') + 1, ep.indexOf(':')))
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
  document.querySelector('.button-nfplayerNextEpisode').click()
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

module.exports = { playerName, getTitle, getEpisode, getSeason, getPlaying, playPause, next, getLength, getPlayhead, seek }
