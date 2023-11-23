const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const consentForm = document.getElementById('consent-form')
const modalText = document.getElementById('modal-text')
const declineBtn = document.getElementById('decline-btn')
const modalChoiceBtns = document.getElementById('modal-choice-btns')

//step 1: make the modal appear after 1.5 seconds 
setTimeout(function(){
    modal.style.display = 'inline'
}, 1500)

 //setp 2: decline button impossible to click by toggling a class that reverses the order by listening for an event and toggling a class for it.
declineBtn.addEventListener('mouseenter', function(){
    modalChoiceBtns.classList.toggle('modal-btns-reverse')
})

modalCloseBtn.addEventListener('click', function(){
    modal.style.display = 'none'
}) 


//step 3: listen for the submit event, and 
consentForm.addEventListener('submit', function(e){
    e.preventDefault()

//setp 4: after submiting with info, created instance of object and access info of form to use in the following messages
    const consentFormData = new FormData(consentForm) 
    const fullName = consentFormData.get('fullName') 
    
//step 5: change the inner html to place an image and a p 
    modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="upload-text">Uploading your data to the dark web...</p>
    </div>` 
//step 6: change the text with inner text on a delay with settimeout 
    setTimeout(function(){
        document.getElementById('upload-text').innerText = `
        Making the sale...`
    }, 1500)
    
//step 7: change the modal inner with a header, the full name grabbed from the form and the gif
    setTimeout(function(){
        document.getElementById('modal-inner').innerHTML = `
        <h2>Thanks <span class="modal-display-name">${fullName}</span>, you sucker! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="images/pirate.gif">
        </div>
    `
//finally until this last step, allow the close button to be used by dissabling the attribute 
    modalCloseBtn.disabled = false
    }, 3000)
  
}) 

//LEARNED AND USED 
// 1)what are events -> forces of nature that the system learns to detect and lets us know so we can decide what to do and respond accordingly 
// 2)what are event listeners and handlers -> listeners detect the event and handlers respond to the specific event
// 3)what is the settimeout function -> executes code with a delay
// 4)element style -> way to modify add or remove styles with javacript
// 5)element.classlist -> way to access classes for elements in javascript
// 6)mouseenter mouseout -> events that can happen with a mouse pointer
// 7)onclick handler -> code block to respond to a specific event
// 8)event object -> provides additional info of the event that was just fired
// 9)event.preventdefault method -> prevents default behavior of the event
// 10)FormData -> built in construction function that populates an object with info from the form 
// 11)new -> operator creates a new instance of an user built object or an object of a constructor function()