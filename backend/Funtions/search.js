const getLocation = [
    { name : "Mumbai"},
    // { name : "Hyderabad"},
    // { name : "Kolkata"}
]

const locations2 = [ 'Mumbai', 'Hyderabad', 'Kolkata' ]

const list = document.getElementById('list')

const searchInput = document.getElementById('search')

list.addEventListener('click', (event) => {
    // console.log('Click')
    console.log(event.target.value)
    // if(event.target.Mumbai){
        document.location.href = "./Mumbai_details.html"
    // }
})

function setList(group){
    clearList()
    for(const loc of group){
        const item = document.createElement('li')
        item.classList.add('list-group-item')
        const text = document.createTextNode(loc.name)
        
        item.appendChild(text)
        list.appendChild(item)
    } 

    if(group.length === 0){
        setNoResult()
    }
}

function clearList(){
    while(list.firstChild){
        list.removeChild(list.firstChild)
    }
}

function getRelevency(value,searchTerm){
    if(value === searchTerm){
        return 2
    }else if(value.startsWith(searchTerm)){
        return 1
    }else{
        return 0
    }
}

function setNoResult(){
    const item = document.createElement('li')
    item.classList.add('list-group-item')
    const text = document.createTextNode("No results Found")
    item.appendChild(text)
    list.appendChild(item)
}

searchInput.addEventListener('input', (event) => {
//   console.log('Fired')
    let value = event.target.value
    if(value && value.trim().length > 0){
        // value = value.trim().toLowerCase()
        // setList(getLocation.filter(loc => {
        //     return loc.name.includes(value)
        // })

        // .sort((locationA, locationB) => {
        //     return getRelevency(locationA.name,value) - getRelevency(locationB.name, value)

        // }))
        clearList()
        for(loc of locations2){
            const item = document.createElement('li')
            item.classList.add('list-group-item')
            const text = document.createTextNode(loc)
            
            item.appendChild(text)
            list.appendChild(item)
        }
        if(group.length === 0){
            setNoResult()
        }
    }else{
        clearList()
    }
})



// module.exports = router