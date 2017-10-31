
window.onload=getAll();


function Add(){
    var input=document.getElementById('inp');
    var btn=document.getElementById('btn');

    btn.onclick=function()
    {
        var price=50;
        var value1=input.value;
        addItem(value1,price);
        displayitem();
        var todo=document.getElementById("todo");
        var row=document.createElement("tr");
        var col=document.createElement("td");
        col.setAttribute("class","col");
        col.innerHTML=value1;
        var del=document.createElement("button");
        del.innerHTML="&#10006 Delete";

        var mark=document.createElement("button");
        mark.innerHTML="&#8730 Complete";
        var update=document.createElement("button");
        update.innerHTML="&#9997 Update";
        update.setAttribute("class","update");
        del.setAttribute("class","del");
        mark.setAttribute("class","mark");
        var col_del=document.createElement('td');
        col_del.appendChild(del);
        var col_mark=document.createElement('td');
        col_mark.appendChild(mark);
        var col_update=document.createElement('td');
        col_del.setAttribute("class","col_del");
        col_mark.setAttribute("class","col_mark");
        col_update.setAttribute("class","col_update");
        col_update.appendChild(update);
        row.appendChild(col);
        row.appendChild(col_del);
        row.appendChild(col_update);
        row.appendChild(col_mark);
        todo.appendChild(row);
        del.onclick=function(){
              var a=confirm("do you want to delete");
              if(a)
              {
                  deleteditem(col.innerText);
                  col.setAttribute("class","col1");
                  displayitem();
                row.removeChild(col_del);
               row.removeChild(col_update);
               row.removeChild(col_mark);


        }}
        mark.onclick=function(){
            markUp(col.innerText);
            displayitem();
            row.removeChild(col_update);
            row.removeChild(col_mark);

        }
update.onclick=function(){
            var updateid=document.getElementById("edittext");
            updateid.style.visibility="visible";
    document.getElementById("buttn").onclick=function(){
        var val=document.getElementById('text').value;
        console.log(val);
        updateVal(col.innerText,val);
        displayitem();
        console.log(val);
        col.innerText=val;
        var updateid=document.getElementById("edittext");
        updateid.style.visibility="hidden";
    }


}

    };


}


function getAll()
{
    Add();
}

