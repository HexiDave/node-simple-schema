export default class SimpleSchemaCustomType {
// eslint-disable-next-line no-unused-vars
  build(key, schemaClone, schema) {
    throw new Error('Need to override SimpleSchemaCustomType:build!');
  }
}
