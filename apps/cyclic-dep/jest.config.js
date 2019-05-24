module.exports = {
  name: "cyclic-dep",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/cyclic-dep/",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
