function initSortable() {
  new Sortable(sortableProfile, {
    animation: 150,
    ghostClass: "dragSection",
    handle: ".button-move",
  });

  new Sortable(sortableSection, {
    animation: 150,
    group: "shared",
    ghostClass: "dragSection",
    handle: ".button-move",
  });

  new Sortable(sortableSection2, {
    animation: 150,
    group: "shared",
    ghostClass: "dragSection",
    handle: ".button-move",
  });

  new Sortable(sortableSection3, {
    animation: 150,
    group: "shared",
    ghostClass: "dragSection",
    handle: ".button-move",
  });

  new Sortable(workExperienceList, {
    animation: 150,
    ghostClass: "dragSection",
    handle: ".button-move",
  });

  new Sortable(educationList, {
    animation: 150,
    ghostClass: "dragSection",
    handle: ".button-move",
  });

  new Sortable(personalDetailsList, {
    animation: 150,
    ghostClass: "dragSection",
    handle: ".button-move",
  });

  new Sortable(languageList, {
    animation: 150,
    ghostClass: "dragSection",
    handle: ".button-move",
  });

  new Sortable(certificatesList, {
    animation: 150,
    ghostClass: "dragSection",
    handle: ".button-move",
  });

  new Sortable(prestasiList, {
    animation: 150,
    ghostClass: "dragSection",
    handle: ".button-move",
  });
}

function initEditor() {
  var elements = document.querySelectorAll('[contenteditable="true"]');
  var editor = new MediumEditor(elements, {
    toolbar: {
      allowMultiParagraphSelection: true,
      buttons: [
        "bold",
        "italic",
        "underline",
        "unorderedlist",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "textcolor",
      ],
      static: true,
    },
    extensions: {
      colorPicker: mediumtextcolor.createInstance(),
    },
    spellcheck: false,
  });
}

function initFilePond() {
  /*
We need to register the required plugins to do image manipulation and previewing.
*/
  FilePond.registerPlugin(
    FilePondPluginFileEncode,
    FilePondPluginFileValidateType,
    FilePondPluginImageExifOrientation,
    FilePondPluginImagePreview,
    FilePondPluginImageCrop,
    FilePondPluginImageResize,
    FilePondPluginImageTransform
  );

  // Select the file input and use create() to turn it into a pond
  // in this example we pass properties along with the create method
  // we could have also put these on the file input element itself
  FilePond.create(document.querySelector("input.filepond"), {
    labelIdle: `Drag & Drop your picture or <span class="filepond--label-action">Browse</span>`,
    imageCropAspectRatio: "1:1",
    stylePanelLayout: "compact circle",
    styleLoadIndicatorPosition: "center bottom",
    styleButtonRemoveItemPosition: "center bottom",
  });
}
