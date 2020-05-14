console.log("Name: " + " Shashawndra N. Collins ".toUpperCase());
console.log("Career: Student: Iam BHam - Web Development ");
console.log("Description: " + " I am a student in Innovate Birmingham's Web Developoment program.");
console.log("\n");
console.log("My Interests:");
console.log("* Music");
console.log("* Cooking");
console.log("* Reading");
console.log("\n");
console.log("My Previous Experience:");
displayPosition("UAB", "Office Coordinator", "General office duties.");
displayPosition("CCBCU", "Risk Management Coordinator", "Maintained driver files and processed safety shoe invoices.");
console.log("\n");
console.log("My Skills: ");
displaySkill("Communication", true);
displaySkill("Editing", false);
displaySkill("Shopping", true);

function displayPosition(companyName, title, description) {
    console.log("* " + title + " at " + companyName + " - " + description);
}

function displaySkill(skillName, isSkillCool) {
    if (isSkillCool) {
        console.log("* BAM: " + skillName);
    } else {
        console.log("* " + skillName);
    }
}




