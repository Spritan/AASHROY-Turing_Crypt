window.onload() = function(){
    const button = document.getElementById('submit');
    
    
    if(button){
        button.addEventListener('click', () => addReport());
    }else{
        console.log("Not found")
    }
    
    async function addReport(){
        var dateOfComplain = document.getElementById('dateOfComplaint').value
        var fnam = document.getElementById('fname').value
        var lnam = document.getElementById('lname').value
        var emai = document.getElementById('email').value 
        var stree = document.getElementById('street').value
        var cit = document.getElementById('city').value
        var regio = document.getElementById('region').value
        var zi = document.getElementById('zip').value 
        var severit = document.getElementById('severity').value 
        var dateOfInciden = document.getElementById('dateOfIncident').value
        var complaintDetail = document.getElementById('complaintDetails').value
        var desiredOutcom = document.getElementById('desiredOutcomes').value
        // var zip = document.getElementById('zip').value 
        // console.log(passInput)
        // console.log(userInput)
        // console.log(emailInput)
        
        // return
        
        try {
                let data = {dateOfComplaint: dateOfComplain, fname: fnam, lname: lnam, email: emai, street: stree, city: cit, region: regio, zip: zi,
                severity: severit, dateOfIncident: dateOfInciden, complaintDetails: complaintDetail, desiredOutcome: desiredOutcom};
                console.log(data)
                const response = await fetch('http://localhost:5000/addReport', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            // document.getElementById('userInput').value = ""
            // document.getElementById('passInput').value = ""
            // document.getElementById('emailInput').value = ""
            console.log("Report added")
            alert('Report Added')
            console.log(response);
        } catch (error) {
            console.log('Error in Report')
            console.log(error);
        }
        
        
    }
}