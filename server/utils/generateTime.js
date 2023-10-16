const withoutMonth = () => {
  const now = Date.now() // Get the current timestamp in milliseconds

  // Create a Date object from the timestamp
  const currentDate = new Date(now)

  // Format the date using Intl.DateTimeFormat
  const formattedDate = new Intl.DateTimeFormat('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(currentDate)
  console.log(typeof formattedDate)
  return formattedDate
}
export { withoutMonth }
