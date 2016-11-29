var playerName = 'Hulu'

var getTitle = function() {
  var title = document.querySelector('.show-title')
  if (title)
    return title.innerHTML
  else return document.querySelector('.episode-title').innerHTML
}

var getEpisode = function() {
  var ep = document.querySelector('.info').childNodes[0].textContent
  return parseInt(ep.substring(ep.indexOf('Episode') + 8))
}

var getSeason = function() {
  var ep = document.querySelector('.info').childNodes[0].textContent
  return parseInt(ep.substring(ep.indexOf('Season') + 7, ep.indexOf('  ')))
}

module.exports = { playerName, getTitle, getEpisode, getSeason }
