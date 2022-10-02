export async function callApi() {
    let res = await fetch("https://api.wheretheiss.at/v1/satellites/25544");
  
    let data = await res.json();
    if (data) {
      return data;
    }
  }
  