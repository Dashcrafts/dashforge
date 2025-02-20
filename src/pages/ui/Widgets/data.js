// images
import clock from '../../../assets/images/icons/clock.svg';
import butting from '../../../assets/images/icons/butting_in.svg';
import globe from '../../../assets/images/icons/globe.svg';
import doughnut from '../../../assets/images/icons/doughnut_chart.svg';
import avatar1 from '../../../assets/images/users/user-1.jpg';
import avatar2 from '../../../assets/images/users/user-2.jpg';
import avatar3 from '../../../assets/images/users/user-3.jpg';
import avatar4 from '../../../assets/images/users/user-4.jpg';
import avatar5 from '../../../assets/images/users/user-5.jpg';
import avatar6 from '../../../assets/images/users/user-6.jpg';
import avatar10 from '../../../assets/images/users/user-10.jpg';
export const widgets = [{
  title: "Statistics",
  count: "$92,847",
  variant: "bg-purple",
  icon: "fe-bar-chart-line-"
}, {
  title: "Users Today",
  count: "56k",
  variant: "bg-info",
  icon: "fe-users"
}, {
  title: "Request Per Minute",
  count: "2568",
  variant: "bg-pink",
  icon: "fe-shuffle"
}, {
  title: "New Downloads",
  count: "523",
  variant: "bg-success",
  icon: "fe-download"
}, {
  title: "Revenue Received",
  count: "$8654",
  variant: "bg-primary",
  icon: "fe-alert-octagon",
  isRight: true
}, {
  title: "Project Done",
  count: "3652",
  variant: "bg-warning",
  icon: "fe-briefcase",
  isRight: true
}, {
  title: "Images Download",
  count: "2,847k",
  variant: "bg-danger",
  icon: "fe-image",
  isRight: true
}, {
  title: "Authors",
  count: "4485",
  variant: "bg-dark",
  icon: "fe-layers",
  isRight: true
}, {
  title: "Product Sold",
  count: "2,562",
  image: clock
}, {
  title: "User This Month",
  count: "8,542",
  image: butting
}, {
  title: "Request Per Minute",
  count: "6,254",
  image: globe
}, {
  title: "Total Users",
  count: "7,524",
  image: doughnut
}];
export const widgetCards = [{
  name: "Chadengle",
  image: avatar3,
  position: "Admin",
  variant: "text-warning"
}, {
  name: "Michael Zenaty",
  image: avatar2,
  position: "User",
  variant: "text-info"
}, {
  name: "Stillnotdavid",
  image: avatar1,
  position: "Admin",
  variant: "text-success"
}, {
  name: "Tomaslau",
  image: avatar10,
  position: "User",
  variant: "text-pink"
}, {
  name: "Thelma Fridley",
  image: avatar3,
  position: "Admin User"
}, {
  name: "Chandler Hervieux",
  image: avatar4,
  position: "Manager"
}, {
  name: "Percy Demers",
  image: avatar5,
  position: "Product Manager"
}, {
  name: "Antoine Masson",
  image: avatar6,
  position: "Premium User"
}];
export const apexColumnChartOpts = {
  chart: {
    height: 45,
    type: 'bar',
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      horizontal: false,
      // endingShape: 'rounded',
      columnWidth: '55%'
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  colors: ["#f7b84b", "#ebeff2"],
  series: [{
    name: 'Net Profit',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  }, {
    name: 'Revenue',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
  }],
  legend: {
    offsetY: 5
  },
  fill: {
    opacity: 1
  },
  grid: {
    row: {
      colors: ['transparent', 'transparent'],
      // takes an array which will be repeated on columns
      opacity: 0.2
    },
    borderColor: '#f1f3fa',
    padding: {
      bottom: 10
    }
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands";
      }
    }
  }
};
export const columnWithDataLableOpts = {
  chart: {
    height: 380,
    type: 'bar',
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      dataLabels: {
        position: 'top' // top, center, bottom
      }
    }
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val + "%";
    },
    offsetY: -30,
    style: {
      fontSize: '12px',
      colors: ["#304758"]
    }
  },
  colors: ["#348cd4"],
  series: [{
    name: 'Inflation',
    data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
  }],
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    position: 'top',
    labels: {
      offsetY: -18
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    crosshairs: {
      fill: {
        type: 'gradient',
        gradient: {
          colorFrom: '#D8E3F0',
          colorTo: '#BED1E6',
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5
        }
      }
    },
    tooltip: {
      enabled: true,
      offsetY: -35
    }
  },
  fill: {
    gradient: {
      // enabled: false,
      shade: 'light',
      type: "horizontal",
      shadeIntensity: 0.25,
      gradientToColors: undefined,
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [50, 0, 100, 100]
    }
  },
  yaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    labels: {
      show: false,
      formatter: function (val) {
        return val + "%";
      }
    }
  },
  title: {
    text: 'Monthly Inflation in Argentina, 2002',
    floating: true,
    offsetY: 350,
    align: 'center',
    style: {
      color: '#444'
    }
  },
  grid: {
    row: {
      colors: ['transparent', 'transparent'],
      // takes an array which will be repeated on columns
      opacity: 0.2
    },
    borderColor: '#f1f3fa'
  }
};
export const lineColumnAreaChartOpts = {
  chart: {
    height: 380,
    type: 'line',
    // padding: {
    //     right: 0,
    //     left: 0
    // },
    stacked: false,
    toolbar: {
      show: false
    }
  },
  stroke: {
    width: [0, 2, 4],
    curve: 'smooth'
  },
  plotOptions: {
    bar: {
      columnWidth: '50%'
    }
  },
  colors: ["#348cd4", "#ced4da", "#f06292"],
  series: [{
    name: 'Team A',
    type: 'column',
    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
  }, {
    name: 'Team B',
    type: 'area',
    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
  }, {
    name: 'Team C',
    type: 'line',
    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
  }],
  fill: {
    opacity: [0.85, 0.25, 1],
    gradient: {
      inverseColors: false,
      shade: 'light',
      type: "vertical",
      opacityFrom: 0.85,
      opacityTo: 0.55,
      stops: [0, 100, 100, 100]
    }
  },
  labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003', '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'],
  markers: {
    size: 0
  },
  legend: {
    offsetY: 7
  },
  xaxis: {
    type: 'datetime'
  },
  yaxis: {
    title: {
      text: 'Points'
    }
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (y) {
        if (typeof y !== "undefined") {
          return y.toFixed(0) + " points";
        }
        return y;
      }
    }
  },
  grid: {
    borderColor: '#f1f3fa',
    padding: {
      bottom: 10
    }
  }
};