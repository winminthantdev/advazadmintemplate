// Start Navbar

$(document).ready(function () {
  // Start Left Side Bar
  $('.sidebarlinks').click(function(){
        $('.sidebarlinks').removeClass('currents');
        $(this).addClass('currents');
  })
  // End Left Side Bar
});

// End Navbar

// Start Content Section

// Start Bar Chart
const bar_ctx = document.getElementById("myBarChart");

const barData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Nov", "Oct", "Dec"],
  datasets: [
    {
      data: [1.8, 3.3, 2.8, 4.4, 3.2, 4, 3.2, 4, 4.7, 3.7, 4.3, 4.5],
      backgroundColor: ["rgba(255, 99, 132, 0.5)", "rgba(54, 162, 235, 0.5)", "rgba(255, 206, 86, 0.5)", "rgba(75, 192, 192, 0.5)", "rgba(153, 102, 255, 0.5)", "rgba(255, 159, 64, 0.5)", "rgba(255, 99, 132, 0.5)", "rgba(54, 162, 235, 0.5)", "rgba(255, 206, 86, 0.5)", "rgba(75, 192, 192, 0.5)", "rgba(153, 102, 255, 0.5)", "rgba(255, 159, 64, 0.5)"],
      borderWidth: 1,
    },
  ],
};

const barChart = new Chart(bar_ctx, {
  type: "bar",
  data: barData,
  options: {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false, // Disable gridlines on the x-axis
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true, // Enable the y-axis title
          text: "Total Earnings", // Text for the y-axis label
          font: {
            size: 16, // Font size of the label
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Optionally hide the legend entirely
      },
    },
  },
});
// End Bar Chart


// Start Doughnut Chart
const donut_ctx = document.getElementById("myChart");

const donutData = {
  labels:["Costa Rica","Namibia","Mauritius","Chile","Bahams","Paraguay","Micronesia","Colombia","Brazil"],
  datasets: [
    {
      data: [300, 50, 100, 242, 61, 72, 63, 81, 26],
      backgroundColor: ["#083d04","#02434d","#037a8c","#0564a3","#6c05a3","#9cb52d"],
      hoverOffset: 4,
    },
  ],
};

const donutChart = new Chart(donut_ctx, {
  type: "doughnut",
  data: donutData,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels:{
          font:{
            size: 12,
          },
        },
      },
    },
  },
});

// End Doughnut Chart

// End Content
