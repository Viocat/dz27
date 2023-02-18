void

function () {
    "use strict"

    function getPolindrom(num) {
        let mainIterator = 0;
        const palindromeObj = innerGetPolindrom();
        return palindromeObj;


        function innerGetPolindrom() {
            let mainNumber = num;
            let reversedNumber = reverse();
            return compare();

            function reverse() {
                return mainNumber.toString().split('').reverse().join('')*1;
            }

            function compare() {
                while (reversedNumber !== mainNumber) {
                    mainNumber+= reversedNumber;
                    mainIterator += 1;
                    reversedNumber = reverse();
                }
                return({result: mainNumber, steps: mainIterator});
            }
        }
    }

    let num = 312;
    const palindrom=getPolindrom(num);
    console.log(palindrom);



}()