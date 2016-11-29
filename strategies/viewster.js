var playerName = 'Viewster'

var getTitle = function() {
  return document.querySelector('.title').innerHTML
}

var getEpisode = function() {
  var ep = document.querySelector('.playing').parentElement.parentElement.querySelector('.slide-title > .episode-title').innerHTML
  return ep.split(' ')[1]
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

var getLength = function() {
  return document.querySelector('video').duration * 1000
}

var getPlayhead = function() {
  return document.querySelector('video').currentTime * 1000
}

var seek = function(ms) {
  document.querySelector('video').currentTime = ms / 1000
}

module.exports = { playerName, getTitle, getEpisode, getPlaying, playPause, getLength, getPlayhead, seek }
