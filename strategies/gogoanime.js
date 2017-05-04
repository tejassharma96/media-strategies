var playerName = 'gogoanime'

var getTitle = function() {
  var title = document.querySelector('.title_name > h2').innerHTML
  return title.split(' ').slice(0, -4).join(' ')
}

var getEpisode = function() {
  var title = document.querySelector('.title_name > h2').innerHTML
  return parseInt(title.split(' ').slice(-3, -2)[0])
}

var next = function() {
  document.querySelector('.anime_video_body_episodes_r > a')
}

var previous = function() {
  document.querySelector('.anime_video_body_episodes_l > a')
}

module.exports = { playerName, getTitle, getEpisode, next, previous }
