const converter = [
    { 
        integer: 1,
        roman: "I"
    },
    {
        integer: 2,
        roman: "II"
    },
    { 
        integer: 3,
        roman: "III"
    },
    {
        integer: 4,
        roman: "IV"
    },
    { 
        integer: 5,
        roman: "V"
    },
    { 
        integer: 9,
        roman: "IX"
    },
    { 
        integer: 10,
        roman: "X",
    },
    { 
        integer: 20,
        roman: "XX",
    },
    { 
        integer: 30,
        roman: "XXX",
    },
    { 
        integer: 40,
        roman: "XL"
    },
    { 
        integer: 50,
        roman: "L"
    },
    { 
        integer: 90,
        roman: "XC"
    },
    { 
        integer: 100,
        roman: "C",
    },
    { 
        integer: 200,
        roman: "CC",
    },
    { 
        integer: 300,
        roman: "CCC",
    },
    { 
        integer: 400,
        roman: "CD"
    },
    { 
        integer: 500,
        roman: "D"
    },
    { 
        integer: 900,
        roman: "CM"
    },
    { 
        integer: 1000,
        roman: "M",
    },
    { 
        integer: 2000,
        roman: "MM",
    },
    {
        integer: 3000,
        roman: "MMM",
    },
]
converter.reverse()



function intToRoman(num: number): string {
    let tenPowered = 1000
    let value = num
    let result = ""
    while (value > 0) {
        let toZero = Math.floor(value / tenPowered) * tenPowered

        const fitting = converter.find((converterItem) => converterItem.integer <= toZero)
        if (!fitting) {
            tenPowered /= 10
            continue
        }

        value -= fitting.integer
        result += fitting.roman   
    }

    return result
};

