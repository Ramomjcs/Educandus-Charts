import React from "react";
import Charts from "../../charts/Charts";
import "../Chart.css";

import Dropdown from "../Dropdown/index";

export default function Chart9() {
  return (
    <>
      <Dropdown />
      <div className="layout">
        <div className="header">
          <h3>Resultados das avaliações de turmas e alunos</h3>
        </div>
        <h2 style={{ color: "#464646" }}>Turmas</h2>
        <div className="row">
          <div className="chart">
            <Charts
              legendY={"Avaliações"}
              legendX={"Média da Turma"}
              type={"horizontalbar"}
              title={"Turma 1"}
              data={{
                labels: [
                  "Avaliação 1",
                  "Avaliação 2",
                  "Avaliação 3",
                  "Avaliação 4",
                  "Avaliação 5"
                ],
                datasets: [
                  {
                    data: [5, 8, 6, 5, 9, 10],
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
              legendY={"Avaliações"}
              legendX={"Média das Notas"}
              type={"horizontalbar"}
              title={"Turma 2"}
              data={{
                labels: ["Aluno 1", "Aluno 2", "Aluno 3", "Aluno 4", "Aluno 5"],
                datasets: [
                  {
                    data: [5, 8, 6, 5, 9, 10],
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
        <h2 style={{ color: "#464646" }}>Alunos</h2>
        <div className="row">
          <div className="chart">
            <Charts
              legendY={"Notas"}
              legendX={"Avaliações"}
              type={"bar"}
              title={"Aluno 1"}
              data={{
                labels: [
                  "Avaliação 1",
                  "Avaliação 2",
                  "Avaliação 3",
                  "Avaliação 4",
                  "Avaliação 5",
                  "Avaliação 6"
                ],
                datasets: [
                  {
                    data: [5, 7, 7.5, 9, 4, 8, 10],
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
              legendY={"Notas"}
              legendX={"Avaliações"}
              type={"bar"}
              title={"Aluno 2"}
              data={{
                labels: [
                  "Avaliação 1",
                  "Avaliação 2",
                  "Avaliação 3",
                  "Avaliação 4",
                  "Avaliação 5",
                  "Avaliação 6"
                ],
                datasets: [
                  {
                    data: [8, 9, 5.9, 8, 7, 4, 10],
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
    </>
  );
}
