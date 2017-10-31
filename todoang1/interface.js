var Shopping = /** @class */ (function () {
    function Shopping(items, price, status) {
        this.items = items,
            this.price = price,
            this.status = status;
    }
    Shopping.prototype.add = function (list) {
        this.items.push(list.items);
        this.price = list.price;
        this.status.push(list.status);
    };
    Shopping.prototype.display = function () {
        console.log("items " + this.items);
        console.log("price " + this.price);
        console.log("status " + this.status);
    };
    Shopping.prototype.updateVal = function (name, value) {
        for (var i = 0; i < this.items.length; i++) {
            if (name == this.items[i]) {
                this.items[i] = value;
                this.status[i] = "Updated";
            }
        }
    };
    Shopping.prototype.markComplete = function (name) {
        for (var i = 0; i < this.items.length; i++) {
            if (name == this.items[i]) {
                this.status[i] = "Completed";
            }
        }
    };
    Shopping.prototype.delet = function (col) {
        for (var i = 0; i < this.items.length; i++) {
            if (col == this.items[i]) {
                this.status[i] = "Deleted";
            }
        }
    };
    return Shopping;
}());
var list = new Shopping(["apples"], 7, ["true"]);
function addItem(item, price) {
    list.add({
        items: item,
        price: price,
        status: "true"
    });
}
function displayitem() {
    list.display();
}
function deleteditem(col) {
    list.delet(col);
}
function markUp(name) {
    list.markComplete(name);
}
function updateVal(name, value) {
    list.updateVal(name, value);
}
