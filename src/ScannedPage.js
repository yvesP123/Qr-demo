// src/ScannedPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Tabs, Tab, Container, Row, Col } from 'react-bootstrap';

const ScannedPage = () => {
    const { id } = useParams();

    // Dummy data for the tabs
    const companyDetails = {
        name: "Company A",
        address: "123 Main St, City, Country",
        contact: "contact@companyA.com",
        phone: "+123 456 7890"
    };

    const exportDetails = {
        exportationID: "EXP001",
        date: "2023-10-01",
        mineral: "Gold",
        grade: "High",
        netWeight: 500
    };

    const additionalInfo = {
        notes: "This is a sample note.",
        status: "Shipped",
        destination: "City, Country"
    };

    return (
        <Container fluid className="bg-dark text-white min-vh-100 py-4">
            <Row className="justify-content-center">
                <Col md={8} lg={6}>
                    <h2 className="text-center mb-4">Scanned Export Details</h2>
                    <Tabs defaultActiveKey="companyDetails" id="scanned-tabs" className="mb-3">
                        <Tab eventKey="companyDetails" title="Company Details">
                            <div className="mt-3">
                                <h4>Company Name: {companyDetails.name}</h4>
                                <p>Address: {companyDetails.address}</p>
                                <p>Contact: {companyDetails.contact}</p>
                                <p>Phone: {companyDetails.phone}</p>
                            </div>
                        </Tab>
                        <Tab eventKey="exportDetails" title="Export Details">
                            <div className="mt-3">
                                <h4>Exportation ID: {exportDetails.exportationID}</h4>
                                <p>Date: {exportDetails.date}</p>
                                <p>Mineral: {exportDetails.mineral}</p>
                                <p>Grade: {exportDetails.grade}</p>
                                <p>Net Weight: {exportDetails.netWeight}</p>
                            </div>
                        </Tab>
                        <Tab eventKey="additionalInfo" title="Additional Info">
                            <div className="mt-3">
                                <h4>Notes: {additionalInfo.notes}</h4>
                                <p>Status: {additionalInfo.status}</p>
                                <p>Destination: {additionalInfo.destination}</p>
                            </div>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Container>
    );
};

export default ScannedPage;