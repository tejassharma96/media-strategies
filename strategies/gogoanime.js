var playerName = 'gogoanime'

var getTitle = function() {
  return document.querySelector('.title_name > h2').innerHTML.split(' ').slice(0, -4).join(' ')
}

var getEpisode = function() {
  return parseInt(document.querySelector('.title_name > h2').innerHTML.split(' ').slice(-3, -2)[0])
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
  document.querySelector('.anime_video_body_episodes_r > a')
}

var previous = function() {
  document.querySelector('.anime_video_body_episodes_l > a')
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