var timeToMilliseconds = require('../helpers.js').timeToMilliseconds

exports.getTitle = function() {
  return document.querySelector('#currently-playing-title').innerHTML
}

exports.getArtist = function() {
  return document.querySelector('#player-artist').innerHTML
}

exports.getArtwork = function() {
  var artwork = document.querySelector('#playerBarArt').src
  return artwork && artwork.replace('s90', 's512')
}

exports.getPlaying = function() {
  return document.querySelector('[data-id=play-pause]').classList.contains('playing')
}

exports.play = function() {
  document.querySelector('[data-id=play-pause]').click()
}

exports.pause = function() {
  document.querySelector('[data-id=play-pause]').click()
}

exports.next = function() {
  document.querySelector('[data-id=forward]').click()
}

exports.previous = function() {
  document.querySelector('[data-id=rewind]').click()
}

exports.getLength = function() {
  var time = document.querySelector('#time_container_duration').innerHTML
  return timeToSeconds(time)
}

exports.getPlayhead = function() {
  var time = document.querySelector('#time_container_current').innerHTML
  return timeToMilliseconds(time)
}

exports.seek = function(time) {
  var progress = document.querySelector('#material-player-progress')
  progress.value = time
  progress.dispatchEvent(new window.UIEvent('change'))
}

exports.getThumbs = function() {
  if(document.querySelector('[title="Undo thumb-up"]') != null)
    return '2'
  else if(document.querySelector('[title="Undo thumb-down"]') != null)
    return '1'
  else return '0'
}

exports.thumbsUp = function() {
  var upButton = document.querySelector('[title="Undo thumb-up"]')
  if(upButton != null)
    upButton.click()
  else document.querySelector('[title="Thumb-up"]').click()
}

exports.thumbsDown = function() {
  var downButton = document.querySelector('[title="Undo thumb-down"]')
  if(downButton != null)
    downButton.click()
  else document.querySelector('[title="Thumb-down"]').click()
}
