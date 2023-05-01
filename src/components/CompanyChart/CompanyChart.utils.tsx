export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    zoom: {
      zoom: {
        wheel: {
          enabled: true,
        },
        mode: "x" as const,
        speed: 100,
      },
      pan: {
        enabled: true,
        mode: "x" as const,
        speed: 0.5,
      },
    },
    title: {
      display: true,
      text: "Company data chart - closing values",
    },
    scales: {
      x: {
        type: "time",
        ticks: { source: "auto" },
        offset: false,
        grid: {
          drawBorder: true,
          drawOnChartArea: false,
          drawTicks: true,
        },
        font: {
          size: 8,
        },
      },
      xAxis2: {
        type: "time",
        time: {
          unit: "day",
        },
      },
    },
  },
};
