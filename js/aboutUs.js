const aboutUsCardAdvantages=document.querySelector('.advantages .card-body');
const aboutUsIMGSLink="/img/apout-page/advantage-list/"
const advantagesList = [
    {
        title: "ПОЛНОСТЬЮ ОТВЕТСТВЕННЫЙ",
        img: "Group1.png",
        description: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In eleifend suscipit enim, eu commodo neque molestie vitae."
    },
    {
        title: "НЕОГРАНИЧЕННЫЕ ВАРИАНТЫ",
        img: "Group2.png",
        description: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In eleifend suscipit enim, eu commodo neque molestie vitae."
    },
    {
        title: "бесплатного участия",
        img: "Group3.png",
        description: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In eleifend suscipit enim, eu commodo neque molestie vitae."
    },
    {
        title: "электронная коммерция",
        img: "Group4.png",
        description: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In eleifend suscipit enim, eu commodo neque molestie vitae."
    },
    {
        title: "бесплатное образование",
        img: "Group5.png",
        description: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In eleifend suscipit enim, eu commodo neque molestie vitae."
    },
    {
        title: "ПОДДЕРЖИВАТЬ",
        img: "Group6.png",
        description: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In eleifend suscipit enim, eu commodo neque molestie vitae."
    },
]

function generateAdvantagesList(advantagesList){
    advantagesList.map((cardInfo)=>{
        let advantageCard = `
         <div class="card mb-3 col-3">
                <div class="col g-0">
                  <div class="row-md-3 d-flex">
                    <img src="${aboutUsIMGSLink}${cardInfo.img}" class="img-fluid rounded-start" alt="${cardInfo.img}">
                    <h3 class="card-title">${cardInfo.title}</h3>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <p class="card-text">${cardInfo.description}</p>
                    </div>
                  </div>
                </div>
              </div> 
        `
        aboutUsCardAdvantages.insertAdjacentHTML("beforeend", advantageCard)
    })
}

generateAdvantagesList(advantagesList)