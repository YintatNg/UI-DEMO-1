// 芯片配置类

function randomNumberID() {
  return Math.floor(Math.random() * (1000002 - 1 + 1)) + 1;
}

$(document).ready(function() {
  
});


//get the data stored in the localStorage for display on load
function getChipConfigurationList() {
  if (localStorage.getItem("chipConfigurationList") === null) {
      alert("Your dashboard is currently empty. Use the add button to new chip configuration");
  } else {
      document.getElementById("platformSubmit").style.display = "none";
      let parentDiv = document.getElementById('modalFooter');
      let editButton = document.createElement("button");
      editButton.className = "fa fa-hdd-o btn btn-outline-primary btn-sm m-2";
      editButton.setAttribute("id", "editChipConfigurationButton");
      editButton.textContent = "保存";
      parentDiv.appendChild(editButton);

      let chipConfigurationList = JSON.parse(localStorage.getItem("chipConfigurationList"));
      let chipConfigurationDisplay = document.getElementById("chipConfigurationDisplay");

      // Display the result
      chipConfigurationList.innerHTML = '';
      for (var i = 0; i < 1; i++) {
          let id = chipConfigurationList[i].id;
          let platform = chipConfigurationList[i].platform;
          let vendor = chipConfigurationList[i].vendor;
          let chipSerious = chipConfigurationList[i].chipSerious;
          let chipFull = chipConfigurationList[i].chipFull;
          let chipClass = chipConfigurationList[i].chipClass;

          chipConfigurationDisplay.innerHTML += '';
      }
  }
}

function deleteChipConfiguration() {

}

function editChipConfiguration(id) {
  
  'use strict'
  
  let tempId = id;
  let chipConfigurationList = JSON.parse(localStorage.getItem("chipConfigurationList"));


}

function resetChipConfigurationForm() {

}

function chipFormReset() {

}

function addChipConfiguration() {

  let chipTempId = randomNumberID();
  let platform = document.getElementById("platform").value;
  let vendor = document.getElementById("vendor").value;
  let chipSerious = document.getElementById("chipSerious").value;
  let chipFull = document.getElementById("chipFull").value;
  let chipClass = document.getElementById("chipClass").value;

  // Used to give each chip configuration a unique ID
  const chipID = chipTempId + platform + randomNumberID();
  if (platform !== '' && vendor !== '' && chipSerious !== '' && chipFull !== '' && chipClass !== '') {

      let newPlatform = {
          id: chipID,
          platform: platform,
          vendor: vendor,
          chipSerious: chipSerious,
          chipFull: chipFull,
          chipClass: chipClass
      };

      if (localStorage.getItem("chipConfigurationList") === null || 
          localStorage.getItem("chipConfigurationList") === [] ||
          localStorage.getItem("chipConfigurationList") === undefined  ) {

              let chipConfigurationList = [];
              chipConfigurationList.push(c);
              localStorage.setItem("chipConfigurationList", JSON.stringify(chipConfigurationList));

          } else {

              let chipConfigurationList = JSON.parse(localStorage.getItem("chipConfigurationList"));
              chipConfigurationList.push(newPlatform);
              localStorage.setItem("chipConfigurationList", JSON.stringify(chipConfigurationList));

          }
  }

}