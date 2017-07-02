var playerName = 'VRV'

var getTitle = function() {
  return document.querySelector(".series").innerText
}

var getEpisode = function() {
  return parseInt(document.querySelector('.title').innerText.split(' ').slice(1, 2)[0])
}

var getPlaying = function() {
  return !(document.querySelector("#player > video").paused)
}

var playPause = function() {
  var video = document.querySelector("#player > video")
  if (video.paused
)    video.play()
  else video.pause()
}

var getLength = function() {
  return document.querySelector("#player > video").duration * 1000
}

var getPlayhead = function() {
  return document.querySelector("#player > video").currentTime * 1000
}

var seek = function(ms) {
  document.querySelector("#player > video").currentTime = ms / 1000
}

module.exports = { playerName, getTitle, getEpisode, getPlaying, playPause, getLength, getPlayhead, seek }
