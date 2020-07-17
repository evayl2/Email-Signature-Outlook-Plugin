var Eva = {cwsId: "evayl2", firstName: "Eva", lastName: "Liu", jobTitle:"Intern", 
    divisionTeam:"SIS 2.0", email:"Liu_Eva_Y@cat.com", phone:"+1.309.675.9620"};
var Chirag = {cwsId: "rastoc1", firstName: "Chirag", lastName: "Rastogi", jobTitle:"Intern", 
    divisionTeam:"Machine Data Insights", email:"Rastogi_chirag@cat.com", phone:"+1.217.979.7479"};
var Michael = {cwsId: "koziamj", firstName: "Michael", lastName: "Koziana", jobTitle:"Intern", 
    divisionTeam:"Architecture", email:"Koziana_Michael_J@cat.com", phone:"+1.847.756.0707"};
var Vaibhav = {cwsId: "makarvv", firstName: "Vaibhav", lastName: "Makar", jobTitle:"Intern", 
    divisionTeam:"System Architecture", email:"Makar_Vaibhav_V@cat.com", phone:"+1.217.552.8103"};
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
    document.getElementById("preview-area").value = Name + '\n' + title + ' | ' + team + '\n' + cat_email + '\n' + telephone;
    if (document.getElementById("social-media").checked = true) {
        document.getElementById("preview-area").value += '\n' + "Web: http://www.caterpillar.com/  | Follow Us On: Facebook | LinkedIn | Twitter | Instagram";
    }
    
}
