import axios from "axios"; 

const API_URL = "http://127.0.0.1:8000/";

// Function to register (POST request)
export const Registerdata = async (formData) => {
    const response = await axios.post(`${API_URL}employees/`, formData); // Change URL to /employees/
    return response.data;
};

// Function to get all employees (GET request)
export const GetEmployees = async () => {
    const response = await axios.get(`${API_URL}employees/`); // Change URL to /employees/
    return response.data;
};

export const GetEmployeesbyid = async (id) => {
    const response = await axios.get(`${API_URL}employees/${id}/`); // Change URL to /employees/
    return response.data;
};


export const DeleteEmployee = async (id) => {
      const response = await axios.delete(`${API_URL}employees/${id}/`);
      return response.data;
  };
