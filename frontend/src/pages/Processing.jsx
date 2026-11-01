import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Processing = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const image = location.state?.image;

    const [currentStep, setCurrentStep] = useState(0);

    const steps = [
        { label: "Initializing secure connection", icon: "lock" },
        { label: "Analyzing document quality", icon: "image_search" },
        { label: "Extracting prescription data", icon: "document_scanner" },
        { label: "Verifying medications & dosages", icon: "verified" },
        { label: "Generating insights report", icon: "summarize" }
    ];

    useEffect(() => {
        if (!image) {
            navigate("/upload");
            return;
        }

        const totalTime = 7000;
        const timePerStep = totalTime / steps.length;

        const interval = setInterval(() => {
            setCurrentStep((prev) => {
                if (prev < steps.length - 1) return prev + 1;
                return prev;
            });
        }, timePerStep);

        const timer = setTimeout(() => {
            navigate("/report", {
                state: {
                    image,
                    uploadResult: location.state?.uploadResult
                },
            });
        }, totalTime);

        return () => {
            clearTimeout(timer);
            clearInterval(interval);
        };
    }, [image, navigate, steps.length]);

    return (
        <main className="flex-grow flex items-center justify-center min-h-[calc(100vh-80px)] px-margin-mobile md:px-margin-desktop bg-surface relative overflow-hidden">
            {/* Background glowing effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="glass-card rounded-3xl p-xl max-w-[500px] w-full shadow-xl relative z-10 border border-outline-variant/50">
                <div className="flex flex-col items-center mb-xl text-center">
                    <div className="relative w-24 h-24 mb-lg flex items-center justify-center">
                        <div className="absolute inset-0 border-4 border-primary-fixed rounded-full"></div>
                        <div className="absolute inset-0 border-4 border-primary rounded-full border-t-transparent animate-spin"></div>
                        <span className="material-symbols-outlined text-4xl text-primary animate-pulse">
                            memory
                        </span>
                    </div>
                    <h1 className="font-headline-lg text-headline-lg text-on-surface mb-sm">Analyzing Document</h1>
                    <p className="font-body-md text-body-md text-on-surface-variant">Our AI is securely processing your prescription. Please wait a moment.</p>
                </div>

                <div className="space-y-sm">
                    {steps.map((step, index) => {
                        const isCompleted = currentStep > index;
                        const isCurrent = currentStep === index;

                        return (
                            <div
                                key={index}
                                className={`flex items-center gap-md p-md rounded-2xl transition-all duration-700 ${
                                    isCurrent ? 'bg-primary-container/20 border border-primary/20 scale-[1.02] shadow-sm' : 
                                    isCompleted ? 'opacity-80' : 'opacity-40'
                                }`}
                            >
                                <div className={`w-12 h-12 flex-shrink-0 rounded-full flex items-center justify-center transition-colors duration-700 ${
                                    isCompleted ? 'bg-secondary text-on-secondary' :
                                    isCurrent ? 'bg-primary text-on-primary shadow-[0_0_20px_rgba(0,74,198,0.4)]' :
                                    'bg-surface-variant text-on-surface-variant'
                                }`}>
                                    <span className="material-symbols-outlined text-[24px]">
                                        {isCompleted ? 'check' : step.icon}
                                    </span>
                                </div>
                                <div className="flex-1">
                                    <h3 className={`font-label-md text-label-md transition-colors duration-700 ${
                                        isCurrent ? 'text-primary font-bold' : 'text-on-surface'
                                    }`}>
                                        {step.label}
                                    </h3>
                                    {isCurrent && (
                                        <p className="text-body-sm font-body-sm text-primary/80 animate-pulse mt-1">
                                            Processing...
                                        </p>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
};

export default Processing;