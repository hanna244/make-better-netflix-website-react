const { PUBLIC_URL } = process.env

function getPublicAssets(path) {
  return `${PUBLIC_URL}/assets/${path}`
}

export default getPublicAssets
