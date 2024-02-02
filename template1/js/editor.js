// Document Ready
document.addEventListener("DOMContentLoaded", function(e) {
  initEditor();
  initSortable();
  initFilePond();
});

// Preview

const previewButton = document.getElementById("preview");

previewButton.addEventListener("click", () => {
  document.getElementById('cvPlayGround').classList.toggle('preview-mode');
  [].forEach.call(document.querySelectorAll(".button-edit"), function (el) {
    el.classList.toggle("flex");
    el.classList.toggle("hidden");
  });

  [].forEach.call(document.querySelectorAll(".button-move"), function (el) {
    el.classList.toggle("flex");
    el.classList.toggle("hidden");
  });

  [].forEach.call(document.querySelectorAll(".button-delete"), function (el) {
    el.classList.toggle("flex");
    el.classList.toggle("hidden");
  });
});

// add edit tool
const editToolHTML = `<div class="edit-list-tool">
<button
  class="button-move py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md font-semibold text-white bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 transition-all text-md"
>
  <ion-icon name="move"></ion-icon>
</button>
<button onClick="this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode)"
  class="button-delete py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md font-semibold text-white bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 transition-all text-md"
>
  <ion-icon name="trash"></ion-icon>
</button>
</div>`;

[].forEach.call(document.querySelectorAll(".group-edit-list"), function (el) {
  el.innerHTML += editToolHTML;
});

// add element baru
const elementPersonalDetailsList =
  `<li class="group-edit group-edit-list">
<p class="mb-0 font-semibold text-sm" contenteditable="true" placeholder="Title"></p>
<p
  class="mb-0"
  contenteditable="true"
  placeholder="Subtitle"
></p>` +
  editToolHTML +
  `</li>`;

const elementlanguageList =
  `<li class="group-edit group-edit-list">
<p class="mb-0 font-semibold text-sm" contenteditable="true" placeholder="Bahasa"></p>
<p class="mb-0" contenteditable="true" placeholder="Tingkat Kemampuan"></p>` +
  editToolHTML +
  `</li>`;

const elementPrestasiList =
  `<li class="group-edit group-edit-list">
<p class="mb-0 font-semibold text-sm" contenteditable="true" placeholder="Nama Kompetisi"></p>
<p class="mb-0 text-sm" contenteditable="true" placeholder="Deskripsi"></p>` +
  editToolHTML +
  `</li>`;

const elementWorkExperienceList =
  `<li class="group-edit group-edit-list">
<div class="flex flex-row justify-between">
  <div>
    <h4
      class="font-bold"
      contenteditable="true"
      placeholder="Posisi atau Role Pekerjaan"
    ></h4>
    <p
      class="font-semibold text-md mb-1"
      contenteditable="true"
      placeholder="Nama Perusahaan"
    ></p>
  </div>
  <p class="text-sm" contenteditable="true" placeholder="From - Until"></p>
</div>

<div class="editable-editor text-gray-800" contenteditable="true">
  <p>Jelaskan deskrisi pekerjaan anda</p>
  <br />
  <ul>
    <li>Jobdesk 1</li>
    <li>Jobdesk 2</li>
    <li>Jobdesk 3</li>
  </ul>
</div>` +
  editToolHTML +
  `</li>`;

const elementEducationList =
  `<li class="group-edit group-edit-list">
<div class="flex flex-row justify-between">
  <div>
    <h4 class="font-bold" contenteditable="true" placeholder="Gelar"></h4>
    <p class="font-semibold text-md mb-1" contenteditable="true" placeholder="Nama Sekolah / Universitas"></p>
  </div>
  <p class="text-sm" contenteditable="true" placeholder="From - Until"></p>
</div>

<div class="editable-editor text-gray-800" contenteditable="true">
  <p>
    Deskripsi kegiatan ketika menempuh pendidikan
    <br />
  </p>
  <br />
  <ul>
    <li>Kegiatan atau Pencapaian ketika menempuh pendidikan</li>
    <li>Kegiatan atau Pencapaian ketika menempuh pendidikan</li>
  </ul>
</div>` +
  editToolHTML +
  `</li>`;

const elementCertificatesList =
  `<li class="group-edit group-edit-list">
<p
  class="mb-0 font-semibold text-md"
  contenteditable="true"
  placeholder="Nama Sertifikasi"
></p>
<p
  class="mb-0"
  contenteditable="true"
  placeholder="Lembaga Pemberi Sertifikasi"
></p>` +
  editToolHTML +
  `</li>`;

const elementHobiList = `<span
class="badge inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-blue-500 text-white"
><span contenteditable="true" placeholder="Hobi"></span>
<div
  class="button-delete flex"
  onClick="this.parentNode.parentNode.removeChild(this.parentNode)"
>
  <ion-icon name="remove"></ion-icon></div
></span>`;

const elementSkillList = `<span
class="badge inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-sm font-medium bg-blue-500 text-white"
><span contenteditable="true" placeholder="Skill"></span>
<div
  class="button-delete flex"
  onClick="this.parentNode.parentNode.removeChild(this.parentNode)"
>
  <ion-icon name="remove"></ion-icon></div
></span>`;

const personalDetailsList = document.getElementById("personalDetailsList"),
  languageList = document.getElementById("languageList"),
  prestasiList = document.getElementById("prestasiList"),
  workExperienceList = document.getElementById("workExperienceList"),
  educationList = document.getElementById("educationList"),
  certificatesList = document.getElementById("certificatesList"),
  skillList = document.getElementById("skillList"),
  hobiList = document.getElementById("hobiList");

function addElement(namelist) {
  if (namelist == "personalDetailsList") {
    personalDetailsList.innerHTML += elementPersonalDetailsList;
  } else if (namelist == "languageList") {
    languageList.innerHTML += elementlanguageList;
  } else if (namelist == "prestasiList") {
    prestasiList.innerHTML += elementPrestasiList;
  } else if (namelist == "workExperienceList") {
    workExperienceList.innerHTML += elementWorkExperienceList;
  } else if (namelist == "educationList") {
    educationList.innerHTML += elementEducationList;
  } else if (namelist == "certificatesList") {
    certificatesList.innerHTML += elementCertificatesList;
  } else if (namelist == "hobiList") {
    hobiList.innerHTML += elementHobiList;
  } else if (namelist == "skillList") {
    skillList.innerHTML += elementSkillList;
  }
  initEditor();
}

// show hide section

function toggleSection(idSection) {
  document.getElementById(idSection).classList.toggle('hidden');
  initEditor();
}

// change layout section
const sectionData1 = document.getElementById('sectionData1'),
sectionData2 = document.getElementById('sectionData2');

function initLayout() {
  sectionData1.classList.remove('order-1');
  sectionData1.classList.remove('order-2');
  sectionData2.classList.remove('order-1');
  sectionData2.classList.remove('order-2');
}

function layoutFirst() {
  initLayout();
  sectionData1.classList.add('order-1');
  sectionData2.classList.add('order-2');
}

function layoutSecond() {
  initLayout();
  sectionData1.classList.add('order-2');
  sectionData2.classList.add('order-1');
}
