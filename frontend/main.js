window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();  
})

const functionApi = '';

const getVisitCount = () => {
    let count = 3;
    fetch(functionApi).then(response => {
        return response.json();
    }).then(response => {
        console.log("Calling functionApi");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error) {
        console.log(error);
    });
    return count;
}