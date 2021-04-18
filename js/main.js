function generatedForm(obj) {
    console.log(obj)

    addForm(obj)
    addButtonClear()

}

function addForm(obj) {
    /*Add a tag form*/
    let form = document.createElement('form')
    form.classList.add('generated-form', 'col-md-6')
    sectionParse.append(form)

    /*Add a title form*/
    let titleForm = document.createElement('h2')
    titleForm.textContent = obj.name
    form.append(titleForm)
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
