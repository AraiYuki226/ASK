$(document).ready(function(){
    //ポップアップの表示
    $("#contents-ASK button").on("click", function(){
        $("#ASKForm-wrapper").css("display", "flex");
    });
    $("#ASKForm-close").on("click", function(){
        $("#ASKForm-wrapper").css("display", "none");
    });

    $("#ASKForm-form .button").on("click", async function(){
        const question = $("#ASKForm-form .input").val();
        //yes or noの取得
        const result = await fetch('https://yesno.wtf/api');
        const data = await result.json();

        //行を足していく
        const tableRow = $($("#contents-result-table-tr-template").html());
        tableRow.find(".contents-result-table-resultQuestion").text(question);
        if(data.answer == "yes"){
            tableRow.find(".contents-result-table-resultAnswer").text("Yes!");
        }
        else{
            tableRow.find(".contents-result-table-resultAnswer").text("No!");
        }
        tableRow.appendTo("#contents-result-table");
        $("#ASKForm-wrapper").css("display", "none");
        $("#ASKForm-form .input").val("");
    });

    $("#ASKForm-form .input").keypress(function(e){
        if(e.which == 13){
            $("#ASKForm-form .button").click();
            return false;
        }
    });
});