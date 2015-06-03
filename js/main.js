

$.getJSON("http://private-44f6d-timeline6.apiary-mock.com/timeline").done( function(data) {

  data.timelines.forEach (function(timeline){
    if (timeline.timestamp) {
      timeline.date = moment(new Date(timeline.timestamp)).format('M/D/YY');
      timeline.times = moment(new Date(timeline.timestamp)).format('hh:mm');
    }
    return timeline;
  });

  $('.container').append(template.temp(data));
});
