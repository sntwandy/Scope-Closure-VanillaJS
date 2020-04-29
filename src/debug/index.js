var a = 'Hello';

function hello() {
    let b = 'Hello World.';
    const c = 'Hello World!.'

    if (true) {
        let d = 'Hello World!!.'
        debugger
    }
}

hello();

const moneyBox = () => {
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`MoneyBox: ${saveCoins}`);
    }
    return countCoins;
}

let myMoneyBox = moneyBox();

myMoneyBox(10); // 10
myMoneyBox(20); // 30
myMoneyBox(5); // 35