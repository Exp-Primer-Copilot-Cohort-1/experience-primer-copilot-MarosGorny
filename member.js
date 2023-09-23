function skillsMember() {
    var options = {
        chart: {
            height: 280,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                size: 150,
                startAngle: -135,
                endAngle: 135,
                track: {
                    background: "#e7e7e7",
                    strokeWidth: '97%',
                    margin: 5, // margin is in pixels
                    dropShadow: {
                        enabled: true,
                        top: 2,
                        left: 0,
                        color: '#999',
                        opacity: 1,
                        blur: 2
                    }
                },
                dataLabels: {
                    name: {
                        show: true,
                        fontSize: '16px',
                        fontWeight: 600,
                        offsetY: -10
                    },
                    value: {
                        show: true,
                        fontSize: '14px',
                        offsetY: 5,
                        formatter: function (val) {
                            return val + "%";
                        }
                    }
                }
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                type: "vertical",
                shadeIntensity: 0.5,
                gradientToColors: ["#ffbc00"],
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 65, 91]
            }
        },
        stroke: {
            lineCap: 'round'
        },
        series: [75],
        labels: ['HTML'],
    }

    var chart = new ApexCharts(
        document.querySelector("#skillsMember"),
        options
    );

    chart.render();
}{
  return {
    restrict: 'E',
    templateUrl: 'app/components/member/member.html',
    controller: 'MemberController',
    controllerAs: 'memberCtrl'
  };
}