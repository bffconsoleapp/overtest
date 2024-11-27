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

//

export default resolvers;