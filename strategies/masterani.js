var playerName = 'Masterani'

var getTitle = function() {
  return document.querySelector('.border').innerHTML
}

var getEpisode = function() {
  return parseInt(document.querySelector('.more').innerHTML.split(' ')[1])
}

var next = function() {
  document.querySelector('.chevron.right').click()
}

var previous = function() {
  document.querySelector('.chevron.left').click()
}

module.exports = { playerName, getTitle, getEpisode, next, previous }
