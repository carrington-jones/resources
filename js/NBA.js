$.ajax("https://www.balldontlie.io/api/v1/players?search=Lebron James").done(function(data) {
    alert("AJAX call completed successfully!");
    console.log(data);
});
$.ajax("https://www.balldontlie.io/api/v1/stats?seasons[]=2020&player_ids[]=237").done(function(data) {
    alert("AJAX call completed successfully!");
    console.log(data);
});