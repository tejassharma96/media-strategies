var playerName = 'Masterani'

var getTitle = function() {
  return document.querySelector('.details > h1').innerHTML
}

var getEpisode = function() {
  var episode = document.querySelector('.details > h2').innerHTML.split(' ')
  return parseInt(episode[episode.length - 1])
}

var next = function() {
  document.querySelector('.actions').children[3].click()
}

var previous = function() {
  document.querySelector('.actions').children[1].click()
}

module.exports = { playerName, getTitle, getEpisode, next, previous }
