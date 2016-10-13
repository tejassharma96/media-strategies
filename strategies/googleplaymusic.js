var timeToMilliseconds = require('../helpers.js').timeToMilliseconds

module.exports = {
  getTitle = function() {
    return document.querySelector('#currently-playing-title').innerHTML
  }

  getArtist = function() {
    return document.querySelector('#player-artist').innerHTML
  }

  getArtwork = function() {
    var artwork = document.querySelector('#playerBarArt').src
    return artwork && artwork.replace('s90', 's512')
  }

  getPlaying = function() {
    return document.querySelector('[data-id=play-pause]').classList.contains('playing')
  }

  play = function() {
    document.querySelector('[data-id=play-pause]').click()
  }

  pause = function() {
    document.querySelector('[data-id=play-pause]').click()
  }

  next = function() {
    document.querySelector('[data-id=forward]').click()
  }

  previous = function() {
    document.querySelector('[data-id=rewind]').click()
  }

  getLength = function() {
    var time = document.querySelector('#time_container_duration').innerHTML
    return timeToSeconds(time)
  }

  getPlayhead = function() {
    var time = document.querySelector('#time_container_current').innerHTML
    return timeToMilliseconds(time)
  }

  seek = function(time) {
    var progress = document.querySelector('#material-player-progress')
    progress.value = time
    progress.dispatchEvent(new window.UIEvent('change'))
  }

  getThumbs = function() {
    if(document.querySelector('[title="Undo thumb-up"]') != null)
      return '2'
    else if(document.querySelector('[title="Undo thumb-down"]') != null)
      return '1'
    else return '0'
  }

  thumbsUp = function() {
    var upButton = document.querySelector('[title="Undo thumb-up"]')
    if(upButton != null)
      upButton.click()
    else document.querySelector('[title="Thumb-up"]').click()
  }

  thumbsDown = function() {
    var downButton = document.querySelector('[title="Undo thumb-down"]')
    if(downButton != null)
      downButton.click()
    else document.querySelector('[title="Thumb-down"]').click()
  }
}
