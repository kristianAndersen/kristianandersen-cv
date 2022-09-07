document.addEventListener("DOMContentLoaded", function(event) {

    const work = document.getElementById('work');
    const education = document.getElementById('education');
    const courses = document.getElementById('courses');

    const loadJSON = (callback) => {
    const xObj = new XMLHttpRequest();
    xObj.overrideMimeType("application/json");
    // 1. replace './data.json' with the local path of your file
    xObj.open('GET', '/data/work.json', true);
    xObj.onreadystatechange = () => {
        if (xObj.readyState === 4 && xObj.status === 200) {
            // 2. call your callback function
            callback(xObj.responseText);
        }
    };
    xObj.send(null);
  }
  
  const init = () => {
    loadJSON((response) => {
      
        const json = JSON.parse(response);
   
        
        
        
        for (var i=0; i < json.work.length; i++) {
            

            work.insertAdjacentHTML('beforeend', `<div class='${json.work[i].class} w-100'>
            <article class=" d-flex f-gsb flex-column  w-100 d-flex flex-column align-items-center p-2">
            <div style="text-align:left;" class="d-flex flex-column f-gsb align-items-start w-xl-50 w-md-100 w-sm-100">
            <aside class="year">${json.work[i].year}</aside> 
            <h4>${json.work[i].title}</h4>
            <h5>${json.work[i].company}</h5>
        
            <p class="period">${json.work[i].period}</p> 
        
            <p class="description">${json.work[i].description} </p>
            <p class="Competences"> <strong>Competences:</strong> ${json.work[i].Competences}</p>  
            
            <hr>
            </div>
            
            </article><div>`)

        }
        
        for (var i=0; i < json.Education.length; i++) {
            

            education.insertAdjacentHTML('beforeend', `<article class=" d-flex f-gsb flex-column  w-100 d-flex align-items-center p-2">
            <div style="text-align:left;" class="d-flex flex-column f-gsb align-items-start w-xl-50 w-md-100 ">
            <aside class="year">${json.Education[i].year}</aside> 
            <h4>${json.Education[i].title}</h4>
            <h5>${json.Education[i].company}</h5>
        
        
            <p class="description">${json.Education[i].description} </p>
            <p class="Competences"> <strong>Competences:</strong> ${json.Education[i].Competences}</p>  
            </div>
            </article>`)

        }

        for (var i=0; i < json.Courses.length; i++) {
            

            courses.insertAdjacentHTML('beforeend', `<article class=" d-flex f-gsb flex-column w-100 d-flex align-items-center p-2">
            <div style="text-align:left;" class="d-flex flex-column f-gsb align-items-start w-xl-50 w-md-100 ">
            <aside class="year">${json.Courses[i].year}</aside> 
            <h4>${json.Courses[i].title}</h4>
            <h5>${json.Courses[i].company}</h5>
        
        
            <p class="description">${json.Courses[i].description} </p>
          
            </div>
            </article>`)

        }

    });
  }
  
  init();

});