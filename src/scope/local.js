var scope = 'Im Global!';

const helloWorld = () => {
    const hello = 'Hello World!';
    console.log(hello);
}

helloWorld();

//console.log(hello);

const functionScope = () => {
    var scope = 'Im local';
    const func = () =>  scope

    console.log(func());
}

functionScope();