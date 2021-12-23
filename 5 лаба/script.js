window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
  }

async function getResponse(){
    let response = await fetch('https://randomuser.me/api/?inc=name,gender,location,email,dob,phone,picture&results=10&noinfo')
    let content = await response.json()
    console.log(content)
    let list=document.querySelector('.posts')
    let key=0;
    while (key<10){
        console.log(key);
        list.innerHTML+=`
        <div class="col-sm d-flex justify-content-center">
            <div class="card" style="width: 18rem;">
                  <img src="${content['results'][key]['picture']['medium']}" class="card-img-top">
                  <div class="card-body">
                    <h5 class="card-title">${content['results'][key]['gender']}</h5>
                    <p class="card-text"></p>
                    <h5 class="card-title">${content['results'][key]['name']['first']} ${content['results'][key]['name']['last']}</h5>
                    <p class="card-text"></p>
                    <h5 class="card-title">${content['results'][key]['location']['country']} ${content['results'][key]['location']['city']} ${content['results'][key]['location']['street']['name']}</h5>
                    <p class="card-text"></p>
                    <h5 class="card-title">${content['results'][key]['email']}</h5>
                    <p class="card-text"></p>
                    <h5 class="card-title">${content['results'][key]['dob']['date']} age:${content['results'][key]['dob']['age']}</h5>
                    <p class="card-text"></p>
                    <h5 class="card-title">phone: ${content['results'][key]['phone']}</h5>
                    <p class="card-text"></p>S
                  </div>
            </div>
        </div><br>`;
        key++;
    }
    
    
    
    
}
getResponse()

