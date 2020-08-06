import got from '../../../client/fetch'

export default async (req, reply) => {
  try {
    const response = await got('user/get-donation-info', {
      headers: req.headers
    })
    reply.status(response.statusCode).json(response.body)
  } catch (e) {
    console.error({ message: e.response.body, statusCode: e.response.statusCode })
    reply.status(e.response.statusCode || 500).send(e.response.body)
  }
}
