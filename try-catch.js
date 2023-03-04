function addBlock() {
    const inputAge = document.getElementById('input-age');
    const ageText = inputAge.value;
    
    try {
        if (isNaN(ageText)) {
            throw 'Enter a valid Numbe!!'
        }
        else if (ageText < 18) {
            throw 'baccha polaipan not allowed!'
        }
     
             document.getElementById('error').innerText =''
       
    } catch (err) {
        document.getElementById('error').innerText = `  ${err}`
    }
}