import React from "react";
import { Button, Form, Pagination } from "react-bootstrap";

const TableData = ({ ContestPop, setContestPop }) => {
  const data = [
    {
      ContestId: "Annette Black",
      ContestName: "imAnnette",
      Created_at: " 09/05/2023 20:30",
      ContestEnd: " 09/05/2023 20:30",
      fees: " $25",
      Participated_User: " Annette Black",
      status: "Active",
      winnerName: "Annette Black",
      winnerAmount: "$255",
      AdminEarning: "$255",
      organizationEarning: "$255",
    },
    {
      ContestId: "Annette Black",
      ContestName: "imAnnette",
      Created_at: " 09/05/2023 20:30",
      ContestEnd: " 09/05/2023 20:30",
      fees: " $25",
      Participated_User: " Annette Black",
      status: "Active",
      winnerName: "Annette Black",
      winnerAmount: "$255",
      AdminEarning: "$255",
      organizationEarning: "$255",
    },
    {
      ContestId: "Annette Black",
      ContestName: "imAnnette",
      Created_at: " 09/05/2023 20:30",
      ContestEnd: " 09/05/2023 20:30",
      fees: " $25",
      Participated_User: " Annette Black",
      status: "Active",
      winnerName: "Annette Black",
      winnerAmount: "$255",
      AdminEarning: "$255",
      organizationEarning: "$255",
    },
    {
      ContestId: "Annette Black",
      ContestName: "imAnnette",
      Created_at: " 09/05/2023 20:30",
      ContestEnd: " 09/05/2023 20:30",
      fees: " $25",
      Participated_User: " Annette Black",
      status: "Active",
      winnerName: "Annette Black",
      winnerAmount: "$255",
      AdminEarning: "$255",
      organizationEarning: "$255",
    },
  ];
  const handleContest = () => {
    setContestPop(!ContestPop);
  };

  return (
    <>
      <div className="table-responsive">
        <table className="table commonTable">
          <thead className="border-0">
            <tr>
              <th className=" border-0 p-3">S.No.</th>
              <th className=" border-0 p-3">Contest ID</th>
              <th className=" border-0 p-3">Contest Name</th>
              <th className=" border-0 p-3">Created At</th>
              <th className=" border-0 p-3">Contest End</th>
              <th className=" border-0 p-3">Fees</th>
              <th className=" border-0 p-3">Participated At</th>
              <th className=" border-0 p-3">Status</th>
              <th className=" border-0 p-3">Winner Name</th>
              <th className=" border-0 p-3">Winning Amount</th>
              <th className=" border-0 p-3">Admin Earning</th>
              <th className=" border-0 p-3">Organizing earning</th>
              <th className=" border-0 p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.length > 0 &&
              data.map((data, idx) => {
                return (
                  <>
                    <tr>
                      <td className="p-3 border-0">{idx + 1}</td>
                      <td className="p-3 border-0">{data.ContestId}</td>
                      <td className="p-3 border-0">{data.ContestName}</td>
                      <td className="p-3 border-0">{data.Created_at}</td>

                      <td className="p-3 border-0">{data.ContestEnd}</td>
                      <td className="p-3 border-0">{data.fees}</td>
                      <td className="p-3 border-0">{data.Participated_User}</td>
                      <td className="p-3 border-0">
                        <span
                          className={
                            data.status == "Active"
                              ? "statusLabel rounded-pill px-3 py-1 successLabel"
                              : "statusLabel rounded-pill px-3 py-1"
                          }
                        >
                          {data.status}
                        </span>
                      </td>
                      <td className="p-3 border-0">{data.winnerName}</td>
                      <td className="p-3 border-0">{data.winnerAmount}</td>
                      <td className="p-3 border-0">{data.AdminEarning}</td>
                      <td className="p-3 border-0">
                        {data.organizationEarning}
                      </td>

                      <td className="p-3 border-0">
                        <div className="d-flex align-items-center gap-10">
                          <Button
                            onClick={handleContest}
                            variant="transparent"
                            className="border-0 p-0"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="19"
                              viewBox="0 0 20 19"
                              fill="none"
                            >
                              <g clipPath="url(#clip0_0_97)">
                                <mask
                                  id="mask0_0_97"
                                  // style="mask-type:luminance"
                                  maskUnits="userSpaceOnUse"
                                  x="0"
                                  y="0"
                                  width="19"
                                  height="19"
                                >
                                  <path
                                    d="M18.8324 0H0.658447V18.1739H18.8324V0Z"
                                    fill="white"
                                  />
                                </mask>
                                <g mask="url(#mask0_0_97)">
                                  <path
                                    d="M18.2303 8.89374C17.5623 7.16592 16.4027 5.67167 14.8947 4.5957C13.3867 3.51973 11.5965 2.90921 9.74532 2.8396C7.89417 2.90921 6.10397 3.51973 4.59599 4.5957C3.08802 5.67167 1.92838 7.16592 1.2604 8.89374C1.21528 9.01857 1.21528 9.1552 1.2604 9.28002C1.92838 11.0079 3.08802 12.5021 4.59599 13.5781C6.10397 14.654 7.89417 15.2645 9.74532 15.3342C11.5965 15.2645 13.3867 14.654 14.8947 13.5781C16.4027 12.5021 17.5623 11.0079 18.2303 9.28002C18.2754 9.1552 18.2754 9.01857 18.2303 8.89374ZM9.74532 14.1983C6.73529 14.1983 3.55485 11.9663 2.40195 9.08688C3.55485 6.20745 6.73529 3.97547 9.74532 3.97547C12.7554 3.97547 15.9358 6.20745 17.0887 9.08688C15.9358 11.9663 12.7554 14.1983 9.74532 14.1983Z"
                                    fill="black"
                                  />
                                  <path
                                    d="M9.74552 5.6792C9.07151 5.6792 8.41271 5.87905 7.85234 6.25349C7.29195 6.62792 6.85519 7.16012 6.59728 7.78277C6.33937 8.40545 6.27189 9.09061 6.40337 9.75156C6.53485 10.4126 6.8594 11.0198 7.33596 11.4963C7.81252 11.9729 8.4197 12.2975 9.08068 12.4289C9.74172 12.5604 10.4269 12.4929 11.0496 12.235C11.6722 11.9771 12.2044 11.5404 12.5788 10.98C12.9533 10.4196 13.1531 9.76073 13.1531 9.08681C13.1531 8.18305 12.7941 7.31631 12.155 6.67726C11.516 6.03822 10.6493 5.6792 9.74552 5.6792ZM9.74552 11.3585C9.29621 11.3585 8.85698 11.2253 8.48339 10.9757C8.10981 10.7261 7.81863 10.3713 7.64668 9.95618C7.47474 9.54107 7.42975 9.08425 7.51741 8.64361C7.60507 8.20294 7.82143 7.79815 8.13914 7.48045C8.45684 7.16274 8.8616 6.94638 9.30232 6.85872C9.74295 6.77106 10.1998 6.81605 10.6149 6.98799C11.03 7.15993 11.3848 7.45111 11.6344 7.8247C11.884 8.19829 12.0173 8.6375 12.0173 9.08681C12.0173 9.68927 11.7779 10.2671 11.3518 10.6931C10.9258 11.1192 10.348 11.3585 9.74552 11.3585Z"
                                    fill="black"
                                  />
                                </g>
                              </g>
                              <defs>
                                <clipPath id="clip0_0_97">
                                  <rect
                                    width="19"
                                    height="18.1739"
                                    fill="white"
                                    transform="translate(0.564941)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </Button>
                          <Button className="d-flex align-items-center justify-content-center tableButton">
                            Stop
                          </Button>
                        </div>
                      </td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </div>
      <div className="d-flex align-items-center justify-content-between paginationWrpper flex-wrap mt-3">
        <div className="left d-flex align-items-center gap-10">
          <label htmlFor="" className="form-label m-0">
            Show Result
          </label>
          <Form.Select aria-label="Default select example">
            <option>10</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </div>
        <Pagination>
          <Pagination.Prev />
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Next />
        </Pagination>
      </div>
    </>
  );
};

export default TableData;