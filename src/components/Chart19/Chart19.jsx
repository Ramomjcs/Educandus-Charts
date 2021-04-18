import React from "react";
import Charts from "../../charts/Charts";
import "../Chart.css";

import Dropdown from '../Dropdown/index';

export default function Chart19() {
  return (
    <>
    <Dropdown />
      <div className="layout">
        <div className="header">
          <h3>
            Estatística gráfica de acertos e erros por avaliação, ano e série
          </h3>
        </div>
        <h2 style={{ color: "#464646" }}>5º Ano - 4ª Série (Avaliação 1)</h2>
        <div className="row">
          <div className="chart">
            <Charts
              type={"pie"}
              title={""}
              data={{
                labels: ["Erros", "Acertos"],
                datasets: [
                  {
                    data: [12, 19],
                    backgroundColor: [
                      "rgba(255, 99, 132, 0.2)",
                      "rgba(75, 192, 192, 0.2)"
                    ],
                    borderColor: [
                      "rgba(255, 99, 132, 1)",
                      "rgba(75, 192, 192, 1)"
                    ],
                    borderWidth: 1
                  }
                ]
              }}
            />
          </div>
          <div className="chart">
            <Charts
              legendY={"Quantidade"}
              legendX={"Respostas"}
              type={"bar"}
              title={""}
              data={{
                labels: ["Erros", "Acertos"],
                datasets: [
                  {
                    data: [19, 12],
                    backgroundColor: [
                      "rgba(75, 192, 192, 0.2)",
                      "rgba(255, 99, 132, 0.2)"
                    ],
                    borderColor: [
                      "rgba(75, 192, 192, 1)",
                      "rgba(255, 99, 132, 1)"
                    ],
                    borderWidth: 1
                  }
                ]
              }}
            />
          </div>
        </div>
        <h2 style={{ color: "#464646" }}>7º Ano - 6ª Série (Avaliação 3)</h2>
        <div className="row">
          <div className="chart">
            <Charts
              type={"pie"}
              title={""}
              data={{
                labels: ["Erros", "Acertos"],
                datasets: [
                  {
                    data: [30, 12],
                    backgroundColor: [
                      "rgba(255, 99, 132, 0.2)",
                      "rgba(75, 192, 192, 0.2)"
                    ],
                    borderColor: [
                      "rgba(255, 99, 132, 1)",
                      "rgba(75, 192, 192, 1)"
                    ],
                    borderWidth: 1
                  }
                ]
              }}
            />
          </div>
          <div className="chart">
            <Charts
              legendY={"Quantidade"}
              legendX={"Respostas"}
              type={"bar"}
              title={""}
              data={{
                labels: ["Erros", "Acertos"],
                datasets: [
                  {
                    data: [12, 30],
                    backgroundColor: [
                      "rgba(75, 192, 192, 0.2)",
                      "rgba(255, 99, 132, 0.2)"
                    ],
                    borderColor: [
                      "rgba(75, 192, 192, 1)",
                      "rgba(255, 99, 132, 1)"
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
