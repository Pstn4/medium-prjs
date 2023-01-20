name_array=[];
var display_array=[];
function submit(){
for(var j=1; j<= 4 ; j++)
{
    var name=document.getElementById("name_"+j).value;
    console.log(name);
    name_array.push(name); 
}
var length_array=name_array.length;
console.log(length_array);

for(var i=0;i<length_array;i++)
{
    display_array.push("<h4>NAME- "+ name_array[i]+"</h4>");
    console.log(display_array);

}
document.getElementById("display_name_with_commas").innerHTML=display_array;
var remove_commas=display_array.join(" ");
console.log(remove_commas);
document.getElementById("display_name_without_commas").innerHTML=remove_commas;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}
function sorting()
{
    name_array.sort();
    var display_sort_array=[];
    var length_array=name_array.length;
    console.log(length_array)
    for(var i=0;i<length_array;i++)
{
    display_sort_array.push("<h4>NAME- "+ name_array[i]+"</h4>");
    console.log(display_sort_array);

}
var remove_commas=display_sort_array.join(" ");
console.log(remove_commas);
document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}