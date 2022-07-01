import axios from "axios";


const addUnit = async (meeting) => {
    const response = await axios.post(`http://localhost:5000/units`, meeting, {
        headers: {

        },
    });
    return response.data;
};

export { addUnit };
