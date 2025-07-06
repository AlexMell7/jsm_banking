'use client'
import { Chart as ChartJS,ArcElement, Legend, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement,Tooltip,Legend)

const Doughnatchart = ({accounts}:DoughnutChartProps) => {
    const flattenedAccounts = accounts.flat(); 
    const accountNames = flattenedAccounts.map((a) => a.name);
    const balances = flattenedAccounts.map((a) => a.currentBalance);
  

    const data = {
        datasets: [
            {
                label:'Banks',
                data:balances,
                backgroundColor:['#0747b6','#2265d8','#2f91fa']

            }
        ],
        labels: accountNames
    }
  return <Doughnut 
        data={data} 
        options={{
            cutout:'60%',
            plugins: {
                legend:{
                    display:false
                }
            }
        }}
  />
  
}

export default Doughnatchart
