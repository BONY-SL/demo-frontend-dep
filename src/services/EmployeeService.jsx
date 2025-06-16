import axios from "axios";

const API = "http://34.200.96.211:8080/api/employees";
const token = () => localStorage.getItem("token");

export const addEmployee = (employee) =>
  axios.post(API, employee, {
    headers: { Authorization: `Bearer ${token()}` },
  });

export const getEmployees = () =>
  axios.get(API, {
    headers: { Authorization: `Bearer ${token()}` },
  });