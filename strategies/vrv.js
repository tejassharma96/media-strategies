var playerName = 'VRV'

var getTitle = function() {
  return document.querySelector('.series').innerText
}

var getEpisode = function() {
  return parseInt(document.querySelector('.title').innerText.split(' ').slice(1, 2)[0])
}

module.exports = { playerName, getTitle, getEpisode}
