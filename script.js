document.addEventListener("DOMContentLoaded", function () {
    fetch("data.json") // Replace with API URL if available
        .then(response => response.json())
        .then(data => {
            displayTransactions(data);
            updateChart(data);
        });

    function displayTransactions(transactions) {
        const tableBody = document.getElementById("transactions-table");
        tableBody.innerHTML = ""; // Clear table before inserting

        transactions.forEach(tx => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${tx.date}</td>
                <td>${tx.type}</td>
                <td>${tx.amount} RWF</td>
                <td><button onclick="viewDetails('${tx.id}')">View</button></td>
            `;
            tableBody.appendChild(row);
        });
    }

    function updateChart(transactions) {
        const ctx = document.getElementById('transactionChart').getContext('2d');
        const chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Incoming', 'Payments', 'Withdrawals'],
                datasets: [{
                    label: 'Transactions by Type',
                    data: [10, 20, 5], // Replace with actual counts
                    backgroundColor: ['blue', 'green', 'red']
                }]
            }
        });
    }
});
