var playerName = 'YouTube'

var getTitle = function() {
  return document.querySelector('.watch-title').innerHTML
}

var getArtist = function() {
  return document.querySelector('.yt-user-info>a').innerHTML
}

var getArtwork = function() {
  artwork = document.querySelector('#watch7-user-header>a>span>span>span>img').src
  return artwork && artwork.replace('s88', 's512')
}

var getPlaying = function() {
  return document.querySelector('.ytp-play-button').classList.contains('playing-mode') || document.querySelector('.ytp-play-button').getAttribute('aria-label') == "Pause"
}

var playPause = function() {
  document.querySelector('.ytp-play-button').click()
}

var next = function() {
  document.querySelector('.ytp-next-button').click()
}

var previous = function() {
  document.querySelector('.ytp-prev-button').click()
}

var getLength = function() {
  return document.querySelector('.ytp-time-duration').innerHTML
}

var getPlayhead = function() {
  var time = document.querySelector('.ytp-time-current').innerHTML
  return timeToMilliseconds(time)
}

var getThumbs = function() {
  if (document.querySelector('.like-button-renderer-like-button-unclicked').classList.contains('hid'))
    return 2
  if (document.querySelector('.like-button-renderer-dislike-button-unclicked').classList.contains('hid'))
    return 1
  return 0
}

var thumbsUp = function() {
  var up = document.querySelector('.like-button-renderer-like-button-unclicked')
  if (up.classList.contains('hid'))
    document.querySelector('.like-button-renderer-like-button-clicked').click()
  else up.click()
}

var thumbsDown = function() {
  var down = document.querySelector('.like-button-renderer-dislike-button-unclicked')
  if (down.classList.contains('hid'))
    document.querySelector('.like-button-renderer-dislike-button-clicked').click()
  else down.click()
}

module.exports = { playerName, getTitle, getArtist, getArtwork, getPlaying, playPause, next, previous, getLength, getPlayhead, getThumbs, thumbsUp, thumbsDown }
