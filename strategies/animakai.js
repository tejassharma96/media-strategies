var playerName = 'animakai'

var getTitle = function() {
  var end = document.title.indexOf('Episode') - 1
  return return document.title.substr(0, end)
}

var getEpisode = function() {
  var ep = document.title.indexOf('Episode') + 8
  return parseInt(document.title.substr(ep))
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

<<<<<<< HEAD
<<<<<<< HEAD
module.exports = { playerName, getTitle, getEpisode, getPlaying, playPause, next, previous, getLength, getPlayhead, seek }
=======
module.exports = { playerName, getTitle, getEpisode, getPlaying, playPause, next, previous, getLength, getPlayhead, seek }
>>>>>>> added support for animakai
=======
module.exports = { playerName, getTitle, getEpisode, getPlaying, playPause, next, previous, getLength, getPlayhead, seek }
>>>>>>> Handle multiple word titles
