var playerName = 'KissAnime'

var getTitle = function() {
  return document.title.substring(0, document.title.indexOf(' Episode'))
}

var getEpisode = function() {
  return parseInt(document.title.substring(document.title.indexOf('Episode') + 8, document.title.indexOf(' -')))
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
  document.querySelector('#btnNext').click()
}

var previous = function() {
  document.querySelector('#btnPrevious').click()
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
