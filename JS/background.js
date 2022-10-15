console.log("background.js loaded.");

async function getIndex() {
  try {
    let response = await fetch(
      "https://ws-public.interpol.int/notices/v1/red"
    );
    if (response.ok) {
      let data = await response.json();
      return data;
    } else {
      console.log(response.status);
    }
  } catch (error) {
    console.log(error);
  }
}

getIndex().then(async (data) => {
  i = 0;
  while (i < data._embedded.notices.length) {
    console.log(
      data._embedded.notices[i],
      `${1 + i}/${data._embedded.notices.length}`
    );
    i++;
  }
});
getIndex();
/* --------------------------------------------é------------------------------------------------------------------------- */
