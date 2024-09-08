function startGeneration() {
    var username = document.getElementById('username').value;
    if (username) {
        document.getElementById('generatorSection').style.display = 'block';
    } else {
        alert('Veuillez entrer votre pseudo !');
    }
}

function generateVbucks() {
    var amount = document.getElementById('vbuckAmount').value;
    if (amount) {
        document.getElementById('confirmationMessage').innerText = 
            'Les ' + amount + ' V-Bucks vont être ajoutés à votre compte. Veuillez patienter...';
        document.getElementById('confirmation').style.display = 'block';
    }
}
