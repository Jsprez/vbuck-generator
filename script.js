function startGeneration() {
    var username = document.getElementById('username').value;
    if (username) {
        document.getElementById('generatorSection').style.display = 'block';
    } else {
        alert('Veuillez entrer votre pseudo !');
    }
}

function generateVbucks() {
    var amount = prompt('Combien de V-Bucks voulez-vous générer ?');
    if (amount) {
        document.getElementById('confirmationMessage').innerText = 
            'Les ' + amount + ' V-Bucks vont être envoyés à votre compte !';
        document.getElementById('confirmation').style.display = 'block';
    }
}
