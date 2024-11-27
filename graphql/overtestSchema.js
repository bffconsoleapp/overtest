import { gql } from 'apollo-server';

const typeDefs = `
  type Credit_Union {
    id: ID!
    Contract_Number: String!
    Credit_Union_Name: String!
    Premium_Reports: [Premium_Report]
    Premium_Adjustments: [Premium_Adjustment]
    Single_Premium_Certificate_Returns: [Single_Premium_Certificate_Return]
  }

  input Credit_UnionInput {
    id: ID!
    Contract_Number: String!
    Credit_Union_Name: String!
  }

  type Premium_Report {
    id: ID!
    Product_Name: String!
    Report_Period: String!
    Status: String!
    Last_Update: String!
    Period_Ending: String!
    Adjustment_Type_to_the_Credit_Union: String!
    Comment: String!
    Total_Borrower_Fees_: Float!
    CU_Retail_Rate: Float!
    Protected_Loan_Amount: Float!
    Pay_Rate: Float!
    Premium_Due: Float!
    Total_Amount: Float!
  }

  input Premium_ReportInput {
    id: ID!
    Product_Name: String!
    Report_Period: String!
    Status: String!
    Last_Update: String!
    Period_Ending: String!
    Adjustment_Type_to_the_Credit_Union: String!
    Comment: String!
    Total_Borrower_Fees_: Float!
    CU_Retail_Rate: Float!
    Protected_Loan_Amount: Float!
    Pay_Rate: Float!
    Premium_Due: Float!
    Total_Amount: Float!
  }

  type Premium_Adjustment {
    id: ID!
    Product_Name: String!
    Report_Period: String!
    Status: String!
    Last_Update: String!
    Period_Ending: String!
    Adjustment_Type_to_the_Credit_Union: String!
    Comment: String!
    Total_Borrower_Fees_: Float!
    CU_Retail_Rate: Float!
    Protected_Loan_Amount: Float!
    Pay_Rate: Float!
    Premium_Due: Float!
    Total_Amount: Float!
  }

  input Premium_AdjustmentInput {
    id: ID!
    Product_Name: String!
    Report_Period: String!
    Status: String!
    Last_Update: String!
    Period_Ending: String!
    Adjustment_Type_to_the_Credit_Union: String!
    Comment: String!
    Total_Borrower_Fees_: Float!
    CU_Retail_Rate: Float!
    Protected_Loan_Amount: Float!
    Pay_Rate: Float!
    Premium_Due: Float!
    Total_Amount: Float!
  }

  type Single_Premium_Certificate_Return {
    id: ID!
  }

  input Single_Premium_Certificate_ReturnInput {
    id: ID!
  }

  type Query {
    getCreditUnion(id: ID!): Credit_Union
    getPremiumReport(id: ID!): Premium_Report
    getPremiumAdjustment(id: ID!): Premium_Adjustment
    getSinglePremiumCertificateReturn(id: ID!): Single_Premium_Certificate_Return
  }

  type Mutation {
    addCreditUnion(input: Credit_UnionInput!): Credit_Union
    updateCreditUnion(id: ID!, input: Credit_UnionInput!): Credit_Union
    deleteCreditUnion(id: ID!): Credit_Union

    addPremiumReport(input: Premium_ReportInput!): Premium_Report
    updatePremiumReport(id: ID!, input: Premium_ReportInput!): Premium_Report
    deletePremiumReport(id: ID!): Premium_Report

    addPremiumAdjustment(input: Premium_AdjustmentInput!): Premium_Adjustment
    updatePremiumAdjustment(id: ID!, input: Premium_AdjustmentInput!): Premium_Adjustment
    deletePremiumAdjustment(id: ID!): Premium_Adjustment

    addSinglePremiumCertificateReturn(input: Single_Premium_Certificate_ReturnInput!): Single_Premium_Certificate_Return
    updateSinglePremiumCertificateReturn(id: ID!, input: Single_Premium_Certificate_ReturnInput!): Single_Premium_Certificate_Return
    deleteSinglePremiumCertificateReturn(id: ID!): Single_Premium_Certificate_Return
  }
`;

export default typeDefs;