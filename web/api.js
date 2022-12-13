
export const API = "http://localhost:3000/dates"

export const postInputDate = (inputDate) => {
    axios.post(API, {
        date: inputDate,
    })
}

export const getInputDate = async () => {
    const data = await axios.get(API)
    console.log(data);
    const inputDate = data.data.date
    console.log(inputDate);
    const date = new Date(`${inputDate}T00:00:00`)
    console.log(date);
    return date
}

