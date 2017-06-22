//pass a paramater with current value of the counter, protects the var however it is still global
function counter(current){
	var a = current;
	a++ 
	console.log(a);
	return a
} 

//always going to have a global var to have a comparison to a
var current = 0;
current = counter(current);
current = counter(current);
current = counter(current);


//option 2
//constructior creates an instance private and public var 
//var inside constructor will be private  
function Counter() {
	var a = 0;
	this.count = function(){
		//when you assign a value to this its public 
		a++;
		console.log(a);
	}
}
var c = new Counter();
c.count();
//does not exist before line 30, has nothing to do with the a on 21 which is why it cant be overwritten 
c.a = 100;
c.count();
c.count();
