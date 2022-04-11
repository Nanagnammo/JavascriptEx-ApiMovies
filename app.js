const searchForm = document.querySelector('#searchText');
const container = document.createElement('div');

searchForm.addEventListener('submit', async function (e){

    e.preventDefault();
    const searchText = searchForm.elements.query.value;
    console.log(searchText)
    config = {params: {q : searchText}}
    const res = await axios.get('https://api.tvmaze.com/search/shows', config)
    imageCard(res.data);
    searchForm.elements.query.value = '';

    // if(container && searchForm.elements.query.value != ''){
    //     container.innerHTML = '';
    // }
        // TRYING TO CLEAR THE CONTAINER BEFORE THE NEW SEARCH
}) 

const imageCard = async function(series){
    document.body.append(container)

    for (const serie of series) {

        if(serie.show.image){
            
            const img = document.createElement('img');
            img.src = serie.show.image.medium
            container.append(img)
        }
    }

}