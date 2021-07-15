// Variables: 
let myLibrary = []; // Library Array 
let i = 0; 

// Selectors: 
    // DOM Manipulators: 
let titleBox = document.querySelector('titleBox'); 
let newBook = document.querySelector('.newBook'); 
let container = document.querySelector('.container'); 
let bar = document.querySelector('.bar'); 
let title = document.querySelector('.title');

// Selectors After New Book Click: 
    // Prompt
let promptBox = document.querySelector('.promptWrapper'); 
let prompt = document.createElement('div'); 
    // Text Inputs 
let userTitleBox = document.createElement('INPUT');
let userAuthorBox = document.createElement('INPUT');
let userPagesBox = document.createElement('INPUT');
    // Buttons
let submitButton = document.createElement('BUTTON'); 
let readSwitchDiv = document.createElement('div'); 
let closeButton = document.createElement('BUTTON');
let rButton = document.createElement('input'); 

// Library Selectors: 
    // Shelf
let bookWrapper = document.querySelector('.bookWrapper');
let shelf = document.createElement('div'); 
let card = document.createElement('div'); 
let newShelf = document.createElement('div'); 

    // Book
let bookTitle = document.createElement('div'); 
let bookAuthor = document.createElement('div'); 
let bookPages = document.createElement('div'); 


// Functions
    // Bluring & Getting Rid of Elements
function buttonTrans() {
    container.style.filter = "blur(18px)";
    container.style.transition = "1.5s";
    newBook.style.opacity = "0%";
    newBook.style.transition = "0.8s"; 
    bar.style.opacity = "0%"; 
    bar.style.transition = "0.8s";
    title.innerHTML = "New Book: ";   
}

    // Unblurring & Adding Elements
function buttonTransTwo() {
    container.style.filter = "blur(7px)";
    container.style.transition = "1.5s";
    newBook.style.opacity = "90%";
    newBook.style.transition = "0.8s"; 
    bar.style.opacity = "50%"; 
    bar.style.transition = "0.8s";  
}

    // Show Forum
function showForum() { 
    prompt.className = "prompt"; 
    promptBox.appendChild(prompt); 
    prompt.style.transition = "opacity 2s"; 
    prompt.style.border = "2px solid rgb(226, 226, 226, 0.9)";
    bookWrapper.style.filter = "blur(18px)";
    bookWrapper.style.transition = "1.5s"; 

}

    // Populating Forum 
function populateForum() {
        // Title 
        userTitleBox.setAttribute("type", "text");
        userTitleBox.setAttribute("autocomplete", "off"); 
        userTitleBox.className = "userText"; 
        userTitleBox.id = "userTitle"; 
        userTitleBox.value = "Title:"; 
        // Author 
        userAuthorBox.setAttribute("type", "text");
        userAuthorBox.setAttribute("autocomplete", "off"); 
        userAuthorBox.className = "userText"; 
        userAuthorBox.id = "userAuthor"; 
        userAuthorBox.value = "Author:";  
        // Pages
        userPagesBox.setAttribute("type", "text");
        userPagesBox.setAttribute("autocomplete", "off"); 
        userPagesBox.className = "userText"; 
        userPagesBox.id = "userPages"; 
        userPagesBox.value = "Number of Pages:";
        // Appending to Parent Div: 
        prompt.appendChild(userTitleBox); 
        prompt.appendChild(userAuthorBox);
        prompt.appendChild(userPagesBox);
}

    // Adding Buttons 
function promptButtons() {
    // Add To Library
    submitButton.innerHTML = "Add To Library"; 
    submitButton.className = "submit"; 
    prompt.appendChild(submitButton); 
    // Read Switch
        // Changing Div Class + Adding Label + Adding to Prompt
    readSwitchDiv.className = "readSwitch";
    readSwitchDiv.innerHTML = "<label for='name' class='readLabel'>Read ?</label>";
    prompt.appendChild(readSwitchDiv); 
        // Creating Read Button + Changing Attributes
    rButton.setAttribute("type", "checkbox"); 
    rButton.className = "read"; 
    rButton.name = "read"; 
    readSwitchDiv.appendChild(rButton);        // Appending to Prompt
    // Close
    closeButton.innerHTML = "X"; 
    closeButton.className = "close"; 
    prompt.appendChild(closeButton); 
}

    // Remove Prompt: 
function removePrompt() {
    prompt.remove(); 
}

// Adding New Book
    // Creates New Book Object: 
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

    // Adds Book To Library Array: 
function addBookToLibrary(temp) {
    myLibrary.push(temp);
}

    // Create "shelf"
function createShelf() {
    bookWrapper.appendChild(shelf); 
    shelf.className = "shelf"; 
}

    // Putting on "Shelf"
function addToShelf() {
    while (i < myLibrary.length) {      // used a while loop so all my elements have local scope. Found Out Too Late. Kinda Sucks. :/ Learned a Lesson
        // Creating "Book"
        let newBookDiv = document.createElement('div'); 
        newBookDiv.className = "card";
        // Creating Title
        let tit = document.createElement('div');
        tit.className = "bookTitle";
        // Creating Author
        let auth = document.createElement('div');
        auth.className = "bookAuthor"; 
        // Creating Page
        let page = document.createElement('div');
        page.className = "bookPages";
        // Read Button. rButt = smaller read button on Book 
        let rButt = document.createElement('button'); 
        rButt.className = "readButton";  
        // Delete Button 
        let delButton = document.createElement('button');
        delButton.className = "delButton";  
        delButton.innerHTML = "X"; 
        // Changing Text to User Input    
        tit.innerHTML = myLibrary[i].title;
        auth.innerHTML = myLibrary[i].author;
        page.innerHTML = myLibrary[i].pages + " pages";
        // Checking Read Status
        if (rButton.checked == true) {
            rButt.innerHTML = "Read"
            rButt.style.color = "rgb(157, 250, 157)"; 
        }
        else if (rButton.checked == false) {
            rButt.innerHTML = "Not Read";
            rButt.style.color = "pink"; 
        }
        // Appending to "Book"
        newBookDiv.appendChild(delButton); 
        newBookDiv.appendChild(tit); 
        newBookDiv.appendChild(auth); 
        newBookDiv.appendChild(page);
        newBookDiv.appendChild(rButt); 
        // Add to "Shelf"    
        shelf.appendChild(newBookDiv);
        // Adding Event Listeners to Read Button on Book
        rButt.addEventListener('click', () => {
            if (rButt.innerHTML == "Not Read") {
                rButt.innerHTML = "Read"; 
                rButt.style.color = "rgb(157, 250, 157)";
            }
            else if (rButt.innerHTML == "Read") {
                rButt.innerHTML = "Not Read";
                rButt.style.color ="pink"; 
            }
        })
        // Adding Event Listeners to Delete Buttons on Book
        delButton.addEventListener('click', () => {
            newBookDiv.remove(); 
        })
        i++; 
    }
   
}

    // Changing Read Status
function changeRead(a) {
    if (a.innerHTML == "Read") {
        a.innerHTML = "Not Read"
        a.style.color = "pink"; 
    }
    else if (a.innerHTML == "Not Read") {
        a.innerHTML = "Read"; 
        a.style.color = "rgb(157, 250, 157)"; 
    }
}

    // Populating BooK
function populateCard() {
    for (c = 0; c < myLibrary.length; c++) {
        let currentBook = document.getElementsbyClassName('card');
        bookTitle.className = "bookTitle";  
        bookTitle.innerHTML = myLibrary[i].title; 
        currentBook.appendChild(bookTitle); 
    }
}

    // Displays Library: Basic - Needs to Update on a New Div/"card" in next version. 

// Event Listeners
    // New Book: 
    newBook.addEventListener('click', () => {
        buttonTrans(); 
        showForum();
        populateForum(); 
        promptButtons(); 
    })

    // Text Inputs: 
    userTitleBox.addEventListener('focus', () => {
        userTitleBox.value = ""; 
    })

    userAuthorBox.addEventListener('focus', () => {
        userAuthorBox.value = ""; 
    })

    userPagesBox.addEventListener('focus', () => {
        userPagesBox.value = ""; 
    })

    // Submit New Book
    submitButton.addEventListener('click', () => {
        createShelf(); 
        let entry = new Book(userTitleBox.value, userAuthorBox.value, userPagesBox.value, rButton.checked); 
        addBookToLibrary(entry); 
        removePrompt(); 
        buttonTransTwo(); 
        title.innerHTML = "Library"; 
        bookWrapper.style.filter = "blur(0px)"; 
        addToShelf();
    })

    // Close: 
    closeButton.addEventListener('click', () => {
        removePrompt(); 
        buttonTransTwo(); 
        bookWrapper.style.filter = "blur(0px)"; 
        title.innerHTML = "Library"; 
    })