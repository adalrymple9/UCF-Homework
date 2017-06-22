function thisCheck(type) {
    console.log(type, this);
}

var obj = {
    a: 1,
    b: 'b',
    thisCheck: function(type) {
        console.log(type, this);
    }
};

var obj2 = {
    a: 2,
    b: 'bb',
    thisCheck: function(type) {
        console.log(type, this);
    }
}

//  this in a function defined in the global scope
thisCheck('plain');

// explicitly setting this using call or apply
thisCheck.call(obj, 'using call'); // or apply

// explicitly setting this using bind
var bindCheck = thisCheck.bind(obj);
bindCheck('after using bind');

bindCheck2 = bindCheck.bind(obj2);
bindCheck2('after bind again');

// this inside of an object
obj.thisCheck('this inside of obj');
obj2.thisCheck('this inside of obj2');

// this in an event handler
var eventBtn = document.getElementById('eventBtn');

eventBtn.addEventListener('click', function(event) {
    console.log('this of event handler', this);
    console.log('the event', event);
});
