var Eva = {cwsId: "evayl2", firstName: "Eva", lastName: "Liu", jobTitle:"Intern", 
    divisionTeam:"SIS 2.0", email:"Liu_Eva_Y@cat.com", phone:""};

var sampleInterns = [Eva];

var orientation = "";
var Name = "";
var title = "";
var team = "";
var cat_email = "";
var telephone = "";

function getOrientation() {
    var ele = document.getElementsByName('signature-style'); 
    for(i = 0; i < ele.length; i++) { 
        if(ele[i].checked) {
            signatureOrientation = ele[i].value;
        } 
    } 
}

function getInfoFromCWS() {
    orientation = getOrientation();

    console.log(orientation);
    var x = document.getElementById("name").value;
    for (i of sampleInterns) {
        if (i.cwsId == x) {
            Name = i.firstName + " " + i.lastName;
            title = i.jobTitle;
            team = i.divisionTeam;
            cat_email = i.email;
            telephone = i.phone;
            break;
        }
    }
}
