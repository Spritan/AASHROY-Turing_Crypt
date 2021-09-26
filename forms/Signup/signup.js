// export default function(){
//     let data = {userid: 'xxx', password: 'xxx', email: 'xxx@x.x'};
//     fetch('http://localhost:5000/api/auth/signup', {
//         method: 'POST',body: JSON.stringify(data),headers: {'Content-Type': 'application/json'}

//     }).then(res => console.log(res))
// }
const button = document.getElementById('signup');
button.addEventListener('click', async () => {
    try {
        let data = {userid: 'xxx', password: 'xxx', email: 'xxx@x.x'};
        const response = await fetch('http://localhost:5000/api/auth/signup', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(response);
    } catch (error) {
        console.log(error);
    }
});