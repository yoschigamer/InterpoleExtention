var LogAllData = async function GetNoticeRed() {
    try {
      let response = await fetch(
        "https://ws-public.interpol.int/notices/v1/red"
      );
      if (response.ok) {
        i = 0;
        let data = await response.json();
        while (i < data._embedded.notices.length) {
          console.log(
            data._embedded.notices[i],
            `${1 + i}/${data._embedded.notices.length}`
          );
          i++;
        }
        return data;
      } else {
        console.log(response.status);
      }
    } catch (error) {
      console.log(error);
    }
  }().then(async function GetNoticeYellow(data) {
    try {
      let response = await fetch(
        "https://ws-public.interpol.int/notices/v1/yellow"
      );
      if (response.ok) {
        i = 0;
        let data = await response.json();
        while (i < data._embedded.notices.length) {
          console.log(
            data._embedded.notices[i],
            `${1 + i}/${data._embedded.notices.length}`
          );
          i++;
        }
        return data;
      } else {
        console.log(response.status);
      }
    } catch (error) {
      console.log(error);
    }
  })

  async function OpenRedNotice() {
    try {
      let response = await fetch(
        "https://ws-public.interpol.int/notices/v1/red"
      );
      if (response.ok) {
        i = 0
        let data = await response.json();
        while (i < data._embedded.notices.length) {

          const Card = document.createElement('div');
          Card.id = "Card";
          Card.innerHTML = `<img id="InterpoleExtensionMenuCardImg" class="InterpoleExtensionMenuCardImg${[i]}" src="" alt="profilePicture" />
          <p id="InterpoleExtensionCardinfos" class="InterpoleExtensionCardinfos${[i]}"></p>`
          document.getElementById('InterpoleExtension').getElementsByTagName("article")[0].appendChild(Card); // on recupère la balise artice de l'ID "InterpoleExtension"

          document.querySelector(`.InterpoleExtensionMenuCardImg${[i]}`).src = data._embedded.notices[i]._links.thumbnail.href
          document.querySelector(`.InterpoleExtensionCardinfos${[i]}`).innerHTML = `<strong>${data._embedded.notices[i].forename}</strong>
          <br> ${data._embedded.notices[i].name} 
          <br> ${data._embedded.notices[i].entity_id} 
          <br> ${data._embedded.notices[i].date_of_birth}
          <br> ${data._embedded.notices[i].nationalities}
          <br> ${data._embedded.notices[i].date_of_birth}`

          i++;
        }
      } else {
        console.log(response.status);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function OpenYellowNotice() {
    try {
      let response = await fetch(
        "https://ws-public.interpol.int/notices/v1/yellow"
      );
      if (response.ok) {
        i = 0
        let data = await response.json();
        while (i < data._embedded.notices.length) {

          const Card = document.createElement('div');
          Card.id = "Card";
          Card.innerHTML = `<img id="InterpoleExtensionMenuCardImg" class="InterpoleExtensionMenuCardImg${[i]}" src="" alt="profilePicture" />
          <p id="InterpoleExtensionCardinfos" class="InterpoleExtensionCardinfos${[i]}"></p>`
          document.getElementById('InterpoleExtension').getElementsByTagName("article")[1].appendChild(Card); // on recupère la balise artice de l'ID "InterpoleExtension"

          document.querySelector(`.InterpoleExtensionMenuCardImg${[i]}`).src = data._embedded.notices[i]._links.thumbnail.href
          document.querySelector(`.InterpoleExtensionCardinfos${[i]}`).innerHTML = `<strong>${data._embedded.notices[i].forename}</strong>
          <br> ${data._embedded.notices[i].name} 
          <br> ${data._embedded.notices[i].entity_id} 
          <br> ${data._embedded.notices[i].date_of_birth}
          <br> ${data._embedded.notices[i].nationalities}
          <br> ${data._embedded.notices[i].date_of_birth}`
          i++;
        }
      } else {
        console.log(response.status);
      }
    } catch (error) {
      console.log(error);
    }
  }

  _OpenButtonR.addEventListener('click', () => {
    if (document.getElementById('InterpoleExtension').getElementsByTagName('article')[0].classList.contains('active')) {
      document.getElementById('InterpoleExtension').getElementsByTagName("article")[0].classList.remove('active');
      let i = 0
      while(i < document.querySelectorAll('#Card').length) {
        document.getElementById('Card').remove();
      }
      i++
    }
    else {
      if (document.getElementById('InterpoleExtension').getElementsByTagName("article")[1].classList.contains('active')) {
        document.getElementById('InterpoleExtension').getElementsByTagName("article")[1].classList.remove('active');
      }
      document.getElementById('InterpoleExtension').getElementsByTagName("article")[0].classList.add('active');
      OpenRedNotice();
    }
  });

  _OpenButtonY.addEventListener('click', () => {
    if (document.getElementById('InterpoleExtension').getElementsByTagName('article')[1].classList.contains('active')) {
      document.getElementById('InterpoleExtension').getElementsByTagName("article")[1].classList.remove('active');
      let i = 0
      while(i < document.querySelectorAll('#Card').length) {
        document.getElementById('Card').remove();
      }
      i++
    }
    else {
      if (document.getElementById('InterpoleExtension').getElementsByTagName("article")[0].classList.contains('active')) {
        document.getElementById('InterpoleExtension').getElementsByTagName("article")[0].classList.remove('active');
      }
      document.getElementById('InterpoleExtension').getElementsByTagName("article")[1].classList.add('active');
      OpenYellowNotice();
    }
  });