import React from "react";
import Charts from "../../charts/Charts";
import "../Chart.css";

import Dropdown from "../Dropdown/index";

export default function Chart4() {
  return (
    <>
      <Dropdown />
      <div className="layout">
        <div className="header">
          <h3>
            Emissão de relatórios de utilização dos recursos pelos alunos,
            indicando o tempo de navegação e histórico
          </h3>
        </div>
        <h2 style={{ color: "#464646" }}>Tabela</h2>
        <div className="row">
          <center>
            <table border="1">
              <tr>
                <td>
                  <center>Aluno</center>
                </td>
                <td>
                  <center>Tempo de navegação</center>
                </td>
                <td>
                  <center>Histórico</center>
                </td>
              </tr>
              <tr>
                <td>
                  <center>1</center>
                </td>
                <td>
                  <center>16h</center>
                </td>
                <td>
                  <center>
                    14/04/2021 07:15 | 16/04/2021 22:10 | 17/04/2021 09:28
                  </center>
                </td>
              </tr>
              <tr>
                <td>
                  <center>2</center>
                </td>
                <td>
                  <center>12h</center>
                </td>
                <td>
                  <center>
                    14/04/2021 10:25 | 16/04/2021 15:39 | 17/04/2021 06:14
                  </center>
                </td>
              </tr>
              <tr>
                <td>
                  <center>3</center>
                </td>
                <td>
                  <center>15h</center>
                </td>
                <td>
                  <center>
                    14/04/2021 05:55 | 16/04/2021 06:30 | 17/04/2021 10:21
                  </center>
                </td>
              </tr>
              <tr>
                <td>
                  <center>4</center>
                </td>
                <td>
                  <center>13h</center>
                </td>
                <td>
                  <center>
                    14/04/2021 07:30 | 16/04/2021 09:15 | 17/04/2021 10:35
                  </center>
                </td>
              </tr>
              <tr>
                <td>
                  <center>5</center>
                </td>
                <td>
                  <center>12h</center>
                </td>
                <td>
                  <center>
                    14/04/2021 07:58 | 16/04/2021 07:32 | 17/04/2021 09:28
                  </center>
                </td>
              </tr>
              <tr>
                <td>
                  <center>6</center>
                </td>
                <td>
                  <center>17h</center>
                </td>
                <td>
                  <center>
                    14/04/2021 07:42 | 16/04/2021 14:12 | 17/04/2021 08:48
                  </center>
                </td>
              </tr>
            </table>
          </center>
        </div>
      </div>
    </>
  );
}
