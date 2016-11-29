var playerName = 'Daisuki'

var getTitle = function() {
  return document.querySelector('#subTxt').childNodes[3].innerHTML
}

var getEpisode = function() {
  var ep = document.querySelector('#animeTitle').innerHTML
  return parseInt(ep.substring(1, ep.indexOf(' ')))
}

module.exports = { playerName, getTitle, getEpisode }
