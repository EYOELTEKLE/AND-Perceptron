Bias = -30;
x1 = window.prompt("Enter X1");
x2 = window.prompt("Enter X2");
Activation = 1 / (1 + Math.exp(-20*x1-20*x2-Bias));
prediction = Math.round(Activation);
alert("Neural Network has Flagged " + prediction);
