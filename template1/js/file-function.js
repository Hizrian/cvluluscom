window.addEventListener("load", (event) => {
  getLastEdit();
});

document.addEventListener("DOMContentLoaded", (event) => {
  var intervalID = window.setInterval(changeStorage, 1000);
});

// Save Last Edit
let cvCanvasInnerHTML = document.getElementById("cvCanvas").innerHTML;

function changeStorage() {
  localStorage.setItem("lastEdit", document.getElementById("cvCanvas").innerHTML);
}

// Get Last Edit
function getLastEdit() {
  const lastEdit = localStorage.getItem("lastEdit");
  if (lastEdit) {
    document.getElementById("cvCanvas").innerHTML = "";
    document.getElementById("cvCanvas").innerHTML = lastEdit;
  }
}

// Reset Default
function resetDefault() {
  document.getElementById("cvCanvas").innerHTML = `<!-- Profile Info -->
    <div
      id="sortableProfile"
      class="flex flex-row flex-wrap pb-[30px] mb-[16px] border-b border-gray-300 gap-6"
    >
      <div id="pasPhoto" class="group-edit w-[200px] flex flex-wrap">
        <input
          type="file"
          class="filepond"
          name="filepond"
          accept="image/png, image/jpeg, image/gif"
        />
        <button
          class="button-move py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md font-semibold text-white bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 transition-all text-md"
        >
          <ion-icon name="move"></ion-icon>
        </button>
      </div>
      <div id="profileDetails" class="group-edit flex-1">
        <h1 class="text-4xl font-bold" contenteditable="true" placeholder="Nama Anda">Hizrian</h1>
        <h3
          class="text-2xl mt-2"
          contenteditable="true"
          placeholder="Peran atau profesi Anda"
        >Konsultan Bisnis</h3>
        <p
          class="mt-4 mr-6 text-gray-800"
          contenteditable="true"
          placeholder="Deskripsi tentang anda"
        >Saya seorang konsultan bisnis yang membantu perusahaan mengidentifikasi masalah, mengembangkan strategi, dan meningkatkan kinerja. Dengan analisis data dan pemahaman industri yang mendalam, saya memberikan rekomendasi efektif untuk solusi yang dapat meningkatkan kesuksesan perusahaan dalam bisnis yang kompetitif.</p>
        <button
          class="button-move py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md font-semibold text-white bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 transition-all text-md"
        >
          <ion-icon name="move"></ion-icon>
        </button>
      </div>
    </div>

    <div class="grid grid-cols-7 gap-6">
      <div class="col-span-7"></div>
      <div id="sectionData1" class="col-span-2 order-1">
        <!-- Sortable Section -->
        <div id="sortableSection2" class="sortable-list list-group col">
          <!-- Personal Details -->
          <div id="personalDetails" class="group-edit list-group-item mb-6">
            <div class="flex flex-row justify-between">
              <h3 class="text-xl font-bold mb-4 title-group" contenteditable="true">
                Personal Details
              </h3>
            </div>
            <ul id="personalDetailsList" class="pl-0" style="list-style: none">
              <li class="group-edit group-edit-list">
                <p class="mb-0 font-semibold text-sm" contenteditable="true">
                  Tempat/Tgl Lahir
                </p>
                <p
                  class="mb-0"
                  contenteditable="true"
                  placeholder="Banda Aceh, 12 Juni 1998"
                ></p>
              </li>
              <li class="group-edit group-edit-list">
                <p class="mb-0 font-semibold text-sm" contenteditable="true">Email</p>
                <p
                  class="mb-0"
                  contenteditable="true"
                  placeholder="yourname@yourmail.com"
                ></p>
              </li>
              <li class="group-edit group-edit-list">
                <p class="mb-0 font-semibold text-sm" contenteditable="true">No. HP</p>
                <p class="mb-0" contenteditable="true" placeholder="0852*******"></p>
              </li>
            </ul>

            <button
              id="tambahPersonalDetails"
              onClick="addElement('personalDetailsList')"
              class="button-edit py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-blue-200 font-semibold text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 transition-all text-md"
            >
              <ion-icon name="add-circle-outline" class="text-[20px]"></ion-icon> Tambah
              Personal Details
            </button>
            <button
              class="button-move py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md font-semibold text-white bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 transition-all text-md"
            >
              <ion-icon name="move"></ion-icon>
            </button>
          </div>
          <!-- Languages -->
          <div id="bahasa" class="group-edit list-group-item mb-6">
            <div class="flex flex-row justify-between">
              <h3 class="text-xl font-bold mb-4 title-group" contenteditable="true">
                Bahasa
              </h3>
            </div>

            <ul id="languageList" class="pl-0" style="list-style: none">
              <li class="group-edit group-edit-list">
                <p class="mb-0 font-semibold text-sm" contenteditable="true">English</p>
                <p class="mb-0" contenteditable="true" placeholder="Tingkat Kemampuan">
                  Fluent
                </p>
              </li>
            </ul>

            <button
              id="tambahLanguage"
              onClick="addElement('languageList')"
              class="button-edit py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-blue-200 font-semibold text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 transition-all text-md"
            >
              <ion-icon name="add-circle-outline" class="text-[20px]"></ion-icon> Tambah
              Language
            </button>
            <button
              class="button-move py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md font-semibold text-white bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 transition-all text-md"
            >
              <ion-icon name="move"></ion-icon>
            </button>
          </div>
          <!-- Prestasi -->
          <div id="prestasi" class="group-edit list-group-item mb-6">
            <div class="flex flex-row justify-between">
              <h3 class="text-xl font-bold mb-4 title-group" contenteditable="true">
                Prestasi
              </h3>
            </div>

            <ul id="prestasiList" class="pl-0" style="list-style: none">
              <li class="group-edit group-edit-list hidden">
                <p
                  class="mb-0 font-semibold text-sm"
                  contenteditable="true"
                  placeholder="Nama Kompetisi"
                ></p>
                <p class="mb-0 text-sm" contenteditable="true" placeholder="Deskripsi"></p>
              </li>
            </ul>

            <button
              id="tambahPrestasi"
              onClick="addElement('prestasiList')"
              class="button-edit py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-blue-200 font-semibold text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 transition-all text-md"
            >
              <ion-icon name="add-circle-outline" class="text-[20px]"></ion-icon> Tambah
              Prestasi
            </button>
            <button
              class="button-move py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md font-semibold text-white bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 transition-all text-md"
            >
              <ion-icon name="move"></ion-icon>
            </button>
          </div>
          <!-- Hobi -->
          <div id="hobi" class="group-edit list-group-item mb-6">
            <div class="flex flex-row justify-between">
              <h3 class="text-xl font-bold mb-4 title-group" contenteditable="true">
                Hobi
              </h3>
            </div>

            <!-- Hobi list -->
            <div id="hobiList" class="flex flex-row gap-3 flex-wrap">
              <span
                class="badge inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-blue-500 text-white hidden"
                ><span contenteditable="true" placeholder="Hobi">Coding</span>
                <div
                  class="button-delete flex"
                  onClick="this.parentNode.parentNode.removeChild(this.parentNode)"
                >
                  <ion-icon name="remove"></ion-icon></div
              ></span>
            </div>

            <button
              id="tambahHobi"
              onclick="addElement('hobiList')"
              class="button-edit py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-blue-200 font-semibold text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 transition-all text-md"
            >
              <ion-icon name="add-circle-outline" class="text-[20px]"></ion-icon> Tambah
              Hobi
            </button>
            <button
              class="button-move py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md font-semibold text-white bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 transition-all text-md"
            >
              <ion-icon name="move"></ion-icon>
            </button>
          </div>
        </div>
      </div>
      <div id="sectionData2" class="col-span-5 order-2">
        <!-- Sortable Section -->
        <div id="sortableSection" class="sortable-list list-group col">
          <!-- Work Experience -->
          <div id="pengalamanKerja" class="group-edit list-group-item mb-6">
            <div class="flex flex-row justify-between">
              <h3 class="flex items-center text-xl font-bold mb-4 title-group" contenteditable="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7 mr-3">
                  <path fill-rule="evenodd" d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />
                  <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
                </svg>
                 Pengalaman Kerja
              </h3>
            </div>

            <ul id="workExperienceList" class="list-timeline flex flex-col gap-6">
              <li class="group-edit group-edit-list">
                <div class="flex flex-row justify-between">
                  <div>
                    <h4 class="font-bold" contenteditable="true">
                      Senior Konsultan Bisnis
                    </h4>
                    <p class="font-semibold text-md mb-1" contenteditable="true">
                      Lush & Co.
                    </p>
                  </div>
                  <p class="text-sm" contenteditable="true">Sept. 2021 - Sekarang</p>
                </div>

                <div class="editable-editor text-gray-800" contenteditable="true">
                  <p>
                    Sebagai Senior Konsultan Bisnis berpengalaman, saya ahli dalam
                    menganalisis proses operasional, merancang solusi inovatif, dan
                    membangun hubungan klien yang kuat.
                  </p>
                  <br />
                  <ul>
                    <li>Mengatur proyek dan program</li>
                    <li>Memimpin dan mengelola orang-orang dalam tim, termasuk analis</li>
                    <li>
                      Berhubungan dengan klien untuk selalu memberi informasi dari kemajuan
                      dan untuk membuat keputusan yang relevan
                    </li>
                  </ul>
                </div>
              </li>
            </ul>

            <button
              id="tambahPengalaman"
              onClick="addElement('workExperienceList')"
              class="button-edit py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-blue-200 font-semibold text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 transition-all text-md"
            >
              <ion-icon name="add-circle-outline" class="text-[20px]"></ion-icon> Tambah
              Pengalaman Kerja
            </button>
            <button
              class="button-move py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md font-semibold text-white bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 transition-all text-md"
            >
              <ion-icon name="move"></ion-icon>
            </button>
          </div>
          <!-- Education -->
          <div id="riwayatPendidikan" class="group-edit list-group-item mb-6">
            <div class="flex flex-row justify-between">
              <h3 class="flex items-center text-xl font-bold mb-4 title-group" contenteditable="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7 mr-3">
                  <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                  <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                  <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
                </svg>
                 Riwayat Pendidikan
              </h3>
            </div>

            <ul id="educationList" class="list-timeline flex flex-col gap-6">
              <li class="group-edit group-edit-list">
                <div class="flex flex-row justify-between">
                  <div>
                    <h4 class="font-bold" contenteditable="true">S1 Ekonomi Manajemen</h4>
                    <p class="font-semibold text-md mb-1" contenteditable="true">
                      Iskandar Muda University
                    </p>
                  </div>
                  <p class="text-sm" contenteditable="true">2011 - 2014</p>
                </div>

                <div class="editable-editor text-gray-800" contenteditable="true">
                  <p>
                    Deskripsi kegiatan ketika menempuh pendidikan
                    <br />
                  </p>
                  <br />
                  <ul>
                    <li>IPK : 3.75</li>
                    <li>Cumlaude</li>
                  </ul>
                </div>
              </li>
            </ul>

            <button
              id="tambahPendidikan"
              onclick="addElement('educationList')"
              class="button-edit py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-blue-200 font-semibold text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 transition-all text-md"
            >
              <ion-icon name="add-circle-outline" class="text-[20px]"></ion-icon> Tambah
              Riwayat Pendidikan
            </button>
            <button
              class="button-move py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md font-semibold text-white bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 transition-all text-md"
            >
              <ion-icon name="move"></ion-icon>
            </button>
          </div>
          <!-- Skills -->
          <div id="skills" class="group-edit list-group-item mb-6">
            <div class="flex flex-row justify-between">
              <h3 class="text-xl font-bold mb-4 title-group" contenteditable="true">
                Skills
              </h3>
            </div>

            <!-- Skill list -->
            <div id="skillList" class="flex flex-row gap-3 flex-wrap">
              <span
                class="badge inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-sm font-medium bg-blue-500 text-white hidden"
                ><span contenteditable="true" placeholder="Skill"></span>
                <div
                  class="button-delete flex"
                  onClick="this.parentNode.parentNode.removeChild(this.parentNode)"
                >
                  <ion-icon name="remove"></ion-icon></div
              ></span>
            </div>

            <button
              id="tambahSkill"
              onclick="addElement('skillList')"
              class="button-edit py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-blue-200 font-semibold text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 transition-all text-md"
            >
              <ion-icon name="add-circle-outline" class="text-[24px]"></ion-icon> Tambah
              Skill Keahlian
            </button>
            <button
              class="button-move py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md font-semibold text-white bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 transition-all text-md"
            >
              <ion-icon name="move"></ion-icon>
            </button>
          </div>
          <!-- Certification -->
          <div id="certificates" class="group-edit list-group-item mb-6">
            <div class="flex flex-row justify-between">
              <h3 class="text-xl font-bold mb-4 title-group" contenteditable="true">
                Certificates
              </h3>
            </div>
            <ul id="certificatesList">
              <li class="group-edit group-edit-list hidden">
                <p
                  class="mb-0 font-semibold text-md"
                  contenteditable="true"
                  placeholder="Nama Sertifikasi"
                ></p>
                <p
                  class="mb-0"
                  contenteditable="true"
                  placeholder="Lembaga Pemberi Sertifikasi"
                ></p>
              </li>
            </ul>

            <button
              id="tambahCertificates"
              onclick="addElement('certificatesList')"
              class="button-edit py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-blue-200 font-semibold text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 transition-all text-md"
            >
              <ion-icon name="add-circle-outline" class="text-[20px]"></ion-icon> Tambah
              Certification
            </button>
            <button
              class="button-move py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md font-semibold text-white bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 transition-all text-md"
            >
              <ion-icon name="move"></ion-icon>
            </button>
          </div>
        </div>
      </div>
    </div>`;
    initEditor();
    initSortable();
    initFilePond();
}
