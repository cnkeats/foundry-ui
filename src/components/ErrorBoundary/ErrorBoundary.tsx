import React from "react";
import styled from "styled-components";
import { SubcomponentPropsType } from "../commonTypes";

export interface ErrorBoundaryProps {
  hasError: boolean;
  errorText: string;
  errorCode: string;
  inputProps?: SubcomponentPropsType;
};

const ErrorBoundary = ({
  hasError,
  errorText,
  errorCode,
  inputProps,
}: ErrorBoundaryProps) => { 

  const BoundaryBase = styled.div`
    padding: 1rem;
    border: 2px solid black;
    border-radius: 0.5rem;
    color: white;
    background-color: grey;
    font-size: 1.2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  `;

  const NoError = styled(BoundaryBase)`
    background-color: #44BB66;
  `;

  const ErrorBox = styled(BoundaryBase)`
    background-color: #EE4444;
  `;

  const ErrorCode = styled.div`
    border: 2px solid black;
    border-radius: 100rem;
    
  `;

  
  return (
    <div>
      {hasError ? (
        <ErrorBox>
          An error has occured
          <ErrorCode>
            {errorCode}
          </ErrorCode>
          <div>
            {errorCode} - {errorText}
          </div>
        </ErrorBox>) : (
        <NoError>
          No error occured
        </NoError>
      )}
    </div>
  );
};


export default ErrorBoundary;