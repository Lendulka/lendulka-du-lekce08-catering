console.log('Už funguju!')
/*
Mějme tři cateringové společnosti dodávající občerstvení na různé akce. Jsou to

Just Food: Dodává levné jídlo vyrobené z nepříliš kvalitních surovin.

Your Mama: Dodává středně drahé jídlo vyrobené z lepších surovin.

Flavour Haven: Dodává drahé jídlo z kvalitních surovin.

Napište pro každou z těcho společností funkci s jedním parametrem, který udává, pro kolik lidí se catering objednává. Funkce pak vrátí řetězec obsahující zprávu o tom že catering byl dodán a za jakou cenu. Například
Vyzkoušjte si vaše funkce v konzoli. Poté napište funkci createEvent, která představuje vytvoření nějaké události s cateringem. Funkce na vstupu obdrží název události, počet lidí a funkci, pomocí které se má provést catering. Funkce createEvent pak vrátí zprávu ve smyslu
*/

const justFood = (people) => {
    return `catering od Just Food pro ${people} lidí za ${Math.round(people * priceJustFood)} Kč`
}

const yourMama = (people) => {
    return `catering od Your Mama pro ${people} lidí za ${Math.round(people * priceYourMama)} Kč`
}

const flavourHaven = (people) => {
    return `catering od Flavour Haven pro ${people} lidí za ${Math.round(people * priceFlavourHaven)} Kč`
}

const createEvent = (nameEvent, people, catering) => {
    return `Událost ${nameEvent} s ${catering(people)}`
}

let priceJustFood = 200
let priceYourMama = 400
let priceFlavourHaven = 1000

console.log(createEvent('Birthday party', 100, justFood))
console.log(createEvent('Branch opening', 200, yourMama))
console.log(createEvent('Ballet Gala', 300, flavourHaven))

document.body.innerHTML += `
    <p>${createEvent('Birthday party', 100, justFood)}</p>
    <p>${createEvent('Branch opening', 200, yourMama)}</p>
    <p>${createEvent('Ballet Gala', 300, flavourHaven)}</p>
`