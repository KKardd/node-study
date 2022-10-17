console.log(global);

global.hello = () => {
    console.log("hello");
    // == global.console.log('hello');
};

global.hello();
hello();