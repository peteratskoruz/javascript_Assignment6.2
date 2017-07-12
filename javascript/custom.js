/**
 * Created by peter joseph on 7/11/2017.
 */


//array element

var arr=[12,18,42,65,79,66,44];

//displaying array element

document.getElementById('arrayElmt').innerHTML=arr;

document.getElementById('arrayed').innerHTML=arr;

//push method

function pushIt(){

    arr.push("67","45","99","81");

    document.getElementById('arrayed').innerHTML=arr;

}

//pop method

function popIt(){

    arr.pop();

    document.getElementById('arrayed').innerHTML=arr;

}

//slice method to extract array element

var extractArry=arr.slice(0,4);

document.getElementById('exarrayed').innerHTML=extractArry;

//Iterate the array element using for of loop

var fLen, text, i;

fLen=arr.length;

text= "<ul>";

for(i=0; i < fLen; i++ )

{
    text +="<li>" + arr[i] + "</li>";
}

text +="</ul>";

document.getElementById("elmIterate").innerHTML=text;