var last = localStorage.getItem("last")
function lastSearch(){
    var newBtn =  $("<button>");
    newBtn.attr("class", "btn btn-outline-secondary city");
    newBtn.html(last);
    newBtn.css({
        width:"100%",
        textAlign:"left",
        marginBottom:"5px"
    });
    var newCity = $("<div>");
    newCity.append(newBtn);
    $(".history").prepend(newCity);
    var city = last
    var queryURL =  "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=ccf5e1046d2ba06be2c7b1b738a2bda0"
    $.ajax({
        url: queryURL,
        method:"GET"
    }).then(function(response){
        console.log(response)
            var d = new Date();
            var temp = (((1.8)*(response.main.temp-273)+32).toFixed(1)).toString()
            var date = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate()
            var weather = response.weather[0].icon
            $(".date").html(response.name+ "  " +date)
            $(".temp").html("Temperature: " + temp + "°F")
            $(".humidity").html("Humidity: " + response.main.humidity + "%")
            var icon = $("<img src = 'http://openweathermap.org/img/wn/" + weather + "@2x.png'>")
            $(".icon").html("")
            $(".icon").append(icon)
            $(".wind").html("Wind Speed: "+response.wind.speed+"MPH")
            var lat = response.coord.lat
            var lon = response.coord.lon
            var queryURL = "http://api.openweathermap.org/data/2.5/uvi?lat="+lat+"&&lon="+lon+"&appid=ccf5e1046d2ba06be2c7b1b738a2bda0"
            $.ajax({
                url: queryURL,
                method:"GET"
            }).then(function(response){
                $(".uv").html(response.value)
                $(".uv").removeAttr("id")
                if(response.value >= 8){
                    $(".uv").attr("id", "intense")
                }
                else if(response.value <= 2){
                $(".uv").attr("id", "safe")
                }
                else{
                    $(".uv").attr("id", "moderate")
                }
            })
    })

    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=ccf5e1046d2ba06be2c7b1b738a2bda0"
    $.ajax({
        url: queryURL,
        method:"GET"
    }).then(function(response){
        for(var i = 3; i < 36; i=i+8){
            var temp = (((1.8)*(response.list[i].main.temp-273)+32).toFixed(1)).toString()
            var date = response.list[i].dt_txt.substring(0,10)
            var weather = response.list[i].weather[0].icon
            $(".date"+i).html(date)
            $(".temp"+i).html("Temperature: " + temp + "°F")
            $(".humidity"+i).html("Humidity: " + response.list[i].main.humidity + "%")
            var icon = $("<img src = 'http://openweathermap.org/img/wn/" + weather + ".png'>")
            $(".icon"+i).html("")
            $(".icon"+i).append(icon)

            
        }
        console.log(weather)
        
        
        
    })
}
var check = [last]
function generateBtn(){
    var last = localStorage.getItem("last")
    var newBtn =  $("<button>");
        newBtn.attr("class", "btn btn-outline-secondary city");
        newBtn.attr("id", $(".search").val())
        newBtn.html($(".search").val());
        newBtn.css({
            width:"100%",
            textAlign:"left",
            marginBottom:"5px"
        });
        var city = $("<div>");
        city.append(newBtn);
        $(".history").prepend(city);
        var last = $(".search").val()
        check.push(last)
        localStorage.setItem("last",last)
}


function loadInfo(){
    var city = event.target.textContent
    var last = city
    localStorage.setItem("last",last)
    var queryURL =  "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=ccf5e1046d2ba06be2c7b1b738a2bda0"
    $.ajax({
        url: queryURL,
        method:"GET"
    }).then(function(response){
        console.log(response)
            var d = new Date();
            var temp = (((1.8)*(response.main.temp-273)+32).toFixed(1)).toString()
            var date = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate()
            var weather = response.weather[0].icon
            $(".date").html(response.name+ "  " +date)
            $(".temp").html("Temperature: " + temp + "°F")
            $(".humidity").html("Humidity: " + response.main.humidity + "%")
            var icon = $("<img src = 'http://openweathermap.org/img/wn/" + weather + "@2x.png'>")
            $(".icon").html("")
            $(".icon").append(icon)
            $(".wind").html("Wind Speed: "+response.wind.speed+"MPH")
            var lat = response.coord.lat
            var lon = response.coord.lon
            var queryURL = "http://api.openweathermap.org/data/2.5/uvi?lat="+lat+"&&lon="+lon+"&appid=ccf5e1046d2ba06be2c7b1b738a2bda0"
            $.ajax({
                url: queryURL,
                method:"GET"
            }).then(function(response){
                $(".uv").html(response.value)
                $(".uv").removeAttr("id")
                if(response.value >= 8){
                    $(".uv").attr("id", "intense")
                }
                else if(response.value <= 2){
                $(".uv").attr("id", "safe")
                }
                else{
                    $(".uv").attr("id", "moderate")
                }
            })
    })

    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=ccf5e1046d2ba06be2c7b1b738a2bda0"
    $.ajax({
        url: queryURL,
        method:"GET"
    }).then(function(response){
        for(var i = 3; i < 36; i=i+8){
            var temp = (((1.8)*(response.list[i].main.temp-273)+32).toFixed(1)).toString()
            var date = response.list[i].dt_txt.substring(0,10)
            var weather = response.list[i].weather[0].icon
            $(".date"+i).html(date)
            $(".temp"+i).html("Temperature: " + temp + "°F")
            $(".humidity"+i).html("Humidity: " + response.list[i].main.humidity + "%")
            var icon = $("<img src = 'http://openweathermap.org/img/wn/" + weather + ".png'>")
            $(".icon"+i).html("")
            $(".icon"+i).append(icon)

            
        }
        console.log(weather)
        
        
        
    })
}
function loadInfoSearch(){
    var city = $(".search").val()
    var queryURL =  "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=ccf5e1046d2ba06be2c7b1b738a2bda0"
    $.ajax({
        url: queryURL,
        method:"GET"
    }).then(function(response){
        console.log(response)
            var d = new Date();
            var temp = (((1.8)*(response.main.temp-273)+32).toFixed(1)).toString()
            var date = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate()
            var weather = response.weather[0].icon
            $(".date").html(response.name+ "  " +date)
            $(".temp").html("Temperature: " + temp + "°F")
            $(".humidity").html("Humidity: " + response.main.humidity + "%")
            var icon = $("<img src = 'http://openweathermap.org/img/wn/" + weather + "@2x.png'>")
            $(".icon").html("")
            $(".icon").append(icon)
            $(".wind").html("Wind Speed: "+response.wind.speed+"MPH")
            var lat = response.coord.lat
            var lon = response.coord.lon
            var queryURL = "http://api.openweathermap.org/data/2.5/uvi?lat="+lat+"&&lon="+lon+"&appid=ccf5e1046d2ba06be2c7b1b738a2bda0"
            $.ajax({
                url: queryURL,
                method:"GET"
            }).then(function(response){
                $(".uv").html(response.value)
                $(".uv").removeAttr("id")
                if(response.value >= 8){
                    $(".uv").attr("id", "intense")
                }
                else if(response.value <= 2){
                $(".uv").attr("id", "safe")
                }
                else{
                    $(".uv").attr("id", "moderate")
                }
            })
            
    })

    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=ccf5e1046d2ba06be2c7b1b738a2bda0"
    $.ajax({
        url: queryURL,
        method:"GET"
    }).then(function(response){
        for(var i = 3; i < 36; i=i+8){
            var temp = (((1.8)*(response.list[i].main.temp-273)+32).toFixed(1)).toString()
            var date = response.list[i].dt_txt.substring(0,10)
            var weather = response.list[i].weather[0].icon
            $(".date"+i).html(date)
            $(".temp"+i).html("Temperature: " + temp + "°F")
            $(".humidity"+i).html("Humidity: " + response.list[i].main.humidity + "%")
            var icon = $("<img src = 'http://openweathermap.org/img/wn/" + weather + ".png'>")
            $(".icon"+i).html("")
            $(".icon"+i).append(icon)
        }
        console.log(weather)
        
        
        
    })
}

if(localStorage.getItem("last") == null){

}
else{
    lastSearch()
};

$(document).on("click", '.city', function(event){
    loadInfo()
})


$(".searchBtn").on("click", function(){
    if($(".search").val() == "" || $(".search").val() == localStorage.getItem("last") || check.includes($(".search").val())){
        loadInfoSearch()
    }
    else{
        generateBtn()
        loadInfoSearch()
    }
});
 




