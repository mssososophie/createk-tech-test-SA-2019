// Without using internal date or time objects, write code to return the the total number of
// minutes between two times. The times are on the same day, and are represented in a 12hr
// clock, but are not necessarily in order e.g.:
// get_minutes_between(“11:30am”, “9:55pm”)
// get_minutes_between(“9:55pm”, “11:30pm”)

var timeOne = new Time(" ");
var timeTwo = new Time(" ");

function convertTime(Time){
  const [Time, mod] = Time.split(':');
    if (hours === '12') {
      hours = '00';
    }

    if (mod === 'pm') {
      hours = parseInt(hours, 10) + 12;
    }

    return hours + ':' + minutes;

    //function(s) incomplete. My next step would be to write a function to sort timeOne and timeTwo into
    // the correct order; earlier > later in order to subtract from eachother successfully, which would affect the
    // params of the function below. A bit more work to do but possible with more time :)

  function get_minutes_between(timeOne, timeTwo){
    console.log((timeOne - timeTwo)*0.6 + ' minutes between times');
  }
}
get_minutes_between();
