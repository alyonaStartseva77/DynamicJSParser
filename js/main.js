function generatedForm(obj) {
    console.log(obj)

    addForm(obj)
    addButtonClear()
}

function addTitleForm(title, form) {
    let titleForm = document.createElement('h2')
    titleForm.textContent = title
    form.append(titleForm)
}

function addButton(buttons, form) {
    buttons.forEach( (item) => {
        let button = document.createElement('button')
        button.classList.add('btn', 'btn-primary', 'my-3', 'mr-3')
        button.textContent = item.text
        form.append(button)
    })
}

function addForm(obj) {
    /*Add a tag form*/
    let form = document.createElement('form')
    form.classList.add('generated-form', 'col-md-6')
    sectionParse.append(form)

    const titleForm = obj.name || null
    const fields = obj.fields || null
    const references = obj.references || null
    const buttons = obj.buttons || null

    /*Add content to the form*/
    if (titleForm != null) {
        addTitleForm(titleForm, form)
    }



    if (buttons != null) {
        addButton(buttons, form)
    }

}

function  clearPage() {
    sectionParse.innerHTML = ''
}

function addButtonClear() {
    /*Add a footer for a button*/
    let footer = document.createElement('footer')
    footer.classList.add('drop-form', 'col-md-12')
    sectionParse.append(footer)

    /*Add a button to clear*/
    let buttonClear = document.createElement('button')
    buttonClear.classList.add('btn', 'btn-primary', 'my-3', 'custom-button')
    buttonClear.textContent = 'Clear'
    footer.append(buttonClear)

    buttonClear.addEventListener('click', clearPage)
}

function parseJson(result) {
    let obj = JSON.parse(result)
    generatedForm(obj)
}

function readFileAsString() {
    let fileReader = new FileReader()
    fileReader.readAsText(this.files[0])
    fileReader.onload = function(){
        parseJson(fileReader.result)
    }
}

const buttonUpload = document.querySelector('#file-upload')
const sectionParse = document.querySelector('.parse-json')

buttonUpload.addEventListener('change', readFileAsString)
