import React, { useEffect, useState } from "react";
import Header from "../../../../components/header/Header";
import person_img from "../../../../assets/images/person_img.png";
import Style from "../Top_Agents.module.css";
import { PopupContextHook } from "../../../../PopupContext";
import { getTopPerformingAgentsProvider } from "../../../api_detaills/provider/staff_provider";

const Total_Top_Agents = () => {
  const [topAgents, setTopAgents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const { updateLoadingPopup, updateErrorText, updateErrorPopup } =
    PopupContextHook();

  useEffect(() => {
    getTopPerformingAgentsProvider({
      updateTopAgents: (data) => {
        setTopAgents(data);
      },
      updateLoadingPopup,
      updateErrorText,
      updateErrorPopup,
    });
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = topAgents.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(topAgents.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div id={Style.Top_Agents_mainDiv}>
      <Header
        headerText={"Top Performing Agents"}
        headerInfo={"Here's an overview of top performing agents"}
      />

      <div id={Style.Top_Agents_wrapperDiv}>
        <div id={Style.Top_Agents_header_inputDiv}>
          <div id={Style.Top_Agents_headerText}>Top Performing Agents</div>
        </div>
        <div id={Style.Top_Agents_TableWrapperDiv}>
          <table>
            <thead>
              <tr id={Style.headerTable}>
                <th>S/N</th>
                <th>Agent Name</th>
                <th>In-app calls</th>
                <th>In-app messages</th>
                <th>Mails</th>
                <th>Toll calls</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((agent, index) => {
                return (
                  <tr key={index}>
                    <td>{indexOfFirstItem + index + 1}</td>
                    <td>
                      <p>
                        <img src={person_img} alt="" />
                        {agent.agentName ?? "Null"}
                      </p>
                    </td>
                    <td className={Style.tableData}>
                      {agent.queries.find((q) => q.type === "Calls")?.count ||
                        0}
                    </td>
                    <td className={Style.tableData}>
                      {agent.queries.find((q) => q.type === "In-app-message")
                        ?.count || 0}
                    </td>
                    <td className={Style.tableData}>
                      {agent.queries.find((q) => q.type === "Msg")?.count || 0}
                    </td>
                    <td className={Style.tableData}>{agent.resolvedCount}</td>
                    <td>
                      <button
                        style={{
                          backgroundColor: "#0E093C",
                          border: "none",
                          color: "#FFFFFF",
                          fontSize: "0.7rem",
                          width: "5.18rem",
                          borderRadius: "8px",
                          height: "1.37rem",
                        }}
                      >
                        Review
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              style={{
                padding: "5px 10px",
                backgroundColor: "#0E093C",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: currentPage === 1 ? "not-allowed" : "pointer",
              }}
            >
              Previous
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                style={{
                  padding: "5px 10px",
                  backgroundColor:
                    currentPage === index + 1 ? "#0E093C" : "white",
                  color: currentPage === index + 1 ? "white" : "#0E093C",
                  border: "1px solid #0E093C",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              style={{
                padding: "5px 10px",
                backgroundColor: "#0E093C",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: currentPage === totalPages ? "not-allowed" : "pointer",
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Total_Top_Agents;
