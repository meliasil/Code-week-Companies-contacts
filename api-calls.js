export const users = 'https://jsonplaceholder.typicode.com/users';




    export const filterAll = () => {
    
        fetch (users).then((res) => {
            return res.json();
        }).then((users) => {
        
        users.forEach(items => {

            const cardContainer = document.querySelector('.card-container');
            const newCard = document.createElement('div');
            newCard.classList = 'card';
            newCard.style.display = 'none';


    
            const companyEl = document.createElement('h2');
            companyEl.className = 'company-El';
            companyEl.innerHTML = items.company.name;
            

            const catchPhraseEl = document.createElement('h3');
            catchPhraseEl.className = 'catch-Phrase';
            catchPhraseEl.innerHTML = `«${items.company.catchPhrase}»`;


            const addressEl = document.createElement('p');
            addressEl.innerHTML = `street: ${items.address.street}, suite: ${items.address.suite}, city: ${items.address.city}`;


            const phoneEl = document.createElement('p');
            phoneEl.innerHTML = `phone: ${items.phone}`;


            newCard.append(companyEl, catchPhraseEl, addressEl, phoneEl);
            cardContainer.append(newCard);
    
        })
        
    })
        
}



export const showCard = () => {

    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {

        if(card.style.display === 'none') {
        card.style.display = 'block'

        } else if (card.style.display === 'block') {
        card.style.display = 'none';
        }
    })
}




let firstLetter = '';
let companiesNames = '';

const startsWithLetter = (companiesNames, firstLetter) => {
    return firstLetter.includes(companiesNames.charAt(0));
}


export const filterAE = () => {

    fetch (users).then((res) => {
        return res.json();
    }).then((users) => {

    
    
    users.forEach(user => {

            const companiesNames = user.company.name;
            const firstLetter = ['A', 'B', 'C', 'D', 'E'];
            if (startsWithLetter(companiesNames, firstLetter)) {

                console.log(companiesNames);


            }
        })
    })
}
        





export const filterFL = () => {

    fetch (users).then((res) => {
        return res.json();
    }).then((users) => {

    
    
    users.forEach(user => {

            const companiesNames = user.company.name;
            const firstLetter = ['F', 'G', 'H', 'I', 'J', 'K', 'L'];
            if (startsWithLetter(companiesNames, firstLetter)) {
                
                console.log(companiesNames)

            }
        })
    }
)};




export const filterMZ = () => {

    fetch (users).then((res) => {
        return res.json();
    }).then((users) => {

    
    
    users.forEach(user => {

            const companiesNames = user.company.name;
            const firstLetter = ['M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
            if (startsWithLetter(companiesNames, firstLetter)) {
                
                console.log(companiesNames)

            }
        })
    }
)};
