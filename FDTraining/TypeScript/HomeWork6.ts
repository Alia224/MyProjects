class Library {
    readline = require("readline")
    rl = this.readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    books: { title: string; author: string }[] = [];

    AskTheUser() {
        this.rl.question("What do you want to do ", (Answer: string) => {
            if (Answer.toLowerCase() == "add") {
                this.addBook()


            } else if (Answer.toLowerCase() == "list") {
                this.listBooks()

            }
            else if (Answer.toLowerCase() == "search") {
                this.searchBook()

            } else if (Answer.toLowerCase() == "exit") {
                console.log(`As you wish till next time`)
                this.exit()
            }
            else {
                console.log(`Sorry we dont have your request`)
                this.exit()
            }


        });

    }


    addBook() {
        this.rl.question("Enter book title: ", (titleAnswer: string) => {
            this.rl.question("Enter author: ", (authorAnswer: string) => {
                this.books.push({ title: titleAnswer.trim(), author: authorAnswer.trim() });
                console.log("Book added!");
                this.AskTheUser()

            });
        });


    }
    listBooks() {
        for (let value of this.books) {
            console.log(`The title of the books is ${value.title}`)
        }
        this.AskTheUser()


    }
    searchBook() {
        this.rl.question("Enter the name of the book you wish searching for: ", (authorAnswer: string) => {
            let keyword = authorAnswer.trim()
       
            for (let value of this.books) {
                if (keyword.toLowerCase == value.title.toLowerCase) {
                    console.log(`Yes the book that your asking for is in our library --> ${value.title}`)
                    break;

                } else {
                    console.log(`Sorry the book is missing for the moment`)
                }


            } this.AskTheUser()

        });





    }
    exit() {
        this.rl.close()
    }
}
let Try = new Library()

Try.AskTheUser()
