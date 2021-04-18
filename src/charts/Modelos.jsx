import React, { Component } from "react";
import Charts from "./Charts.jsx";

export default class Modelos extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  // componentDidMount() {
  //   this.props.setObj(16, this.props.currentRoute);
  // }
  render() {
    let array = [
      [
        {
          right: true,
          quantity: 5
        },
        {
          right: false,
          quantity: 5
        },
        {
          right: false,
          quantity: 10
        },
        {
          right: false,
          quantity: 5
        },
        {
          right: false,
          quantity: 5
        }
      ],
      [
        {
          right: false,
          quantity: 7
        },
        {
          right: false,
          quantity: 10
        },
        {
          right: true,
          quantity: 3
        },
        {
          right: false,
          quantity: 5
        },
        {
          right: false,
          quantity: 5
        }
      ],
      [
        {
          right: false,
          quantity: 8
        },
        {
          right: false,
          quantity: 5
        },
        {
          right: false,
          quantity: 10
        },
        {
          right: false,
          quantity: 6
        },
        {
          right: true,
          quantity: 1
        }
      ]
    ];
    let dataBubbleWrong = [];
    let dataBubbleRight = [];
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].length; j++) {
        if (array[i][j].right) {
          dataBubbleRight.push({
            x: j,
            y: array.length - 1 - i,
            r: array[i][j].quantity
          });
        } else {
          dataBubbleWrong.push({
            x: j,
            y: array.length - 1 - i,
            r: array[i][j].quantity
          });
        }
      }
    }

    return (
      <React.Fragment>
        <Charts
          type={"horizontalbar"}
          title={"Gráfico de barra horizontal"}
          data={{
            labels: [
              "Turma 1",
              "Turma 2",
              "Turma 3",
              "Turma 4",
              "Turma 5",
              "Turma 6"
            ],
            datasets: [
              {
                data: [8, 6, 5.5, 5, 4, 7],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(255, 159, 64, 0.2)"
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)"
                ],
                borderWidth: 1
              }
            ]
          }}
        />
        <Charts
          type={"bar"}
          title={"Gráfico de barra"}
          data={{
            labels: [
              "Turma 1",
              "Turma 2",
              "Turma 3",
              "Turma 4",
              "Turma 5",
              "Turma 6"
            ],
            datasets: [
              {
                data: [8, 6, 5.5, 5, 4, 7],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(255, 159, 64, 0.2)"
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)"
                ],
                borderWidth: 1
              }
            ]
          }}
        />
        <Charts
          type={"bubble"}
          title={"Gráfico de bolha"}
          data={{
            datasets: [
              {
                label: "Resposta errada",
                data: dataBubbleWrong,
                backgroundColor: "#F00"
              },
              {
                label: "Resposta certa",
                data: dataBubbleRight,
                backgroundColor: "#00F"
              }
            ]
          }}
        />
        <Charts
          type={"line"}
          title={"Gráfico de linha"}
          data={{
            labels: ["1", "2", "3", "4", "5", "6"],
            datasets: [
              {
                label: "Dataset 1",
                data: [12, 19, 3, 5, 2, 3],
                fill: false,
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgba(255, 99, 132, 0.2)"
              },
              {
                label: "Dataset 2",
                data: [10, 19, 20, 5, 10, 13],
                fill: false,
                backgroundColor: "rgb(0, 0, 132)",
                borderColor: "rgba(0, 0, 132, 0.2)"
              }
            ]
          }}
        />
        <Charts
          type={"pie"}
          title={"Gráfico de pizza"}
          data={{
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [
              {
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(255, 159, 64, 0.2)"
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)"
                ],
                borderWidth: 1
              }
            ]
          }}
        />
      </React.Fragment>
    );
  }
}
