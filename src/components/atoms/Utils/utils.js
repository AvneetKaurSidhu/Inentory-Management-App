const validateUnitInput = (value) => {
    const regex = /^[a-z0-9A-Z/-]+$/;
    if(value==="")
    return "*Please fill the field"
    if (!value.match(regex))
        return "*Please enter valid data";
    return "";
}
export default validateUnitInput;