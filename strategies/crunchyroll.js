var playerName = 'Crunchyroll'

var getTitle = function() {
  return document.querySelector('.showmedia-header > h1 > a > [itemprop=title]').innerHTML
}

var getEpisode = function() {
  var ep = document.querySelector('.collection-carousel-media-link-current > div > a > div > span').innerHTML
  return parseInt(ep.substring(ep.indexOf('Episode') + 8))
}

var getSeason = function() {
  var season = document.querySelector('#showmedia_about_media > h4 ~ h4').innerHTML
  return parseInt(season.substring(season.indexOf('Season') + 7, season.indexOf(',')))
}

module.exports = { playerName, getTitle, getEpisode, getSeason }
