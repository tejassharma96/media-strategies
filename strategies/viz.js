var playerName = 'VIZ'

var getTitle = function() {
  return document.querySelector('.float-l--md > a').innerHTML
}

var getEpisode = function() {
  var ep = document.querySelector('h2.type-md').innerHTML
  return ep.substring(ep.indexOf('Episode') + 8, ep.indexOf(':'))
}

module.exports = { playerName, getTitle, getEpisode }
