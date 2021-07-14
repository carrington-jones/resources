function narcissisticNumber(number){
    var output = [];
    let stringNumber = number.toString();
    for (var i = 0, len = stringNumber.length; i < len; i += 1){
        output.push(+stringNumber.charAt(i));
    }

    var arraycount = output.length;
    var sum = 0;
    for (var x = 0; x < output.length; x += 1){
       var base = output.valueOf(x);
       console.log(base);
       var mathPower = Math.pow(base,output.length)
        total = (sum + mathPower);
    }
    console.log(total);

}
narcissisticNumber(153);