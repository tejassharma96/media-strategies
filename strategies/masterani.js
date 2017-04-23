var playerName = 'Masterani'

var getTitle = function() {
  details = document.querySelector('.details')
  return details.querySelector('h1').innerHTML
}

var getEpisode = function() {
  details = document.querySelector('.details')
  episode = details.querySelector('h2').innerHTML.split(' ')
  return parseInt(episode[episode.length - 1])
}

var next = function() {
  actions = document.querySelector('.actions')
  actions.children[3].click()
}

var previous = function() {
  actions = document.querySelector('.actions')
  actions.children[1].click()
}

module.exports = { playerName, getTitle, getEpisode, next, previous }
