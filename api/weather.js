export default async function handler(req, res) {

  const key = process.env.weather_key;

  const { nx, ny } = req.query;

  const today = new Date();

  const year = today.getFullYear();

  const month =
    String(today.getMonth() + 1).padStart(2, "0");

  const day =
    String(today.getDate()).padStart(2, "0");

  const base_date = `${year}${month}${day}`;

  const base_time = "0500";

  const url =
    `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst` +
    `?serviceKey=${key}` +
    `&pageNo=1` +
    `&numOfRows=100` +
    `&dataType=JSON` +
    `&base_date=${base_date}` +
    `&base_time=${base_time}` +
    `&nx=${nx}` +
    `&ny=${ny}`;

  try {

    const response = await fetch(url);

    const data = await response.json();

    res.status(200).json(data);

  } catch (error) {

    res.status(500).json({
      error: "weather api error"
    });

  }
}
