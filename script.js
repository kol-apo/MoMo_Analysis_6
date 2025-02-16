document.addEventListener("DOMContentLoaded", function () {
    let transactions = [
        { id: "123456", type: "Incoming Money", amount: 5000, date: "2024-01-01" },
        { id: "789012", type: "Payments to Code Holders", amount: 1500, date: "2024-01-02" },
        { id: "345678", type: "Airtime Bill Payments", amount: 3000, date: "2024-01-03" },
        { id: "999888", type: "Withdrawals from Agents", amount: 20000, date: "2024-01-04" },
        { id: "555444", type: "Internet and Voice Bundle Purchases", amount: 2000, date: "2024-01-05" },
    ];

    const tableBody = document.querySelector("#transactions-table tbody");
    const searchInput = document.getElementById("search");
    const filterSelect = document.getElementById("filter-type");
    const sortSelect = document.getElementById("sort-by");
    const totalTransactions = document.getElementById("total-transactions");

    function loadTransactions(data = transactions) {
        tableBody.innerHTML = "";
        let total = 0;

        data.forEach(tx => {
            total += tx.amount;
            const row = `
                <tr>
                    <td>${tx.id}</td>
                    <td>${tx.type}</td>
                    <td>${tx.amount} RWF</td>
                    <td>${tx.date}</td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });

        totalTransactions.textContent = data.length;
    }

    function searchTransactions() {
        const query = searchInput.value.toLowerCase();
        let filteredData = transactions.filter(tx =>
            tx.type.toLowerCase().includes(query) ||
            tx.id.includes(query) ||
            tx.date.includes(query)
        );
        loadTransactions(filteredData);
    }

    function filterTransactions() {
        const selectedType = filterSelect.value;
        let filteredData = transactions;
        if (selectedType !== "all") {
            filteredData = transactions.filter(tx => tx.type === selectedType);
        }
        loadTransactions(filteredData);
    }

    function sortTransactions() {
        const sortBy = sortSelect.value;
        let sortedData = [...transactions];

        if (sortBy === "amount") {
            sortedData.sort((a, b) => b.amount - a.amount);
        } else if (sortBy === "date") {
            sortedData.sort((a, b) => new Date(b.date) - new Date(a.date));
        }
        
        loadTransactions(sortedData);
    }

    searchInput.addEventListener("input", searchTransactions);
    filterSelect.addEventListener("change", filterTransactions);
    sortSelect.addEventListener("change", sortTransactions);

    loadTransactions();
});
