import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId:"6zvg497i",
  dataset:"production",
  apiVersion:"2025-01-26",
  useCdn: true,
  token:"skNb8lX8VkFIyyO3VAmaDhVSVfIkhOFcM1GGi2cKeqnVYGiJyP4sTYIMM3TTjrgXjEM3Kyhqs15rgcD7i1RqbgQLXW5IgcgWW5XUdiuQoJ3J2Wh0xtdVdjeNcJYTwmKI7TaprSTIQdGngHLZEHSLeqILIDYdFSwmXX2WHEFK1KgANoi2hweW" // Set to false if statically generating pages, using ISR or tag-based revalidation
})
