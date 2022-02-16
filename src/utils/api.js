export const getData = async () => {
    const res = await fetch('https://raw.githubusercontent.com/akshita151199/APIs/main/data').then((res) => res.json())
        .then((data) => data.data).catch(err => console.err(err));
    return res;
}