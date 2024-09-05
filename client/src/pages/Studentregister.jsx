import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
export default function Studentregister() {
    const navigate=useNavigate();
    const [activeState, setActiveState] = useState('Guidelines');
    const [steps, setSteps] = useState([]);
    const [guidelinesChecked, setGuidelinesChecked] = useState(false);
    const [registrationData, setRegistrationData] = useState({
        name: '',
        fatherName: '',
        motherName: '',
        address: '',
        phoneNumber: '',
        adhaarCard: '',
        college: '',
        collegeId: '',
        school12th: '',
        marks12th: '',
        school10th: '',
        marks10th: ''
    });
    const [documents, setDocuments] = useState(["Aadhar Card", "Domicile", "12th Marksheet", "10th Marksheet", "Low Income Cerificate", "Bank Account"]);
    const [allGuidelinesChecked, setAllGuidelinesChecked] = useState(false);
    const [verificationChecked, setVerificationChecked] = useState(false);
    const isRegistrationComplete = Object.values(registrationData).every(field => field !== '');
    const isDocumentsComplete = documents.every(doc => doc !== null);
    const canFinish = allGuidelinesChecked && verificationChecked;

    const handleFileUpload = (e, index) => {
        const file = e.target.files[0];
        if (file && file.type === 'application/pdf') {
            const newDocuments = [...documents];
            newDocuments[index] = file;
            setDocuments(newDocuments);
        } else {
            alert('Wrong format! Please upload a PDF.');
        }
    };

    const handleNextStep = () => {
        if (activeState === 'Guidelines' && guidelinesChecked) {
            setSteps([...steps, 'Guidelines']);
            setActiveState('Registration');
        } else if (activeState === 'Registration' && isRegistrationComplete) {
            setSteps([...steps, 'Registration']);
            setActiveState('Documents');
        } else if (activeState === 'Documents' && isDocumentsComplete) {
            setSteps([...steps, 'Documents']);
            setActiveState('Finish');
        }
    };

    const handleBackStep = () => {
        if (activeState === 'Registration') {
            setActiveState('Guidelines');
        } else if (activeState === 'Documents') {
            setActiveState('Registration');
        } else if (activeState === 'Finish') {
            setActiveState('Documents');
        }
    };

    const handleFinish = () => {
        if (canFinish) {
            alert('Registration Completed Successfully!');
            // Implement finish logic here, e.g., submit the form
        }
    };

    return (
        <>
            <div className="flex justify-between">
                <div className="flex space-x-2">
                    <img
                        src={require('../assets/logo.jpg')}
                        alt="loading"
                        className="h-32 w-32 brightness-95 contrast-200"
                    />
                    <div className="pt-5">
                        <h1 className="text-4xl font-extrabold cursor-pointer" onClick={()=>navigate('/')}>PMSSS</h1>
                        <h3 className="text-lg font-semibold">Academic Year 2024-2025</h3>
                    </div>
                </div>

                <Navbar />
            </div>
            <div className="flex items-center justify-around px-20 mt-2">
                {['Guidelines', 'Registration', 'Documents', 'Finish'].map((step, index) => (
                    <React.Fragment key={step}>
                        <h1 className={`${steps.includes(step) ? 'text-pink-500 bg-pink-100' : 'bg-slate-100 '} ${activeState === step ? 'border-2 border-black' : ''}
                           text-lg p-4 font-semibold rounded-xl shadow-sm cursor-pointer shadow-black`}>
                            {step}
                        </h1>
                        {index < 3 && <hr className={`h-1 w-60  mx-2 ${steps.includes(step) ? 'bg-pink-400' : 'bg-gray-300'} `}/>}
                    </React.Fragment>
                ))}
            </div>

            {/* Content Section */}
            <div className="p-10 px-20">
                {activeState === 'Guidelines' && (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Please read the following guidelines carefully:</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Ensure all personal information provided is accurate and up-to-date.</li>
                            <li>Double-check your contact details, including phone number and email address, before submission.</li>
                            <li>All uploaded documents must be in PDF format and should not exceed the size limit specified.</li>
                            <li>Make sure to fill out all required fields marked with a star (*).</li>
                            <li>Only authorized and genuine documents should be uploaded; any discrepancies may lead to disqualification.</li>
                            <li>Review the privacy policy and terms of service before submitting your application.</li>
                        </ul>
                        <div className="mt-4">
                            <input
                                type="checkbox"
                                id="guidelines-check"
                                checked={guidelinesChecked}
                                onChange={(e) => setGuidelinesChecked(e.target.checked)}
                                className="mr-2"
                            />
                            <label htmlFor="guidelines-check" className="font-semibold">
                                I have read and agree to the guidelines
                            </label>
                        </div>
                        <div className="flex justify-between mt-4">
                            <button
                                className="px-4 py-2 bg-gray-500 text-white rounded"
                                onClick={handleBackStep}
                                disabled={activeState === 'Guidelines'}
                            >
                                Back
                            </button>
                            <button
                                className={`px-4 py-2 bg-blue-500 text-white rounded ${!guidelinesChecked ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={!guidelinesChecked}
                                onClick={handleNextStep}
                            >
                                Save and Continue
                            </button>
                        </div>
                    </div>
                )}

                {activeState === 'Registration' && (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Fill in your details:</h2>
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { label: "Name", value: registrationData.name, field: "name" },
                                { label: "Father's Name", value: registrationData.fatherName, field: "fatherName" },
                                { label: "Mother's Name", value: registrationData.motherName, field: "motherName" },
                                { label: "Address", value: registrationData.address, field: "address" },
                                { label: "Phone Number", value: registrationData.phoneNumber, field: "phoneNumber" },
                                { label: "Adhaar Card", value: registrationData.adhaarCard, field: "adhaarCard" },
                                { label: "College", value: registrationData.college, field: "college" },
                                { label: "College ID", value: registrationData.collegeId, field: "collegeId" },
                                { label: "12th School Name", value: registrationData.school12th, field: "school12th" },
                                { label: "12th Marks Details", value: registrationData.marks12th, field: "marks12th" },
                                { label: "10th School Name", value: registrationData.school10th, field: "school10th" },
                                { label: "10th Marks Details", value: registrationData.marks10th, field: "marks10th" }
                            ].map(({ label, value, field }, index) => (
                                <div key={index} className="flex flex-col">
                                    <label className="font-semibold">
                                        {label} <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder={`Enter your ${label.toLowerCase()}`}
                                        value={value}
                                        onChange={(e) => setRegistrationData({ ...registrationData, [field]: e.target.value })}
                                        className="p-2 border border-gray-300 rounded mt-1 "
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between mt-4">
                            <button
                                className="px-4 py-2 bg-gray-500 text-white rounded"
                                onClick={handleBackStep}
                            >
                                Back
                            </button>
                            <button
                                className={`px-4 py-2 bg-blue-500 text-white rounded ${!isRegistrationComplete ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={!isRegistrationComplete}
                                onClick={handleNextStep}
                            >
                                Save and Continue
                            </button>
                        </div>
                    </div>
                )}

                {activeState === 'Documents' && (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Upload your documents:</h2>
                        <div className="grid grid-cols-3 gap-6">
                            {documents.map((doc, index) => (
                                <div key={index} className="flex flex-col">
                                    <label className="font-semibold">{doc}</label>
                                    <input
                                        type="file"
                                        onChange={(e) => handleFileUpload(e, index)}
                                        className="p-2 border border-gray-300 rounded mt-1"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between mt-4">
                            <button
                                className="px-4 py-2 bg-gray-500 text-white rounded"
                                onClick={handleBackStep}
                            >
                                Back
                            </button>
                            <button
                                className={`px-4 py-2 bg-blue-500 text-white rounded ${!isDocumentsComplete ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={!isDocumentsComplete}
                                onClick={handleNextStep}
                            >
                                Save and Continue
                            </button>
                        </div>
                    </div>
                )}

                {activeState === 'Finish' && (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Complete your registration:</h2>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="guidelines-check"
                                checked={allGuidelinesChecked}
                                onChange={(e) => setAllGuidelinesChecked(e.target.checked)}
                                className="mr-2"
                            />
                            <label htmlFor="guidelines-check" className="font-semibold">
                                I have read and accept all guidelines and information provided
                            </label>
                        </div>
                        <div className="flex items-center mt-4">
                            <input
                                type="checkbox"
                                id="verification-check"
                                checked={verificationChecked}
                                onChange={(e) => setVerificationChecked(e.target.checked)}
                                className="mr-2"
                            />
                            <label htmlFor="verification-check" className="font-semibold">
                                I verify that all the information provided is accurate
                            </label>
                        </div>
                        <div className="flex justify-between mt-4">
                            <button
                                className="px-4 py-2 bg-gray-500 text-white rounded"
                                onClick={handleBackStep}
                            >
                                Back
                            </button>
                            <button
                                className={`px-4 py-2 bg-green-500 text-white rounded ${!canFinish ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={!canFinish}
                                onClick={handleFinish}
                            >
                                Finish
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
