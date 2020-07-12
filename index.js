let model = new cvstfjs.ClassificationModel();

const classifierElement = document.getElementById('classifier');
const loaderElement = document.getElementById('loader');

async function initialize() {

    await model.loadModelAsync('trained-model/model.json');
    classifierElement.style.display = 'block';
    loaderElement.style.display = 'none';

    document.getElementById('predict').addEventListener('click', () => predict());

}

async function predict () {

    const image = document.getElementById('img');
    const result = await model.executeAsync(img);

    if (result[0][0] >  result[0][1]){
        alert("It's a cat with probability " + result[0][0].toFixed(2));
    } else if (result[0][1] >  result[0][0]){
        alert("It's a dog with probability " + result[0][1].toFixed(2));
    } else {
        alert("Hmmm... a weird error occurred.");
    }

}

function changeImage() {
    var imageDisplay = document.getElementById('img');
    var uploadedImage = document.getElementById('my-file-selector').files[0];
    imageDisplay.src = URL.createObjectURL(uploadedImage);
}

initialize();