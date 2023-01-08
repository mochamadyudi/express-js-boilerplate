export default async (app)=> {
  /**
   * API
   */
  await require('./api').default(app)

  /**
   * WEB
   */
  await require('./web').default(app)
}