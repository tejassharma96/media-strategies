var timeToMilliseconds = require('../helpers').timeToMilliseconds

var playerName = 'SoundCloud'

var getTitle = function() {
  return document.querySelector('.playbackSoundBadge__title>span:nth-child(2)').innerHTML
}

var getArtist = function() {
  return document.querySelector('.m-playing .soundTitle__username')
}

var getArtwork = function() {
  var art = document.querySelector('.playbackSoundBadge__avatar>div>span.image__full').style.backgroundImage.slice(4, -1)
  return art && art.replace(/\d{1,3}x\d{1,3}\.jpg/i, '500x500.jpg')
}

var getPlaying = function() {
  return document.querySelector('.playControl').classList.contains('playing')
}

var playPause = function() {
  document.querySelector('.playControl').click()
}

var next = function() {
  document.querySelector('.skipControl__next').click()
}

var previous = function() {
  document.querySelector('skipControl__previous').click()
}

var getLength = function() {
  var time = document.querySelector('.playbackTimeline__duration>span:nth-child(2)').innerHTML
  return timeToMilliseconds(time)
}

var getPlayhead = function() {
  var time = document.querySelector('.playbackTimeline__timePassed>span:nth-child(2)').innerHTML
  return timeToMilliseconds(time)
}

var getFavType = function() {
  return 'heart'
}

var getFavorite = function() {
  return document.querySelector('.playbackSoundBadge__like').classList.contains('sc-button-selected')
}

var favorite = function() {
  document.querySelector('.playbackSoundBadge__like').click()
}

module.exports = { playerName, getTitle, getArtist, getArtwork, getPlaying, playPause, next, previous, getLength, getPlayhead, getFavType, getFavorite, favorite }
