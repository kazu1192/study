type Options = {
  baseURL: string
  cacheSize?: number
  tier?: 'prod' | 'dev'
}

class API {
  constructor(private options: Options) {}
}

new API({
  baseURL: 'https//api.mysite.com',
  tier: 'prod'
})

new API({
  baseURL: 'https://api.mysite.com',
  badTier: 'prod'
} as Options)

let badOptions = {
  baseURL: 'https://api.mysite.com',
  badTier: 'prod'
}
new API(badOptions)
