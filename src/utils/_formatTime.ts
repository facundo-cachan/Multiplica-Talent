const opt: Intl.DateTimeFormat = new Intl.DateTimeFormat(
  'es-ar', {
  dateStyle: 'long',
})

const formatTime = (date: string, options: Intl.DateTimeFormat = opt) => {
  let json = JSON.stringify(date)
  let parse = new Date(JSON.parse(json))
  return options.format(parse)
}

export default formatTime