import React from "react";
import Charts from "../../charts/Charts";
import "../Chart.css";

import Dropdown from '../Dropdown/index';

export default function Chart2() {
  return (
    <>
      <Dropdown />
      <div className="layout">
        <div className="header">
          <h3>
            Desempenho comparativo entre alunos, turmas, escolas e Diretorias
            Regionais de Ensino
          </h3>
        </div>
        <h2 style={{ color: "#464646" }}>Alunos</h2>
        <div className="row">
          <div className="chart">
            <Charts
              legendY={"Alunos"}
              legendX={"Média Geral"}
              type={"horizontalbar"}
              title={""}
              data={{
                labels: [
                  "Aluno 1",
                  "Aluno 2",
                  "Aluno 3",
                  "Aluno 4",
                  "Aluno 5",
                  "Aluno 6"
                ],
                datasets: [
                  {
                    data: [8, 5, 6, 6.5, 7.8, 9],
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
              type={"pie"}
              title={""}
              data={{
                labels: [
                  "Aluno 1",
                  "Aluno 2",
                  "Aluno 3",
                  "Aluno 4",
                  "Aluno 5",
                  "Aluno 6"
                ],
                datasets: [
                  {
                    data: [80, 23, 50, 65, 70, 90],
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
        <h2 style={{ color: "#464646" }}>Turmas</h2>
        <div className="row">
          <div className="chart">
            <Charts
              legendX={"Média da turma"}
              legendY={"Turmas"}
              type={"horizontalbar"}
              title={""}
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
                    data: [75, 53, 65, 64, 39, 100],
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
              type={"pie"}
              title={""}
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
                    data: [75, 53, 65, 64, 39, 100],
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
        <h2 style={{ color: "#464646" }}>Escolas</h2>
        <div className="row">
          <div className="chart">
            <Charts
              legendX={"Média da escola"}
              legendY={"Escolas"}
              type={"horizontalbar"}
              title={""}
              data={{
                labels: [
                  "Escola 1",
                  "Escola 2",
                  "Escola 3",
                  "Escola 4",
                  "Escolas 5",
                  "Escolas 6"
                ],
                datasets: [
                  {
                    data: [85, 73, 65, 45, 90, 39],
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
              type={"pie"}
              title={""}
              data={{
                labels: [
                  "Escola 1",
                  "Escola 2",
                  "Escola 3",
                  "Escola 4",
                  "Escolas 5",
                  "Escolas 6"
                ],
                datasets: [
                  {
                    data: [85, 73, 65, 45, 90, 39],
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
        <h2 style={{ color: "#464646" }}>Diretorias Regionais de Ensino</h2>
        <div className="row">
          <div className="chart">
            <Charts
              legendX={"Média diretorias regionais"}
              legendY={"Diretorias Regionais"}
              type={"horizontalbar"}
              title={""}
              data={{
                labels: ["01", "02", "03", "04", "05", "06"],
                datasets: [
                  {
                    data: [95, 72, 58, 69, 78, 80],
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
              type={"pie"}
              title={""}
              data={{
                labels: ["01", "02", "03", "04", "05", "06"],
                datasets: [
                  {
                    data: [95, 72, 58, 69, 78, 80],
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
