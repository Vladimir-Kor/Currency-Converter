let date = new Date();
let today = document.getElementById("today");
let input = document.getElementById("input");
let output = document.getElementById("output");
let option = document.getElementById('variant');
let USD = 0;
let EUR = 0;
let RUB = 0;
let BTC = 0;

let options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long'
};
   today.innerHTML = "To day : "+date.toLocaleString("en-US", options); 

    $.ajax({
        type: 'get',
        dataType: "json",
        url: 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5',
        success: function(response){
            USD = response[0];
            EUR = response[1];
            RUB = response[2];
            BTC = response[3];

            let usdBuy = document.getElementById('usdBuy');
                usdBuy.innerHTML += (+USD.buy).toFixed(2);

            let usdSale = document.getElementById('usdSale');
                usdSale.innerHTML += (+USD.sale).toFixed(2);

            let euroBuy = document.getElementById('euroBuy');
                euroBuy.innerHTML += (+EUR.buy).toFixed(2);

            let euroSale = document.getElementById('euroSale');
                euroSale.innerHTML += (+EUR.sale).toFixed(2);

            let rubBuy = document.getElementById('rubBuy');
                rubBuy.innerHTML += (+RUB.buy).toFixed(2);

            let rubSale = document.getElementById('rubSale');
                rubSale.innerHTML += (+RUB.sale).toFixed(2);

            let btcBuy = document.getElementById('btcBuy');
            btcBuy.innerHTML += (+BTC.buy)+" &#36;";
            let btcSale = document.getElementById('btcSale');
            btcSale.innerHTML += (+BTC.sale)+" &#36;";
        }    
    });

function startTime() {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    document.getElementById('time').innerHTML = hours+":"+minutes+":"+seconds;
    t=setTimeout('startTime()',500);
}

function checkTime(i){
    if (i<10){
        i="0" + i;
    }
    return i;
}

function passChangedValue(){
    converting();
}

function converting() {
    
    if((input.value == 0) && (option)){
        output.value = "";
    } 

    if((input.value == 0) && (output.value == 0) && (option)){
        $("#input" ).blur(function() {
            option.value = 0;
        });
        return
    } 
    if(option.value == 1){
        output.value = (input.value / USD.sale).toFixed(2);
    }
    if(option.value == 2){
        output.value = (input.value / EUR.sale).toFixed(2);
    }
    if(option.value == 3){
        output.value = (input.value / RUB.sale).toFixed(2);
    }
    if(option.value == 4){
        output.value = (input.value * USD.buy).toFixed(2);
    }
    if(option.value == 5){
        output.value = (input.value * USD.buy / EUR.sale).toFixed(2);
    }
    if(option.value == 6){
        output.value = (input.value * USD.buy / RUB.sale).toFixed(2);
    }
    if(option.value == 7){
        output.value = (input.value * EUR.buy / USD.sale).toFixed(2);
    }
    if(option.value == 8){
        output.value = (input.value * EUR.buy).toFixed(2);
    }
    if(option.value == 9){
        output.value = (input.value * EUR.buy / RUB.sale).toFixed(2);
    }
    if(option.value == 10){
        output.value = (input.value * RUB.buy / USD.sale).toFixed(2);
    }
    if(option.value == 11){
        output.value = (input.value * RUB.buy / EUR.sale).toFixed(2);
    }
    if(option.value == 12){
        output.value = (input.value * RUB.buy).toFixed(2);
    }
}



