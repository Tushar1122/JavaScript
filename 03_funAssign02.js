function bankDetails(...strings) {
  //  console.log("Bank Name->",bankName,"Bank Account No->",accountNum,"Bank Location->",location,"Bank Pincode->",pinCode);
  console.log("Bank Details are"); 
  console.log(strings.join(', '));

}
bankDetails("CITI Bank",3456782345,'Pune',431202);
bankDetails("Axis Bank",7856782345,"Mumbai",441202);
bankDetails("HDFC Bank",8956782345,"Pune",631202,"Open");