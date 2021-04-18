import React from "react";
import Charts from "../../charts/Charts";
import "../Chart.css";

import Dropdown from "../Dropdown/index";

export default function Chart6() {
  return (
    <>
      <Dropdown />
      <div className="layout">
        <div className="header">
          <h3>
            Relação de atividades não cumpridas, por aluno e por componente
            curricular
          </h3>
        </div>
        <h2 style={{ color: "#464646" }}>Turma 1</h2>
        <div className="row">
          <div className="chart">
            <Charts
              legendY={"Alunos"}
              legendX={"% de Atividades não cumpridas"}
              type={"horizontalbar"}
              title={""}
              data={{
                labels: ["Aluno 1", "Aluno 2", "Aluno 3", "Aluno 4", "Aluno 5"],
                datasets: [
                  {
                    data: [50, 80, 60, 50, 90, 100],
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
          </div>
          <div className="row">
            <div className="chart">
              <Charts
                legendY={"% de Atividades não cumpridas"}
                legendX={"Componente Curricular"}
                type={"bar"}
                title={"Aluno 1"}
                data={{
                  labels: [
                    "Matemática",
                    "Português",
                    "História",
                    "Física",
                    "Artes",
                    "Geografia"
                  ],
                  datasets: [
                    {
                      data: [50, 70, 70.5, 90, 40, 80, 100],
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
            </div>
            <div className="chart">
              <Charts
                legendY={"% de Atividades não cumpridas"}
                legendX={"Componente Curricular"}
                type={"bar"}
                title={"Aluno 2"}
                data={{
                  labels: [
                    "Matemática",
                    "Português",
                    "História",
                    "Física",
                    "Artes",
                    "Geografia"
                  ],
                  datasets: [
                    {
                      data: [80, 90, 50.9, 80, 70, 40, 100],
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
