import React, { Component } from "react";
import { Bar, Bubble, HorizontalBar, Line, Pie } from "react-chartjs-2";

class Charts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: this.props.type,
      data: this.props.data,
      options: this.props.options,
      title: this.props.title,
      legendX: this.props.legendX,
      legendY: this.props.legendY
    };
  }

  render() {
    return (
      <React.Fragment>
        {this.state.type === "horizontalbar" ? (
          <HorizontalBar
            data={this.state.data}
            options={{
              title: {
                display: true,
                text: this.state.title,
                fontSize: 20
              },
              legend: {
                display: false
              },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true
                    },
                    scaleLabel: {
                      display: true,
                      labelString: this.state.legendY
                    }
                  }
                ],
                xAxes: [
                  {
                    ticks: {
                      beginAtZero: true
                    },
                    scaleLabel: {
                      display: true,
                      labelString: this.state.legendX
                    }
                  }
                ]
              }
            }}
          />
        ) : this.state.type === "bar" ? (
          <Bar
            data={this.state.data}
            options={{
              title: {
                display: true,
                text: this.state.title,
                fontSize: 20
              },
              legend: {
                display: false
              },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true
                    },
                    scaleLabel: {
                      display: true,
                      labelString: this.state.legendY
                    }
                  }
                ],
                xAxes: [
                  {
                    ticks: {
                      beginAtZero: true
                    },
                    scaleLabel: {
                      display: true,
                      labelString: this.state.legendX
                    }
                  }
                ]
              }
            }}
          />
        ) : this.state.type === "bubble" ? (
          <Bubble
            data={this.state.data}
            options={{
              responsive: true,
              title: {
                display: true,
                text: this.state.title,
                fontSize: 20
              },
              legend: {
                position: "bottom"
              },
              layout: {
                padding: {
                  left: 15,
                  top: 15,
                  right: 15,
                  bottom: 15
                }
              },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                      display: false
                    },
                    gridLines: {
                      drawBorder: false,
                      display: false
                    }
                  }
                ],
                xAxes: [
                  {
                    display: false
                  }
                ]
              },
              tooltips: {
                callbacks: {
                  label: function (tooltipItem, data) {
                    var rLabel =
                      data.datasets[tooltipItem.datasetIndex].data[
                        tooltipItem.index
                      ].r;
                    return rLabel;
                  }
                }
              }
            }}
          />
        ) : this.state.type === "pie" ? (
          <Pie
            data={this.state.data}
            options={{
              responsive: true,
              title: {
                display: true,
                text: this.state.title,
                fontSize: 20
              }
            }}
          />
        ) : this.state.type === "line" ? (
          <Line
            data={this.state.data}
            options={{
              responsive: true,
              title: {
                display: true,
                text: this.state.title,
                fontSize: 20
              },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true
                    }
                  }
                ]
              }
            }}
          />
        ) : null}
      </React.Fragment>
    );
  }
}

export default Charts;
