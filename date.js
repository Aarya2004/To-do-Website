
function getDate(){
  var today = new Date();
  var options = {
    weekday: 'short',
    day: 'numeric',
    month: 'long'
  }
  var day = today.toLocaleDateString('en-US',options)
  return day;
}

module.exports = getDate;
