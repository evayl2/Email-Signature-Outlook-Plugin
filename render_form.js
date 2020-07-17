var Eva = {cwsId: "evayl2", firstName: "Eva", lastName: "Liu", jobTitle:"Intern", 
    divisionTeam:"SIS 2.0", email:"Liu_Eva_Y@cat.com", phone:""};
var Chirag = {cwsId: "rastoc1", firstName: "Chirag", lastName: "Rastogi", jobTitle:"Intern", 
    divisionTeam:"Machine Data Insights", email:"Rastogi_chirag@cat.com", phone:"2179797479"};
var Michael = {cwsId: "koziamj", firstName: "Michael", lastName: "Koziana", jobTitle:"Intern", 
    divisionTeam:"Architecture", email:"Koziana_Michael_J@cat.com", phone:"8477560707"};
var Vaibhav = {cwsId: "makarvv", firstName: "Vaibhav", lastName: "Makar", jobTitle:"Intern", 
    divisionTeam:"System Architecture", email:"Makar_Vaibhav_V@cat.com", phone:"2175528103"};
var Catherine = {cwsId: "yuanc3", firstName: "Catherine", lastName: "Yuan", jobTitle:"Intern", 
    divisionTeam:"Team Aura", email:"Yuan_Catherine@cat.com", phone:""};

var sampleInterns = [Eva,Chirag,Michael,Vaibhav,Catherine];

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

    // document.getElementById("name-input-div").innerHTML +=
}
