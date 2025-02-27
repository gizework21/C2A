"use client";

import { useState } from "react";
import React from "react";

import { z } from "zod";
import {
  BusinessSignupSchema,
  FinacialInfoSchema,
  IdentityInfoSchema,
} from "@/lib";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BussinessInformation } from "./bussiness-information";
import { FinancialSetup } from "./financial-setup";
import { IdentityAndVerification } from "./identity-and-verification";
import { FinishedSignup } from "./finished-signup";
import { ArrowLeft } from "lucide-react";

interface ISteps {
  label:
    | "Business Information"
    | "Subscription"
    | "Financial Setup"
    | "Identity Verification";
  status: "completed" | "current" | "upcoming";
}

export const BusinessSignupForm = () => {
  const [steps, setSteps] = useState<ISteps[]>([
    { label: "Business Information", status: "current" },
    { label: "Subscription", status: "upcoming" },
    { label: "Financial Setup", status: "upcoming" },
    { label: "Identity Verification", status: "upcoming" },
  ]);

  const [businessInfo, setBusinessInfo] = useState<
    z.infer<typeof BusinessSignupSchema>
  >({
    storeName: "",
    phone: "",
    storeLocations: [{ id: "1", name: "" }],
    tinNumber: "",
    region: "",
    woreda: "",
  });

  const [financialInfo, setFinancialInfo] = useState<
    z.infer<typeof FinacialInfoSchema>
  >({
    accountHolderName: "",
    accountNumber: "",
    bankName: "",
    country: "",
    accountType: "",
    bankBranch: "",
  });

  const [identityInfo, setIdentityInfo] = useState<
    z.infer<typeof IdentityInfoSchema>
  >({
    image: undefined,
  });

  const currentStep = steps.findIndex((step) => step.status === "current") + 1;

  const handleNextStep = (data: any) => {
    if (currentStep === 1) {
      setBusinessInfo((prevData) => ({ ...prevData, ...data }));
    } else if (currentStep === 2) {
      setFinancialInfo((prevData) => ({ ...prevData, ...data }));
    } else if (currentStep === 3) {
      setIdentityInfo((prevData) => ({ ...prevData, ...data }));
    }

    setSteps((prevSteps) =>
      prevSteps.map((step, index) => {
        if (index === currentStep - 1) {
          return { ...step, status: "completed" };
        }
        if (index === currentStep) {
          return { ...step, status: "current" };
        }
        return step;
      })
    );
  };

  const handleBackStep = () => {
    setSteps((prevSteps) =>
      prevSteps.map((step, index) => {
        if (index === currentStep - 2) {
          return { ...step, status: "current" };
        }
        if (index === currentStep - 1) {
          return { ...step, status: "upcoming" };
        }
        return step;
      })
    );
  };

  const handleReset = () => {
    // Reset all data and steps
    setBusinessInfo({
      storeName: "",
      phone: "",
      storeLocations: [{ id: "1", name: "" }],

      tinNumber: "",
      region: "",
      woreda: "",
    });
    setFinancialInfo({
      accountHolderName: "",
      accountNumber: "",
      bankName: "",
      country: "",
      accountType: "",
      bankBranch: "",
    });
    setIdentityInfo({
      image: undefined,
    });
  };

  const handleBackToFirstStep = () => {
    setSteps((prevSteps) =>
      prevSteps.map((step, index) => ({
        ...step,
        status: index === 0 ? "current" : "upcoming",
      }))
    );
  };

  const combinedFormData = {
    ...businessInfo,
    ...financialInfo,
    ...identityInfo,
  };

  return (
    <div className="mx-auto md:max-w-2xl bg-white p-4 space-y-4 flex flex-col items-center justify-center w-full">
      <ProgressBar
        steps={steps}
        onBack={handleBackStep}
        canGoBack={currentStep > 1}
      />

      {currentStep === 1 && (
        <BussinessInformation formData={businessInfo} onNext={handleNextStep} />
      )}
      {currentStep === 2 && (
        <FinancialSetup formData={financialInfo} onNext={handleNextStep} />
      )}
      {currentStep === 3 && (
        <IdentityAndVerification
          formData={identityInfo}
          setFormData={setIdentityInfo}
          combinedFormData={combinedFormData}
          onNext={handleNextStep}
          onFinish={handleReset}
        />
      )}
      {currentStep === 4 && <FinishedSignup onFinish={handleBackToFirstStep} />}
    </div>
  );
};

interface ProgressBarProps {
  steps: ISteps[];
  onBack: () => void; // Add this prop to handle back navigation
  canGoBack: boolean; // This prop determines if the back button should be enabled
}
const ProgressBar = ({ steps, onBack, canGoBack }: ProgressBarProps) => {
  return (
    <div className="w-full md:py-8">
      <div className="flex items-center">
        {/* Back Button */}
        <button
          onClick={onBack}
          disabled={!canGoBack}
          className={`mr-2 p-2 rounded-full ${
            canGoBack ? "bg-[#d7a022] hover:bg-[#b98419]" : "bg-gray-200"
          }`}
        >
          <ArrowLeft className="h-5 w-5 text-white" />
        </button>

        {/* Steps Indicator */}
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="relative">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div
                      className={`w-4 h-4 rounded-full ${
                        step.status === "completed"
                          ? "bg-green-500"
                          : "bg-gray-400"
                      }`}
                    ></div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{step.label}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            {index !== steps.length - 1 && (
              <div
                className={`flex-1 h-0.5 ${
                  step.status === "completed" ? "bg-green-500" : "bg-gray-400"
                }`}
              ></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
