Sure, here's the defined GraphQL schema and resolver code with the requested format:

```graphql
# codegen-start
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
# codegen-end
```

```javascript
// codegen-start-resolver

const resolvers = {
  Query: {
    getCreditUnion: (_, { id }) => {
      return {
        id,
        Contract_Number: "CN123",
        Credit_Union_Name: "Sample CU",
        Premium_Reports: [],
        Premium_Adjustments: [],
        Single_Premium_Certificate_Returns: []
      };
    },
    getPremiumReport: (_, { id }) => {
      return {
        id,
        Product_Name: "Product A",
        Report_Period: "2023Q3",
        Status: "Active",
        Last_Update: "2023-09-15",
        Period_Ending: "2023-09-30",
        Adjustment_Type_to_the_Credit_Union: "Type A",
        Comment: "Good Performance",
        Total_Borrower_Fees_: 1000.0,
        CU_Retail_Rate: 2.5,
        Protected_Loan_Amount: 50000.0,
        Pay_Rate: 1.0,
        Premium_Due: 500.0,
        Total_Amount: 1050.0
      };
    },
    getPremiumAdjustment: (_, { id }) => {
      return {
        id,
        Product_Name: "Product A",
        Report_Period: "2023Q3",
        Status: "Active",
        Last_Update: "2023-09-15",
        Period_Ending: "2023-09-30",
        Adjustment_Type_to_the_Credit_Union: "Type A",
        Comment: "Adjusted",
        Total_Borrower_Fees_: 500.0,
        CU_Retail_Rate: 2.0,
        Protected_Loan_Amount: 25000.0,
        Pay_Rate: 1.5,
        Premium_Due: 250.0,
        Total_Amount: 525.0
      };
    },
    getSinglePremiumCertificateReturn: (_, { id }) => {
      return { id };
    }
  },
  
  Mutation: {
    addCreditUnion: (_, { input }) => {
      // Add logic here
      return input;
    },
    updateCreditUnion: (_, { id, input }) => {
      // Update logic here
      return { id, ...input };
    },
    deleteCreditUnion: (_, { id }) => {
      // Delete logic here
      return { id };
    },

    addPremiumReport: (_, { input }) => {
      // Add logic here
      return input;
    },
    updatePremiumReport: (_, { id, input }) => {
      // Update logic here
      return { id, ...input };
    },
    deletePremiumReport: (_, { id }) => {
      // Delete logic here
      return { id };
    },

    addPremiumAdjustment: (_, { input }) => {
      // Add logic here
      return input;
    },
    updatePremiumAdjustment: (_, { id, input }) => {
      // Update logic here
      return { id, ...input };
    },
    deletePremiumAdjustment: (_, { id }) => {
      // Delete logic here
      return { id };
    },

    addSinglePremiumCertificateReturn: (_, { input }) => {
      // Add logic here
      return input;
    },
    updateSinglePremiumCertificateReturn: (_, { id, input }) => {
      // Update logic here
      return { id, ...input };
    },
    deleteSinglePremiumCertificateReturn: (_, { id }) => {
      // Delete logic here
      return { id };
    }
  }
}

// codegen-end-resolver
```