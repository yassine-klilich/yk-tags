window.tagsObj = new LeatherTag({
  el: "tags",
  initialTags: [
    "Couscous",
    "Tajine",
    new TagItem({
      value: "Pizza",
      disabled: true,
      classList: ["pizza-class"]
    }),
    new TagItem({value: "Tacos"})
  ],
  classList: ["custom-tag"],
  placeholder: "Add some food you like...",
  allowDuplicates: false,
  //allowedTags: ["Couscous", "Tajine", "Mroziya", "Mlokhiya", "Bastilla", "Rfisa", "Hrira", "Ma9loba"],
  //disallowedTags: ["Batata", "Maticha", "Lkhyar"],
  disabled: false,
  autoComplete: ["Couscous", "Pizza", "Tacos", "Tajine", "Mroziya", "Mlokhiya", "Bastilla", "Rfisa", "Hrira", "Ma9loba", "Bisara", "La3das", "Loubya", "Sandwich"],
  onInvalidTag: function(value) {
    console.log(`%c'${value}' is an invalid value`, 'background: red; padding: 2px; border-radius: 4px; color: #fff')
  },
  onAllRemoved: function() {
    console.log("1111");
  },
  onEdit: function(leatherTag, tagItem) {
    console.log(leatherTag);
    console.log(tagItem);
  }
})
window.customTag = new LeatherTag({
  el: "customTag",
  initialTags: [
    "Mlokhiya"
  ]
})