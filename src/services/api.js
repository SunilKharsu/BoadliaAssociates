export const simulateFetch = (data, delay = 280) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(structuredClone(data)), delay)
  })
