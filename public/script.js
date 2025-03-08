const ctx = document.getElementById('statsChart').getContext('2d');

const statsChart = new Chart(ctx, {
    type: 'bar', // Bar chart
    data: {
        labels: ['Bezpieczne', 'Podejrzane', 'Niebezpieczne'],
        datasets: [{
            label: 'Analiza Stron',
            data: [60, 30, 10], // Sample data
            backgroundColor: ['#28a745', '#ffc107', '#dc3545'],
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: { beginAtZero: true }
        }
    }
});
