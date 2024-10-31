import axios from "axios";
const BackEndURL="https://expensetracker-by-awali16-default-rtdb.europe-west1.firebasedatabase.app"
export  async function storeExpense(expenseData){
   const response= await axios.post(`${BackEndURL}/expenses.json`, expenseData);
   return response.data.name;
}
export async function fetchExpenses(){
    try {
        const response = await axios.get(`${BackEndURL}/expenses.json`);
        const expenses=[];
        for (const key in response.data){
            const expenseObj={
                id: key,
                date: new Date(response.data[key].date),
                amount: response.data[key].amount,
                description: response.data[key].description
            }
            expenses.push(expenseObj);
        }
        return expenses;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export  function updateExpense(id, expenseData){
   return axios.put(`${BackEndURL}/expenses/${id}.json`, expenseData)
}

export  function deleteExpense(id){
    return axios.delete(`${BackEndURL}/expenses/${id}.json`);
}
