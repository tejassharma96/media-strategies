var playerName = 'Funimation'

var getTitle = function() {
  return document.querySelector('.heading > h2').childNodes[0]
}

var getEpisode = function() {
  var ep = document.querySelector('.chaner-data').innerHTML
  return parseInt(ep.split(' ')[1])
}

module.exports = { playerName, getTitle, getEpisode }
