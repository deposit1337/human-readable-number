module.exports = function toReadable(number) {
    const ones = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const teens = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tens = [
        "",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    const scales = ["", "thousand", "million", "billion", "trillion"];

    if (number === 0) {
        return ones[0];
    }

    let result = '';
    const threeDigitToReadable = (num) => {
        let str = '';
        if (num >= 100) {
          str += ones[Math.floor(num / 100)] + ' hundred ';
          num %= 100;
        }
    
        if (num >= 20) {
          str += tens[Math.floor(num / 10)] + ' ';
          num %= 10;
        }
    
        if (num > 0) {
          if (num >= 10 && num <= 19) {
            str += teens[num - 10];
          } else {
            str += ones[num];
          }
        }
    
        return str.trim();
      };
    
      let scaleIdx = 0;
    
      while (number > 0) {
        const threeDigits = number % 1000;
        if (threeDigits !== 0) {
          result = threeDigitToReadable(threeDigits) + ' ' + scales[scaleIdx] + ' ' + result;
        }
        number = Math.floor(number / 1000);
        scaleIdx++;
      }
    
      return result.trim();
    }

