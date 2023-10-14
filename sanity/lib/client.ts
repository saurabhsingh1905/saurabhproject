import { createClient } from 'next-sanity'
import token from '../env'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const readClient = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})
export const writeClient = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token
})
