import axios from "axios"
function Api() {
    function getMessage() {
        const response = await axios("http://localhost:8080/Name").then(response => {console.log(response.data);

        })
        .catch((error)=>{
            console.log(error);
        });
    }
    return(
        <>
        <button onClick={getMessage}>
            Call Backend
            </button>
        </>
    )
}
export default Api