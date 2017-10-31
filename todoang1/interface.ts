interface shoppingList
{
    items:string,
    price:number,
    status:string

}
class Shopping
{

    public  items:string[];
    public price:number;
    public status:string[];
    constructor(items:string[],price:number,status:string[])
    {
        this.items=items,
            this.price=price,
            this.status=status
    }
    add(list:shoppingList)
    {
        this.items.push(list.items);
        this.price=list.price;
        this.status.push(list.status);

    }
    display()
    {
        console.log(`items ${this.items}`);
        console.log(`price ${this.price}`);
        console.log(`status ${this.status}`);
    }
    updateVal(name:string,value:string)
    {
        for(var i=0;i<this.items.length;i++){
            if(name==this.items[i]){
                this.items[i]=value;
                this.status[i]="Updated";
            }
        }
    }
    markComplete(name:string)
    {
        for(var i=0;i<this.items.length;i++){
            if(name==this.items[i]){
                this.status[i]="Completed";
            }
        }

    }
    delet(col:string)
    {
      for(var i=0;i<this.items.length;i++){
          if(col==this.items[i])
          {
              this.status[i]="Deleted";
          }
      }

    }

}
var list= new Shopping(["apples"],7,["true"]);
function addItem(item:string,price:number)
{
    list.add({
        items:item,
        price:price,
        status:"true"
    });}
    function displayitem()
    {
    list.display();}
    function deleteditem(col:string)
    {
        list.delet(col);
    }
function markUp(name:string){
    list.markComplete(name);
}
function updateVal(name:string,value:string){
    list.updateVal(name,value);
}