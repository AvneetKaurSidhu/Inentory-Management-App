import axios from "axios";


const editUnit = async (meeting) => {
    const response = await axios.patch(`http://localhost:5000/units`, meeting, {
        headers: {

        },
    });
    return response.data;
};

export { editUnit };