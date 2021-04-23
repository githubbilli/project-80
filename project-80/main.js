function get_paragraph_1() {
    var inputs = [];
    for(var i = 1; i <= 6; i++){
        inputs.push(document.getElementById("input_" + i).value);
    }
    inputs.join(". ");
    document.getElementById("show_text").innerHTML=inputs.join(". ");
}
function get_paragraph_2() {
    var inputs2 = [];
    for(var j = 1; j <= 6; j++){
        inputs2.push(document.getElementById("inputing_" + j).value);
    }
    inputs2.join(". ");
    document.getElementById("show_text2").innerHTML=inputs2.join(". ");
}



