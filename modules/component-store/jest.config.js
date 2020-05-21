module.exports = {
  name: 'component-store',
  displayName: 'Component Store',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/component-store',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
