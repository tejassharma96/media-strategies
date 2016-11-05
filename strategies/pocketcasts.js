var timeToMilliseconds = require('../helpers').timeToMilliseconds

var playerName = 'Pocket Casts'

var getTitle = function() {
  return document.querySelector('.player_episode').innerHTML
}

var getArtist = function() {
  return document.querySelector('.player_podcast_title').innerHTML
}

var getArtwork = function() {
  return document.querySelector('.player_artwork img').src
}

var getPlaying = function() {
  return document.querySelector('.play_pause_button').classList.contains('pause_button')
}

var playPause = function() {
  document.querySelector('.play_pause_button').click()
}

var next = function() {
  document.querySelector('.skip_forward_button').click()
}

var previous = function() {
  document.querySelector('.skip_back_button').click()
}

var getLength = function() {
  var remaining = document.querySelector('.remaining_time').innerHTML.slice(1)
  remaining = timeToMilliseconds(remaining)
  return getPlayhead() + remaining
}

var getPlayhead = function() {
  var time = document.querySelector('.current_time').innerHTML
  return timeToMilliseconds(time)
}

module.exports = { playerName, getTitle, getArtist, getArtwork, getPlaying, playPause, next, previous, getLength, getPlayhead }
