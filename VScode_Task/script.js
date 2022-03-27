document.write("星の出力");
document.write("<br>");

document.write("■■■問１■■■");
document.write("<br>");
    for(var i=1;i<=5;i++){
        document.write("★");
    }
document.write("<br>");
document.write("<br>");

document.write("■■■問2■■■");
document.write("<br>");
    for(var i = 1; i <= 2;  i++){
        for(var a = 1; a <= 3;  a++){
            document.write("★");
        }
        document.write("<br>");
    }
document.write("<br>");

document.write("■■■問3■■■");
document.write("<br>");
    for(var i = 1; i <= 4;  i++){
        for(var a = 1; a <= 5;  a++){
        document.write("★");
        }
        document.write("<br>");
    }
document.write("<br>");

document.write("■■■問4■■■");
document.write("<br>");
for(var i = 1; i <= 3;  i++){
    for(var a = 1; a <=3; a++){
        if(a % 2 == 1){
            document.write("★");
        }else{
            document.write("☆");
        }
    }
    document.write("<br>");
}
document.write("<br>");

document.write("■■■問5■■■");
document.write("<br>");
for(var i = 1; i <= 4;  i++){
    for(var a = 1; a <=5; a++){
        if(a % 2 == 1){
            document.write("★");
        }else{
            document.write("☆");
        }
    }
    document.write("<br>");
}
document.write("<br>");

document.write("■■■問6■■■");
document.write("<br>");
for(var i =1; i < 6; i++){
    for(var a = 0; a<i; a++){
            document.write("★");
        }
        document.write("<br>");
}
document.write("<br>");

//ここから下は次の課題
document.write("関数");
document.write("<br>");

document.write("問１");
document.write("<br>");

function menseki(hankei){
    return(hankei*hankei*3.14);
}
document.write(menseki(5));
document.write("<br>");
document.write(menseki(7));
document.write("<br>");
document.write(menseki(10));
document.write("<br>");
document.write("<br>");

document.write("問2");
document.write("<br>");

function total_price(group,a,b,otona=500,kodomo=200){
    return document.write(group+"グループの合計金額は"+(a*otona+b*kodomo)+"円です。");
}
total_price("A",2,4);
document.write("<br>");
total_price("B",1,5);
document.write("<br>");
total_price("C",3,7);
document.write("<br>");

document.write("<br>");

//ここから下は次の課題
document.write("星の出力(上級)");
document.write("<br>");

document.write("■■■問1■■■");
document.write("<br>");
for(var i = 0; i < 5; i++){
    for(var a = 0; a < 5; a++){
        const j = i * 5 + a;//constで変数jを定義してiを代入
        if(j % 2){
            document.write("☆");
        }else{
             document.write("★");
            }
    }
    document.write("<br>");
};
document.write("<br>");

document.write("■■■問2■■■");
document.write("<br>");
for(var i =0; i < 5; i++){
    for(var a = 0; a < 5; a++){
        if(a == i){
            document.write("☆");
        }else{
            document.write("★");
        }
    }document.write("<br>");
}
document.write("<br>");

document.write("■■■問3■■■");
document.write("<br>");
for(var i =1; i < 6; i++){
    for(var a = 1; a<i; a++){
        document.write("★");
    }
    for(var a = 0; a==0; a++){
        document.write("☆");
    }
    document.write("<br>");
}
document.write("<br>");
