

var episodes = [
  [ 'The Gang Gets Racist', '12:45 AM - On a Thursday' , 4, 12,45, 'S01E01'],
  [ 'Charlie Wants an Abortion', '11:45 AM on a Tuesday', 2, 11,45, 'S01E02'],
  [ 'Underage Drinking: A National Concern', '9:45 PM - On a Friday', 5, 21,45,'S01E03'],
  ['Charlie Has Cancer', '12:40 PM on a Tuesday', 2, 12,40,'S01E04'],
  [ 'Gun Fever', '11:25 AM on a Friday', 5, 11,25, 'S01E05'],
  [ 'The Gang Finds a Dead Guy', '10:25 AM on a Friday', 5, 10,25, 'S01E06'],
  [ 'Charlie Gets Molested', '11:15 AM on a Monday', 1, 11,15, 'S01E07'],
  ['Charlie Gets Crippled', '10:15 PM on a Monday', 1, 22, 15, 'S02E01'],
  ["The Gang Goes Jihad", "3:30 PM on a Monday", 1, 15, 30, 'S02E02'],
  ["Dennis and Dee Go on Welfare", "4:30 PM on a Wednesday", 3, 16, 30, 'S02E03'],
  ["Mac Bangs Dennis' Mom", "4:30 PM on a Friday", 5, 15, 30, 'S02E04'],
  ["Hundred Dollar Baby", "11:30 PM on a Tuesday", 2, 23, 30, 'S02E05'],
  ["The Gang Gives Back", "11:15 AM on a Monday", 1, 11, 15, 'S02E06'],
  ["The Gang Exploits A Miracle", "11:00 AM on a Tuesday", 2, 11, 00, 'S02E07'],
  ["The Gang Runs for Office", "10:15 AM on a Wednesday", 3, 10, 15, 'S02E08'],
  ["Charlie Goes America All Over Everybody's Ass", "2:30 AM on a Saturday", 6, 2, 30, 'S02E09'],
  ["Dennis and Dee Get a New Dad", "8:00 AM on a Monday", 1, 8, 00, 'S02E10'],
  ["The Gang Finds a Dumpster Baby", '4:30 PM on a Wednesday', 3, 16, 30, 'S03E01'],
  ["The Gang Gets Invincible", '10:30 AM on a Wednesday', 3, 10, 30, 'S03E02'],
  ["Dennis and Dee's Mom Is Dead", '12:00 PM on a Monday', 1, 12, 00, 'S03E03'],
  ["The Gang Gets Held Hostage", '1:30 PM on a Wednesday', 3, 13, 30, 'S03E04'],
  ["The Aluminum Monster vs. Fatty Magoo", '11:30 AM on a Tuesday', 2, 11, 30, 'S03E05'],
  ["The Gang Solves the North Korea Situation", '4:00 PM on a Monday', 1, 16, 00, 'S03E06'],
  ["The Gang Sells Out", '2:30 PM on a Tuesday', 2, 14, 30, 'S03E07'],
  ["Frank Sets Sweet Dee on Fire", '6:00 PM on a Wednesday', 3, 18, 00, 'S03E08'],
  ["Sweet Dee's Dating a Retarded Person", '10:30 PM on a Wednesday', 3, 22, 30, 'S03E09'],
  ["Mac Is a Serial Killer", '10:00 AM on a Thursday', 4, 10, 00, 'S03E10'],
  ["Dennis Looks Like a Registered Sex Offender", '3:30PM on a Tuesday', 2, 15, 30, 'S03E11'],
  ["The Gang Gets Whacked (Part 1)", '2:30 PM on a Monday', 1, 14, 30, 'S03E12'],
  ["Bums: Making a Mess All Over the City", '10:15 AM on a Monday', 1, 10, 15, 'S03E14'],
  ["The Gang Dances Their Asses Off", '1:15PM on a Saturday', 6, 13, 15, 'S03E15'],
  ["Mac and Dennis: Manhunters", '1:30 PM on a Wednesday', 3, 13, 30, 'S04E01'],
  ["The Gang Solves the Gas Crisis", '10:30 AM on a Monday', 1, 10, 30, 'S04E02' ],
  ["America's Next Top Paddy's Billboard Model Contest", '9:30 AM on a Friday', 5, 9, 30, 'S04E03'],
  ["Mac's Banging the Waitress", '2:30 PM on a Wednesday', 3, 14, 30, 'S04E04'],
  ["Mac and Charlie Die (Part 1)", '10:00 AM on a Monday', 1, 10, 00, 'S04E05'],
  ["Who Pooped the Bed?", '1:30 PM on a Wednesday', 3, 13, 30, 'S04E07'],
  ["Paddy's Pub: The Worst Bar in Philadelphia", '4:42 PM on a Tuesday', 2, 16, 42, 'S04E08'],
  ["Dennis Reynolds: An Erotic Life", '11:00 PM on a Monday', 1, 23, 00, 'S04E09'],
  ["Sweet Dee Has a Heart Attack", '7:00 PM on a Monday', 1, 19, 00, 'S04E10'],
  ["The Gang Cracks the Liberty Bell", '2:30 PM on a Thursday', 4, 14, 30, 'S04E11'],
  ["The Gang Gets Extreme: Home Makeover Edition", '3:27 PM on a Friday', 5, 15, 27, 'S04E12'],
  ["The Nightman Cometh", '7:15 PM on a Friday', 5, 19, 15, 'S04E13'],
["The Gang Exploits the Mortgage Crisis",  '11:30 AM on a Tuesday', 2, 11, 30, 'S05E01'],
['The Gang Hits the Road', '11:00 AM on a Tuesday', 2, 11, 00, 'S05E02'],
['The Great Recession', '11:00 AM on a Tuesday', 2, 11, 00, 'S05E03'],
['The Gang Gives Frank an Intervention', '11:00 AM  on a Wednesday', 3, 11, 00, 'S05E04'],
['The Waitress is Getting Married', '12:30 PM on a Saturday', 6, 12, 30, 'S05E05'],
['The World Series Defense', '11:00 AM  on a Tuesday', 2, 11, 00, 'S05E06'],
['The Gang Wrestles for the Troops', '12:30 PM  on a Saturday', 6, 12, 30, 'S05E07'],
['Paddy'+"'"+'s Pub: Home of the Original Kitten Mittens', '12:30 PM  on a Wednesday', 3, 12, 30, 'S05E08'],
['Mac and Dennis Break Up', '12:00 PM on a Friday', 5, 12, 00, 'S05E09'], 
['The D.E.N.N.I.S. System', '1:30 PM  on a Saturday', 6, 13, 30, 'S05E10'],
['Mac and Charlie Write a Movie', '1:30 PM  on a Thursday', 4, 13, 30, 'S05E11'],
['The Gang Reignites the Rivalry', '8:17 PM on a Tuesday', 2, 20, 17,'S05E12'],
['A Very Sunny Christmas', '9:00 AM on a Thursday', 4, 9, 00, 'S05E13'],
['Mac Fights Gay Marriage', '11:00 AM on a Thursday', 4, 11, 00,'S06E01'],
['Dennis Gets Divorced', '7:30 AM on a Monday', 1, 7, 30, 'S06E02'],
['The Gang Buys a Boat', '10:00 AM  on a Saturday', 6, 10, 00,'S06E03'],
['Mac'+"'"+'s Big Break', '9:30 AM  on a Thursday', 4, 9, 30,'S06E04'],
['Mac and Charlie: White Trash', '12:30 PM  on a Saturday', 6, 12, 30,'S06E05'],
['Mac'+"'"+'s Mom Burns Her House Down', '12:00 PM  on a Thursday', 4, 12, 00,'S06E06'],
['Who Got Dee Pregnant?', '5:30 PM  on a Saturday', 6, 17, 30,'S06E07'],
['The Gang Gets a New Member', '11:30 AM  on a Monday', 1, 11, 30,'S06E08'],
['Dee Reynolds: Shaping America'+"'"+'s Youth', '8:30 AM  on a Monday', 1, 8,30,'S06E09'],
['Charlie Kelly: King of the Rats', '10:00 AM on a Tuesday', 2, 10, 00,'S06E10'],
['The Gang Gets Stranded in the Woods', '3:30 PM  on a Saturday', 6, 15, 30,'S06E11'],
['Dee Gives Birth', '9:30 AM  on a Friday', 5, 9, 30,'S06E12'],
['Frank'+"'"+'s Pretty Woman', '11:30 AM  on a Monday', 1, 11, 30,'S07E01'],
['The Gang Goes to the Jersey Shore', '10:30 AM on a Friday', 5, 10, 30, 'S07E02'],
['Frank Reynolds'+"'"+' Little Beauties', '12:00 PM on a Saturday', 6, 12, 00,'S07E03'],
['Sweet Dee Gets Audited', '11:15 AM  on a Thursday', 4, 11, 15,'S07E04'],
['Frank'+"'"+'s Brother', '3:50 PM  on a Wednesday', 3, 15, 50,'S07E05'],
['The Storm of the Century', '11:40 AM  on a Friday', 5,  11, 40,'S07E06'],
['Chardee MacDennis: The Game of Games', '12:45 PM  on a Monday', 1, 12, 45,'S07E07'],
['The ANTI-Social Network', '9:30 PM  on a Saturday', 6, 21, 30,'S07E08'],
['The Gang Gets Trapped', '1:45 PM  on a Tuesday', 2,  13, 45,'S07E09'],
['How Mac Got Fat', '12:20 PM on a Sunday', 0, 12, 20,'S07E10'],
['Thunder Gun Express', '2:15 PM  on a Wednesday', 3, 14, 15,'S07E11'],
['The High School Reunion', '7:10 PM  on a Friday', 5, 19, 10, 'S07E12'],
['Pop-Pop: The Final Solution', '10:45 AM on a Tuesday', 2, 10, 45,'S08E01'],
['The Gang Recycles Their Trash', '11:40 AM on a Monday', 1, 11, 40,'S08E02'],
['The Maureen Ponderosa Wedding Massacre', '10:00 PM  on a Friday', 5, 22, 00,'S08E03'],
['Charlie and Dee Find Love', '11:30 AM on a Friday', 5, 11, 30, 'S08E04'],
['The Gang Gets Analyzed', '11:00 AM  on a Thursday', 4, 11, 00,'S08E05'],
['Charlie'+"'"+'s Mom Has Cancer', '11:20 AM  on a Saturday', 6, 11, 20, 'S08E06'],
['Frank'+"'"+'s Back in Business', '11:15 AM  on a Friday', 5, 11, 15, 'S08E07'],
['Charlie Rules the World', '10:30 AM on a Tuesday', 2,10, 30, 'S08E08'],
['The Gang Dines Out', '8:17 PM on a Saturday', 6, 20, 17,'S08E09'],
['Reynolds vs. Reynolds: The Cereal Defense', '10:19 AM on a Friday', 5, 10, 19,'S08E10'],
['The Gang Broke Dee', '12:15 PM  on a Wednesday', 3, 12, 15,'S09E01'],
['Gun Fever Too: Still Hot', '9:35 AM on a Tuesday', 2, 9, 35,'S09E02'],
['The Gang Tries Desperately to Win an Award', '2:30 PM on a Friday', 5, 14, 30,'S09E03'],
['Mac and Dennis Buy a Timeshare', '11:45 AM  on a Thursday', 4, 11, 45,'S09E04'],
['Mac Day', '11:55 PM on a Saturday', 6, 23, 55,'S09E05'],
['The Gang Saves the Day', '12:15 PM  on a Wednesday', 3, 12, 15,'S09E06'],
['The Gang Gets Quarantined', '11:30 AM on a Monday', 1, 11, 30,'S09E07'],
['Flowers for Charlie', '9:14 AM  on a Wednesday', 3, 9, 14,'S09E08'],
['The Gang Squashes Their Beefs', '1:00 PM  on a Wednesday', 3, 13, 00,'S09E010'],
['The Gang Beats Boggs', '9:30 AM on a Thursday', 4, 9, 30,'S10E01'],
['The Gang Group Dates', '11:00 AM  on a Tuesday', 2, 11, 00,'S10E02'],
['Psycho Pete Returns', '3:00 PM  on a Monday', 1, 15, 00, 'S10E03'],
['Charlie Work', '9:00 AM on a Monday', 1, 9, 00, 'S10E04'],
['The Gang Spies Like U.S.', '10:00 AM  on a Wednesday', 3, 10, 00,'S10E05'], 
['The Gang Misses the Boat', '3:30 PM on a Friday', 5, 15, 30, 'S10E06'],
['Mac Kills His Dad', '5:05 PM  on a Monday', 1, 17, 05, 'S10E07'],
['The Gang Goes on Family Night', '1:45 PM  on a Tuesday', 2, 13, 45,'S10E08'], 
['Frank Retires', '10:30 AM on a Wednesday', 3, 10, 30, 'S10E09'],
['Ass Kicker'+"'"+'s United: Mac and Charlie Join a Cult', '10:00 AM  on a Wednesday', 3, 10, 00, 'S10E010'],
['Chardee MacDennis 2: Electric Boogaloo', '10:20 AM  on a Monday', 1, 10, 20,'S11E01'], 
['Frank Falls Out the Window', '12:10 PM  on a Wednesday', 3, 12, 10, 'S11E02'],
['The Gang Hits the Slopes', '9:30 AM on a Friday', 5, 9, 30, 'S11E03'],
['Dee Made a Smut Film', '3:12 PM on a Tuesday', 2, 15, 12, 'S11E04'],
['Mac & Dennis Move to the Suburbs', '10:30 AM  on a Thursday', 4, 10, 30,'S11E05'], 
['Being Frank', '11:00 AM on a Friday', 5, 11, 00, 'S11E06'],
['MacPoyle vs. Ponderosa: The Trial of the Century', '7:54 AM on a Friday', 5, 7, 45,'S11E07'], 
['Charlie Catches a Leprechaun', '10:00 AM  on a Wednesday', 3, 10, 00,'S11E8'], 
['The Gang Turns Black', '9:15 PM on a Friday', 5, 21, 15, 'S12E01'],
['The Gang Goes to a Water Park', '9:58 AM  on a Saturday', 6, 9, 58,'S12E02'],

  
];


function getTime(callback) {
  var d = new Date();
  var date = {
    day: d.getDay(),
    hour: d.getHours(),
    minute: d.getMinutes()
  };

  callback(date.day, date.hour, date.minute);
}


function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}

document.addEventListener('DOMContentLoaded', function() {

  getTime(function(day, hour, minute) {
    var cTime = null;
    if (hour >= 12) {
      cTime = (hour - 12) + ":" + minute + "PM";
    } else {
      cTime = hour + ":" + minute + "AM";
    }
    //var cTime = numToTime(hour, minute);
    var cDay = null;
    switch(day){
      case 0:
        cDay = 'Sunday';
      case 1:
        cDay = 'Monday';
      case 2:
        cDay = 'Tuesday';
      case 3:
        cDay = 'Wednesday';
      case 4:
        cDay = 'Thursday';
      case 5:
        cDay = 'Friday';
      case 6:
        cDay = 'Saturday';
    }
    //var cDay = numToDay(day);


    var baseTime = new Date(1970, 0, 1, hour, minute);
    baseTime = baseTime.getTime();

    var delta = 86400000;
    var episodeNum = 0;

    for (i = 0; i < episodes.length; i++) {
      if (episodes[i][2] == day) {
        var compTime = new Date(1970, 0, 1, episodes[i][3], episodes[i][4]);
        compTime = compTime.getTime();

        var tmpDelta = compTime - baseTime;
        if (tmpDelta < 0) {
          if (-tmpDelta < delta) {
            delta = tmpDelta;
            episodeNum = i;
          }
        } else {
          if (tmpDelta < delta) {
            delta = tmpDelta;
            episodeNum = i;
          }
        }
      }
    }


    document.getElementById('cTime').textContent = 'Current Time: ' + cTime + ' on a ' + cDay;
    document.getElementById('episode').textContent = 'You should watch: ' + episodes[episodeNum][0];
    document.getElementById('eTime').textContent = episodes[episodeNum][1];
    document.getElementById('eStats').textContent = episodes[episodeNum][5];
  });
});
