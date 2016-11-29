var playerName = 'Viewster'

var getTitle = function() {
  return document.querySelector('.title').innerHTML
}

var getEpisode = function() {
  var ep = document.querySelector('.playing').parentElement.parentElement.querySelector('.slide-title > .episode-title').innerHTML
  return ep.split(' ')[1]
}

module.exports = { playerName, getTitle, getEpisode }
