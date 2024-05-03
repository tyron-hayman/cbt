import * as prismic from '@prismicio/client'

const repositoryName = 'LossAlamos'
const accessToken = process.env.NEXT_PUBLIC_PRISMIC_TOKEN // Set an access token
const routes = [
  // Update to match your website's URL structure
  { type: 'ai_chat', path: '/ai_chat' },
]

const prisma_client = prismic.createClient(repositoryName, { routes, accessToken });

export default prisma_client;