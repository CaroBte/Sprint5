
export const API = "https://sprint5-db.vercel.app/dates"

export const postInputDate = async (inputDate) => {
    try {
        await axios.patch(API, {
            date: inputDate
        })
        return inputDate
    } catch (error) {
        console.log(error);
    }
}

export const getInputDate = async () => {
    try {
        const data = await axios.get(API)
        console.log(data);
        const inputDate = data.data.date
        console.log(inputDate);
        const date = new Date(`${inputDate}T00:00:00`)
        console.log(date);
        return date
    } catch (error) {
        console.log(error);
    }
}

