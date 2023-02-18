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
                let degree = (function () {
                    let tmpNum=mainNumber;
                    let count = 0;
                    for (; tmpNum > 10; count++) {
                        tmpNum = (tmpNum - tmpNum % 10) / 10;
                    }
                    return count;
                })();

                return innerNumberReverse(mainNumber, degree);

                function innerNumberReverse(num, degree) {
                    if (num % 10 === 0) {
                        return num;
                    } else {
                        return (num % 10) * Math.pow(10, degree) + innerNumberReverse((num - num % 10) / 10, --degree);
                    }
                }
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

    let num = 96;
    const palindrom=getPolindrom(num);
    console.log(palindrom);



}()