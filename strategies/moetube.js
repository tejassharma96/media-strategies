var playerName = 'MoeTube'

var getTitle = function() {
  var h2 = document.querySelector('#animename > h2')
  if (h2)
    return h2.innerHTML.split(' · ')[0]
  else return document.querySelector('#episodename > h1').innerHTML
}

var getEpisode = function() {
  var episode = ''
  var h1 = document.querySelector('#animename > h1')
  if (h1)
    episode = h1.innerHTML
  else
    episode = document.querySelector('#animename > h2').innerHTML.split(' · ')[1]
  return episode.split(' ')[1]
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
  return document.querySelector('.episode > a').click()
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

module.exports = { playerName, getTitle, getEpisode, getPlaying, playPause, next, getLength, getPlayhead, seek }
