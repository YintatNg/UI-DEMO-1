// 工程片配置类
//  如果已经有一个工程信息，添加键不能用
function randomNumberID() {
  return Math.floor(Math.random() * (1000002 - 1 + 1)) + 1;
}

$(document).ready(function () {

  getProjectList();
  document.getElementById('projectSubmit').addEventListener('click', projectSubmit);

  function projectSubmit(e) {

      let projectTemId = randomNumberID();
      let projectName = document.getElementById('projectName').value;

      //Used to give each product a unique id
      const projectID = projectTemId + projectName + randomNumberID();

      if(projectName !== '') {
          let newProject = {
              id: projectID,
              name: projectName
          };

          //Add new product to localStorage. The localStorage key for all the product is productList'
          if (localStorage.getItem('projectList') === null || 
              localStorage.getItem("projectList") === []  || 
              localStorage.getItem("projectList") === undefined ) {

                  let projectList = [];
                  projectList.push(newProject);
                  localStorage.setItem("projectList", JSON.stringify(projectList));

              } else {

                  let projectList = JSON.parse(localStorage.getItem("projectList"));
                  projectList.push(newProject);
                  localStorage.setItem("projectList", JSON.stringify(projectList));

              }
      } else {
          alert('All fields are required. Please check your entries again');
      }
      getProjectList();

      resetForm();
      e.preventDefault();
      console.log(localStorage);
  }
})


function deleteProject(id) {
  let projectList = JSON.parse(localStorage.getItem("projectList"));
  for (let i = 0; i < projectList.length; i++) {
      if (projectList[i].id === id) {
          projectList.splice(i, 1);
      }
  }
  // reset the values in the local storage
  localStorage.setItem("projectList", JSON.stringify(projectList));
  // to quickly display what is remaining from storage
  getProjectList(); // to quickly display what is remaining from local storage.
}

function editProject(id) {
  'use strict'
  document.getElementById('projectSubmit').style.display = "none";
  document.getElementById('addNewProjectModalLabel').textContent = "修改工程名字";

  let tempId = id;
  let parentDiv = document.getElementById("projectModalFooter");
  let projectList = JSON.parse(localStorage.getItem("projectList"));

  if (parentDiv.contains(document.getElementById("editButton"))) {
      document.getElementById("editButton").disabled = false;  
  } else {
      let editButton = document.createElement('button');
      editButton.id = "editButton";
      editButton.className = "fa fa-hdd-o btn btn-outline-primary btn-sm m-2";
      editButton.textContent = "保存数据";
      parentDiv.appendChild(editButton);
  }

  for (let i = 0; i < projectList.length; i++) {
      if (projectList[i].id === id) {
          document.getElementById("projectName").value = projectList[i].name;
      }
  }

  document.getElementById("editButton").addEventListener("click", function() {

      addProject();
      let projectList = JSON.parse(localStorage.getItem("projectList"));

      for (let i = 0; i < projectList.length; i++) {
          if (projectList[i].id === tempId) {
              projectList.splice(i, 1);
          }
      }

      localStorage.setItem("projectList", JSON.stringify(projectList));
      
      getProjectList();
      resetForm();

      document.getElementById("editButton").style.display = "none";

      $(".addProjectName").on("click", projectFormReset());

  })
}

function resetForm() {
  document.getElementById("projectName").value = "";
}

function projectFormReset() {
  document.getElementById("projectSubmit").style.display = "block";
  document.getElementById("addNewProjectModalLabel").textContent = "新工程";
  document.getElementById("editButton").style.display = "none";
}

//get the data stored in the localStorage for display on load
function getProjectList() {
  if (localStorage.getItem("projectList") === null) {
      alert("Your dashboard is currently empty. Use the add button to add new project.");
  } else {
      let projectList = JSON.parse(localStorage.getItem("projectList"));
      let projectDisplay = document.getElementById("projectDisplay");

      // Display result
      projectDisplay.innerHTML = '';
      for (let i = 0; i < projectList.length; i++) {
          let id = projectList[i].id;
          let name = projectList[i].name;

          projectDisplay.innerHTML += '<li class="list-group-item"><strong>' + name + '</strong>' +
              '<a' +
              ' href="#" onclick="editProject(\'' + id +
              '\')" data-toggle="modal" data-target="#projectInformationModal">' +
              '<i class="fa fa-edit green-text darken-2 "></i>&nbsp;Edit</a> &nbsp;&nbsp; ' +
              '<a href="#" id="deleteId" onclick="deleteProject(\'' + id + '\')"><i class="fa fa-trash' +
              ' red-text' +
              ' darken-2"></i>&nbsp;' +
              ' Delete</a>' +
              ' </p>' +
              '</li>';
      }
  }
}

function addProject() {

  let projectTemId = randomNumberID();
  let projectName = document.getElementById('projectName').value;

  // Used to give each project a unique id
  const projectID = projectTemId + projectName + randomNumberID();

  if (projectName !== '') {
      let newProject = {
          id: projectID, 
          name: projectName
      };

      //Add new project to localStorage. The localStorage key for all the project is projectList
      if (localStorage.getItem("projectList") === null || localStorage.getItem("productList") === [] ||
          localStorage.getItem("productList") === undefined) {

          let projectList = [];
          projectList.push(c);
          localStorage.setItem("projectList", JSON.stringify(projectList));

      } else {

          let projectList = JSON.parse(localStorage.getItem("projectList"));
          projectList.push(newProject);
          localStorage.setItem("projectList", JSON.stringify(projectList));

      }
  }
}