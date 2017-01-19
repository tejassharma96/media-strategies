var playerName = 'Funimation'

var getTitle = function() {
  return document.querySelector('.video-title > a').innerHTML
}

var getEpisode = function() {
  var ep = document.querySelector('.episode-headline').innerHTML
  return parseInt(ep.split(' ')[1])
}

module.exports = { playerName, getTitle, getEpisode }
