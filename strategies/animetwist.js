var playerName = 'Anime Twist'

var getTitle = function() {
  return document.querySelector('.series-title').innerHTML
}

var getEpisode = function() {
  return parseInt(document.querySelector('.ep').innerHTML)
}

var getSeason = function() {
  var info = document.querySelector('.series-episode').innerHTML.split(' ')
  return parseInt(info[info.length - 1])
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
  document.querySelector('[action=next]').click()
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
