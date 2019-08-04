// 1  for "ISO Date"
// 2  for "Short Date"
// 3 for "Long Date"
function formatDate(date,n) {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
  
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    var hours =date.getHours();
    var minutes=date.getMinutes();
    var time = new Date();
    var d = new Date();
    d = d.toLocaleTimeString().replace(/:\d+ /, ' ');



  
    
    switch(n) {
        case 1:return day + '-' + monthIndex + '-' + year+' '+hours+':'+minutes+'.';
          break;
        case 2:return monthIndex +"/" +day +'/' + year+' '+hours+':'+minutes+'.';
          break;
          case 3:return day + ' ' + monthNames[monthIndex] + ' ' + year+' '+hours+':'+minutes+'.'+' ('+d+')';
          break;
          default:return time+time.toLocaleString('en-US', { hour: 'numeric', hour12: true });
      }
  }
  // 1  for "ISO Date"
// 2  for "Short Date"
// 3 for "Long Date"
  console.log(formatDate(new Date(),1));  // show current date-time "ISO Date"
  console.log(formatDate(new Date(),2));  // show current date-time "Short Date"
  console.log(formatDate(new Date(),3));  // show current date-time "Long Date"
  console.log(formatDate(new Date(),4));  // show current date-time "Long Date"