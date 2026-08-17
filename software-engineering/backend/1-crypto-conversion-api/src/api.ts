import axios from "axios";
import "dotenv/config";

const API_KEY = process.env.API_KEY || "";
const PRICE_CONVERSION_URL = process.env.API_URL_PRICE_CONVERSION || "";
const CRYPTO_URL = process.env.API_URL_CRYPTO || "";
const FIAT_URL = process.env.API_URL_FIAT || "";

// Conversion
export async function convertPrice({
  amount,
  crypto,
  fiat,
}: {
  amount: number;
  crypto: string;
  fiat: string;
}) {
  try {
    console.log(PRICE_CONVERSION_URL);
    const res = await axios.get(PRICE_CONVERSION_URL, {
      headers: {
        "X-CMC_PRO_API_KEY": API_KEY,
      },
      params: {
        amount,
        symbol: crypto,
        convert: fiat,
      },
    });

    return res.data;
  } catch (err) {
    console.error("Conversion error:", err);
    return { error: "Conversion failed" };
  }
}

// Fetch Crypto's
export async function fetchCrypto() {
  try {
    const res = await axios.get(`${CRYPTO_URL}`, {
      headers: {
        "X-CMC_PRO_API_KEY": API_KEY,
      },
    });
    // success
    return res.data.data;
  } catch (ex) {
    // error
    console.log(ex);
  }
}

// Fetch Fiat's
export async function fetchFiat() {
  try {
    const res = await axios.get(`${FIAT_URL}`, {
      headers: {
        "X-CMC_PRO_API_KEY": API_KEY,
      },
    });
    // success
    return res.data.data;
  } catch (ex) {
    // error
    console.log(ex);
  }
}
