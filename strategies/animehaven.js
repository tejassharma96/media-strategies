var playerName = 'Anime Haven'

var getTitle = function() {
  return document.querySelector('.entry-title').childNodes[0].textContent.split(' – ')[0]
}

var getEpisode = function() {
  var ep = document.querySelector('.entry-title').childNodes[0].textContent.split(' – ')[1]
  return parseInt(ep.substring(ep.indexOf('Episode') + 8))
}

var next = function() {
  document.querySelector('.nav-next > a').click()
}

var previous = function() {
  document.querySelector('.nav-previous > a').click()
}

module.exports = { playerName, getTitle, getEpisode, next, previous }
