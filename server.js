var csv = require('./stocks.csv');

function parseCSV(csv) {
  var lines = csv.split('\n');
  var data = [];
  for (var i = 1; i < lines.length; i ++) {
    var line = lines[i].split(',');
    data.push(line);
  }
  return data;
}

app.get('/getData', function(req, res) {
  var data = parseCSV(csv);
  res.send({data})
});
