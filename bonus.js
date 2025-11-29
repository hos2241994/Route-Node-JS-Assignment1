 /**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    const value =  init;
    return {
        init,
        increment: function (){
            return this.init += 1;
        },
        decrement: function (){
            return this.init -= 1;
        },
        reset: function (){
            this.init = value;
            return init;
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */