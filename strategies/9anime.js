var playerName = '9anime'

var getTitle = function() {
  return document.querySelector('.title').innerHTML
}

var getEpisode = function() {
  return parseInt(document.querySelector('#episode-comment > span').innerHTML)

var next = function() {
  document.getElementsByClassName('next')[0].click()
}

var previous = function() {
  document.getElementsByClassName('prev')[0].click()
}

module.exports = { playerName, getTitle, getEpisode, next, previous }
