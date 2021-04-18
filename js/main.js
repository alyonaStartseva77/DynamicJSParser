function parseJson(result) {
    let obj = JSON.parse(result)
    console.log(obj)
}

function readFileAsString() {
    let fileReader = new FileReader();
    fileReader.readAsText(this.files[0]);
    fileReader.onload = function(){
        parseJson(fileReader.result)
    }
}

document.querySelector('#file-upload').addEventListener('change', readFileAsString)

