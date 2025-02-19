import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Table, Form, Container, Row, Col } from "react-bootstrap";
import QRCodeWithPrintButton from "./QRCodeWithPrintButton";
import "./App.css";

const ExportPage = () => {
    const dummyExports = [
        {
            id: 1,
            company: { id: 101, name: "MFT Companny Ltd" },
            exportationID: "MTF/4FM/567",
            date: "2025-02-19",
            mineral: "Tin",
            content: 56.44,
            netWeight: 269,
            link: null
        },
        {
            id: 2,
            company: { id: 101, name: "MFT Companny Ltd" },
            exportationID: "MTF/4FM/567",
            date: "2025-02-18",
            mineral: "Tin",
            content: 62.20,
            netWeight: 928.5,
            link: null
        }
    ];

    const [filtered, setFiltered] = useState(dummyExports);

    const filter = (e) => {
        const input = e.target.value.toLowerCase();
        setFiltered(dummyExports.filter(exp => 
            exp.exportationID.toLowerCase().includes(input) || 
            exp.company.name.toLowerCase().includes(input)
        ));
    };

    return (
        <Container fluid className="export-page bg-dark min-vh-100 py-4">
            <Row>
                <Col>
                    <Card className="bg-dark text-light shadow-lg">
                        <Card.Header className="bg-secondary text-white d-flex justify-content-between align-items-center">
                            <h4 className="mb-0">Exports</h4>
                            <Form.Control 
                                type="text" 
                                placeholder="Search for export" 
                                onChange={filter} 
                                className="text-light border-0 form-control-sm"
                                style={{ width: "200px", color: "white" }}
                            />


                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <Table className="table-dark table-striped border-light">
                                    <thead>
                                        <tr>
                                            <th>
                                                <Form.Check type="checkbox" />
                                            </th>
                                            <th>Company Name</th>
                                            <th>Export ID</th>
                                            <th>Date Of Export</th>
                                            <th>Type Of Mineral</th>
                                            <th>Content</th>
                                            <th>Net Weight (Kg)</th>
                                            <th>Trace</th>
                                            <th>Qr Code</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filtered.length === 0 ? (
                                            <tr>
                                                <td colSpan={9} className="text-center text-light">No Export Records</td>
                                            </tr>
                                        ) : (
                                            filtered.map(_export => (
                                                <tr key={_export.id}>
                                                    <td>
                                                        <Form.Check type="checkbox" />
                                                    </td>
                                                    <td className="text-light">
                                                        {_export.company.name}
                                                    </td>
                                                    <td>
                                                        <td className="text-light">
                                                            {_export.exportationID}
                                                        </td>
                                                    </td>
                                                    <td>{new Date(_export.date).toDateString()}</td>
                                                    <td>
                                                        <span className="badge bg-warning text-dark">{_export.mineral}</span>
                                                    </td>
                                                    <td>{_export.content}</td>
                                                    <td>{_export.netWeight}</td>
                                                    <td>
                                                        {_export.link ? (
                                                            <a target="_blank" href={_export.link} className="text-info" rel="noreferrer">
                                                                Track Shipment
                                                            </a>
                                                        ) : (
                                                            <span className="text-primary">Tracking not available</span>
                                                        )}
                                                    </td>
                                                    <td>
                                                        <QRCodeWithPrintButton value={`https://qr-demo-one.vercel.app/scanned/${_export.id}`} />
                                                    </td> 
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ExportPage;
