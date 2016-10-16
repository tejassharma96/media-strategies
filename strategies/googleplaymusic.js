var timeToMilliseconds = require('../helpers.js').timeToMilliseconds

var playerName = 'Google Play Music'

var getTitle = function() {
  return document.querySelector('#currently-playing-title').innerHTML
}

var getArtist = function() {
  return document.querySelector('#player-artist').innerHTML
}

var getArtwork = function() {
  var artwork = document.querySelector('#playerBarArt').src
  return artwork && artwork.replace('s90', 's512')
}

var getPlaying = function() {
  return document.querySelector('[data-id=play-pause]').classList.contains('playing')
}

var playPause = function() {
  document.querySelector('[data-id=play-pause]').click()
}

var next = function() {
  document.querySelector('[data-id=forward]').click()
}

var previous = function() {
  document.querySelector('[data-id=rewind]').click()
}

var getLength = function() {
  var time = document.querySelector('#time_container_duration').innerHTML
  return timeToSeconds(time)
}

var getPlayhead = function() {
  var time = document.querySelector('#time_container_current').innerHTML
  return timeToMilliseconds(time)
}

var seek = function(ms) {
  var progress = document.querySelector('#material-player-progress')
  progress.value = ms
  progress.dispatchEvent(new window.UIEvent('change'))
}

var getThumbs = function() {
  if (document.querySelector('[title="Undo thumb-up"]') != null)
    return 2
  if (document.querySelector('[title="Undo thumb-down"]') != null)
    return 1
  return 0
}

var thumbsUp = function() {
  document.querySelector('[title$="humb-up"]').click()
}

var thumbsDown = function() {
  document.querySelector('[title$="humb-down"]').click()
}

module.exports = { playerName, getTitle, getArtist, getArtwork, getPlaying, playPause, next, previous, getLength, getPlayhead, seek, getThumbs, thumbsUp, thumbsDown }

