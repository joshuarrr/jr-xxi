/* utity functions */

/* return a random number from an array */
export const randomIndexOf = (arr) => Math.floor(Math.random() * arr.length)

/* return an item from an array */
export const chooseFrom = (arr) => arr[randomIndexOf(arr)]

/* get a random image */
export const getRandomImage = (arr) => chooseFrom(arr)

/* parse the ratio prop as a percentage
   if c argument is present, format for cloudinary */
export const parseAspectRatio = (r, c) => {
  const computeRatio = (r) => {
    const w = parseInt(r.toString().split("x")[0]) // before x
    const h = parseInt(r.toString().split("x")[1]) // after x
    const aspectRatio = w && h
      ? `${((h / w) * 100).toFixed(2)}`
      : console.log("Incorrect ratio prop")
    return aspectRatio
  }

  if (c) {
    // console.log('c yep')
    const w = parseInt(r.toString().split("x")[0]) // before x
    const h = parseInt(r.toString().split("x")[1]) // after x    
    const ratio = w + ':' + h
    return ratio
  } else {
    const ratio = r && r.length
      ? computeRatio(r)
      : null
    return ratio
  }
}